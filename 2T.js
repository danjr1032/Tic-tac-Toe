"const fs = require ('fs');
const readline = require('readline'); 
const reader = readline.createInterface({
input: process.stdin,
output: process.stdout
});


let stage1 = "input.txt";
let save1 = fs.createWriteStream(stage1, {flag: 'a'});
// save1.write('this is a game.');


let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let player = X;

let winningPattern = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6]
];

function displayBoard() {
    console.log(board[0][0] + '|' + board[0][1]  + '|' + board[0][2]);
    console.log('-------');
    console.log(board[1][0] + '|' + board[1][1] + '|' + board[1][2]);
    console.log('-------');
    console.log(board[2][0] + '|' + board[2][1] + '|' + board[2][2]);
    }    
displayBoard();

const winCheck = function(){
    for (let i = 0; i <3; i++) {
        if (board[0][i]===player && board [1][i] === player && board [2][i] === player) {
            return true;
        }        
    }
    for (let i = 0; i <3; i++) {
        if (board[i][0]===player && board [i][1] === player && board [i][2] === player) {
            return true;
        }        
    }
    if (board[0][0]===player && board [1][1] === player && board [2][2] === player) {
        return true;   
    }        
    if (board[0][2]===player && board [1][1] === player && board [2][0] === player) {
        return true;   
    }   
    return false;    
}      

function play(){



    
}
let input1, input2, input3;
  rl.question('Enter number:', (input) => {
  input1 = Number(input);
  rl.question('Enter number:', (input) => {
      input2 = Number(input);
    rl.question('Enter number:', (input) => {
        input3 = Number(input);
    
        reader.close();
    });
  });
});







