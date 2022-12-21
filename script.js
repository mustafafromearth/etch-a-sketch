const slider = document.getElementById("grid-size-slider");
const applyBtn = document.getElementById("apply");
const sliderDisplay = document.getElementById("show-slider-input");
const modeMenu = document.querySelectorAll(".modes > .flex-align-container > input");
let gridSize = slider.value;
let currentMode = defaultMode;

//Initialize grid creation
createGrid()

//EventListner for showing range output
slider.addEventListener("input", ()=> {
    sliderDisplay.innerHTML = slider.value;
})

//Enter key to Apply range input changes
slider.addEventListener("keypress",(e)=> {
    if(e.key==="Enter"){ applyBtn.click() }
})

//Map Ctrl+Z to Clear Button
document.addEventListener("keydown",(e)=>{
    if(e.ctrlKey && (e.key.toUpperCase()==="Z")){
        document.getElementById("clear").click()
    }
})

//Limit Clear Button to when sliderDisplay remains unchanged
document.getElementById("clear").addEventListener("click",()=>{
    if(gridSize===sliderDisplay.innerHTML){createGrid()}
    else{
        sliderDisplay.innerHTML = slider.value = gridSize;
        createGrid();
    }
})

//Limit applyBtn to when sliderDisplay value changes
applyBtn.addEventListener("click",()=>{
    if(gridSize!==sliderDisplay.innerHTML){
        gridSize = sliderDisplay.innerHTML;
        createGrid();
    }
})

function createGrid(){
    const sketchboard = document.querySelector(".sketchboard");
    sketchboard.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
    sketchboard.replaceChildren();

    for(i=0;i<gridSize*gridSize;i++){
        const makeDiv = document.createElement("div");
        makeDiv.addEventListener('mouseover',currentMode)
        sketchboard.appendChild(makeDiv)
    }
}

function defaultMode(e){
    e.target.style.background = "black";
}

function rgbMode(e){
    e.target.style.background =
     `rgb(${Math.floor(Math.random()*256)},${
        Math.floor(Math.random()*256)},${
            Math.floor(Math.random()*256)})`
}

modeMenu.forEach((element) => element.addEventListener('click',changeMode));

//Appropriate function attached to sketchboardCells according to radio input
function changeMode(e){
    const sketchboardCells = document.querySelectorAll(".sketchboard > div");
    sketchboardCells.forEach((element)=>{
        element.removeEventListener("mouseover", currentMode);
    })
    currentMode = Function("return " + e.target.id)()
    sketchboardCells.forEach((element)=>{
        element.addEventListener("mouseover", currentMode);
    })
}