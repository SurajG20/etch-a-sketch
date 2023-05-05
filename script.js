let color = 'black';
let click = true;
function PopulateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numOfBox = size * size;

    for (let i = 0; i < numOfBox; i++) {

        let square = document.createElement('div')
        square.addEventListener('mouseover',squareColor);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square)
    }
}

PopulateBoard(16);
function changeSize(input) {
    if (input >= 2 && input <= 100) {
        document.querySelector('.error').style.display = "none";
        PopulateBoard(input)
    }
    else {
        document.querySelector('.error').style.display = "flex";
    }
}

function squareColor(){
    if (click){
        if(color == 'random'){
            this.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
        }
        else{
            this.style.backgroundColor = color;
        }
    }
    
    
}

function colorChange(choice){
    color = choice;
}

function resetBoard(){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor='white');
}

document.querySelector('body').addEventListener("click", (e)=>{
    if (e.target.tagName != 'BUTTON'){
        click = !click;
        if (click){
            document.querySelector('.mode').textContent = "Mode : Coloring"
        }else{
            document.querySelector('.mode').textContent = "Mode : Not Coloring"
        }
    }
})

submitSizeButton.onclick = function chooseSketchpadSize() {
    var submitSizeInput  = document.querySelector('.submitSizeInput').value;
    PopulateBoard(submitSizeInput);
};