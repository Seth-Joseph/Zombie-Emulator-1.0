var ply;
var canvas,bg;

var playerCount;
var allPlayers;
var database;

var form,player,game;

var p1,p2,p3,p4;
var bg;

var gameState = 0;

function preload(){
    p1 = loadImage('images/player1.png');
    p2 = loadImage('images/player2.png');
    p3 = loadImage('images/player3.png');
    p4 = loadImage('images/player4.png');
    
    bg = loadImage("images/zw.png");

}





function setup(){
canvas =  createCanvas(displayWidth - 20,displayHeight - 30);
database = firebase.database();
game = new Game();
game.getState();
game.start();   
}

function draw(){
 if(playerCount === 4){
     game.update(1);
 }  
 if(gameState === 1){
     clear();
     game.play();
 }
     if(gameState === 2){
         game.end();
     }
    
 
}