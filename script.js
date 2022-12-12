const slider = document.getElementById("grid-size-slider");
const applyBtn = document.getElementById("apply");
const sliderDisplay = document.getElementById("show-grid-size");
let gridSize = slider.value;    
sliderDisplay.innerHTML = gridSize;

//Call createGrid on DOMloading
window.addEventListener("DOMContentLoaded", ()=>{createGrid("init")})


//EventListner for showing range output
slider.addEventListener("input", ()=> {
    sliderDisplay.innerHTML = slider.value;
})
 
//Enter key to Apply range input changes
slider.addEventListener("keypress",(e)=> {
    if(e.key==="Enter"){ applyBtn.click() }
})

//Global shortcut for Clearing grid
document.addEventListener("keydown",(e)=>{
    if(e.ctrlKey && (e.key.toUpperCase()==="Z")){
        document.getElementById("clear").click()
    }
})

document.getElementById("clear").addEventListener("click",()=>{createGrid("clear")})

applyBtn.addEventListener("click",()=>{createGrid("apply")})

function createGrid(calledFrom){
    switch(calledFrom){
        case "init": break;
        case "clear":
            if(gridSize===sliderDisplay.innerHTML){break}
            else{
                sliderDisplay.innerHTML = slider.value = gridSize;
                break;
            }
        case "apply":
            if(gridSize===sliderDisplay.innerHTML){return}
            else{
                gridSize = sliderDisplay.innerHTML;
                break;    
            }
        default: throw Error('createGrid() not supplied with a valid argument.')
    }
    
    const sketchboard = document.querySelector(".sketchboard");
    sketchboard.replaceChildren();
    for(i=0;i<gridSize;i++){
        for(j=0;j<gridSize;j++){
            const makeDiv = document.createElement("div");
            
            sketchboard.appendChild(makeDiv)
            makeDiv.addEventListener('mouseover',makeTrail)
        }
        sketchboard.appendChild(document.createElement("br"));
    }
}

function makeTrail(e){
    switch(whichMode()){
        case "default-mode": e.target.style.background = "black"; break;
        case "rgb-mode": e.target.style.background = randoRgbColor(); break;
        default: throw Error("Invalid radio button selected")
    }
}

function whichMode(){
    const modeMenu = document.querySelectorAll(".modes > input");
    for(i=0;i<2;i++){
        if(modeMenu[i].checked){return modeMenu[i].id}
    }
}

function randoRgbColor(){
    return `rgb(${Math.floor(Math.random()*256)},${
        Math.floor(Math.random()*256)},${
            Math.floor(Math.random()*256)})`
}