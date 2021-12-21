let arr = [['','',''],
        ['','',''],
        ['','','']];
let player = 'O';
let Boxes = document.getElementsByClassName('box');

for(let i = 0;i<Boxes.length;i++){
    Boxes[i].addEventListener('click',function(){
        console.log(this);
        console.log(this.getAttribute('row'));
        let row = this.getAttribute('i');
        let col = this.getAttribute('j');
        if(player === "X"){
            this.innerText = "X";    
            arr[row][col] = player;
            player = "O";
            checkDraw();
            checkWinner(parseInt(row),parseInt(col));
        }else{
            this.innerText = "O";
            arr[row][col] = player;
            player = "X";
            checkDraw();
            checkWinner(parseInt(row),parseInt(col));
        }
    });
}

function checkDraw(){
    let draw = true;
    for(let i = 0;i<3;i++){
        for(let j = 0;j<3;j++){
            if(arr[i][j] === ""){
                draw = false;
            }
        }
    }
    if(draw){
        alert("Draw");
    }
}
function checkWinner(row,col) {  
    //check row
    //check if row is filled
    let rowFilled = true;
    for(let i = 0;i<3;i++){
        if(arr[row][i] === ""){
            rowFilled = false;
        }
    }
    if(rowFilled){
    if(arr[row][0] === arr[row][1] && arr[row][1] === arr[row][2]){
        if(arr[row][0] === "X"){
            alert("X won");
        }else{
            alert("O won");
        }
    }}
    //check col
    //check if col is filled
    let colFilled = true;
    for(let i = 0;i<3;i++){
        if(arr[i][col] === ""){
            colFilled = false;
        }
    }
    if(colFilled){
    if(arr[0][col] === arr[1][col] && arr[1][col] === arr[2][col]){
        if(arr[0][col] === "X"){
            alert("X won");
        }else{
            alert("O won");
        }
    }
    }  
    //check diagonal
    //check if diagonal is filled
    let diagFilled = true;
    for(let i = 0;i<3;i++){
        if(arr[i][i] === ""){
            diagFilled = false;
        }
    }
    if(diagFilled){
    if(arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]){
        if(arr[0][0] === "X"){
            alert("X won");
        }else{
            alert("O won");
        }
    }}
    //check diagonal
    //check if diagonal is filled
    let diagFilled2 = true;
    for(let i = 0;i<3;i++){
        if(arr[i][2-i] === ""){
            diagFilled2 = false;
        }
    }
    if(diagFilled2){
    if(arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]){
        if(arr[0][2] === "X"){
            alert("X won");
        }else{
            alert("O won");
        }
    }}
    
}