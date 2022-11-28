const slider = document.getElementById("grid-size");
let gridSize = slider.value;
document.getElementById("size-display").innerHTML = gridSize;

slider.oninput = function(){
    document.getElementById("size-display").innerHTML = this.value;
} 

//Creates grid and gived id to each div
for(i=0;i<gridSize;i++){
    for(j=0;j<gridSize;j++){
        const makeDiv = document.createElement("div");
        document.querySelector(".sketchboard").appendChild(makeDiv);
        // makeDiv.setAttribute("id",`cell${i}-${j}`)
        makeDiv.addEventListener('mouseover',hilight)
    }
    document.querySelector(".sketchboard").appendChild(document.createElement("br"));
}

function hilight(e){
    e.target.style.background='black';
} 

const clear = document.getElementById("clear")