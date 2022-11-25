let gridSize = 16;

for(i=0;i<gridSize;i++){
    for(j=0;j<gridSize;j++){
        const makeDiv = document.createElement("div");
        document.querySelector(".sketchboard").appendChild(makeDiv);
    }
    document.querySelector(".sketchboard").appendChild(document.createElement("br"));
}