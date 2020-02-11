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

```
(function LoopGame () {

      / *Game Features* /
      
Game_loop.start (LoopGame);

})();

```

## Crear Figuras

The Geometry figures used in HorizonFrontierJs are the square and the circle these can use
in different ways in your project.

## Create Square

>Square(X,Y,W,H,rote,Color)

###### Example
	
>Square(0,0,100,100,0,"green");

## Create Circle

>Circle(X, Y, R, rote, Color);

###### Example

>Circle(0, 0, 0, 0, "red");

## Images

This function allows you to implement images in your project, to enter an object or a background to the stage.

> Images(X,Y,W,H,Url);

###### Example

>Images(0,0,100,100,'../image.png');

## Sprite

Add a sprite sheet to the stage

> Sprite(x,y,X,Y,W,H,'./url.png');

###### Example

>Sprite(0,0,0,0,100,100,'../url.png');

## Text

As the name implies, enter text into the scene.

>Text(text,tamaño,color,X,Y);

###### Example

>Text('HelloWord',20px,"Black",10,10);

## Debut

Debut allows you to add a text for the purpose of being used to see the status of an event.

>Debut(Var,X,Y);

###### Example

>Debut(transition.state,0,0);

###### Recivir Variable por debut

```
var Numerico = 10;
Debut(Numerico,0,0); ó Debut('Numerico'+':'+Numerico,0,0);
```

## Transitions

Transitions are useful to oculate the load from stage or to pass from one scene to another an example It is in the RPG where the scene is changed when starting a fight.

>transition.A(color);

To change the type of transition, change the letter to another of the alphabet,
at the moment it is available until 'F'; "A, B, C, D, E, F".

>transition.state;

With 'transition.state' you can get the state of the transition this returns
false at start and true at end.

###### Example

```
transition.A("blue");
		
Debut("state"+":"+transition.state,10,10);
```		





