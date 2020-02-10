# HorizonFrontierJs

Library for the development of Video Games using Javascript technology

## Installation NPM

>npm i horizonfrontierjs


###### Implementation

>const Game = require('horizonfrontierjs');

###### Initial Window

>Screen.Init(Ancho,Alto);

It is recommended to initialize the window outside the game cycle to avoid multiple canvas creation
to get the full size of the browser window add to the parameters.

## Create Loop Game

>Game_loop.start (LoopGame function);

###### Example:
'
(function LoopGame () {

      / *Game Features* /
      
Game_loop.start (LoopGame);

})();'

## Crear Figuras

The Geometry figures used in HorizonFrontierJs are the square and the circle these can use
in different ways in your project.

###### Create Square

>Square(X,Y,W,H,rote,Color)

###### Ejemplo:
	
>Square(0,0,100,100,0,"green");






