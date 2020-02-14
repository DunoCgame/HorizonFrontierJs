# HorizonFrontierJs

Library for the development of Video Games using Javascript technology.

## Installation NPM

>npm i horizonfrontierjs

###### **Implementation**

>const Game = require('horizonfrontierjs');

```
After requesting the file, id = "body" must be assigned to the 'BODY'
tag so that the library automatically generates the canvas inside it.
```

###### Initial Window

>Screen.Init(Width,heigth);

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

>Text('HelloWord','20px Calibri','Black',10,10);

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

>Transition.A(color);

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
## Mouse

The "Mouse" option allows you to obtain the mouse position on the canvas, this
generate a circle and square together to use with the touch buttons
The parameters of this function are:
Cursor Visibiliti lets is a bool color: indicates the color of the object W is 
the width and h is the height, r corresponds to the radius of the circumference.

>Mouse.Position(CursorVisibiliti,color,W,H,R);
```
- Mouse.PosX;
- Mouse.PosY;
- Mouse.W;
- Mouse.H;
```

## Keyboard Events

Allows you to implement keyboard events on the canvas
Add on the Game loop.

>KeyboardEvents();

```
if(Keyboard[/*Tecla a utilizar*/] == true){	
		//Evento
		}
```

## Touch Button

Create a button on the canvas for use in mobile games or for other interactions by positioning the cursor on the true returned button when this happens, this function allows you to create two types of buttons one of circular shape and another square or rectangular.

**Circular Button**

>TactilButton.Circle(X,Y,R,Color);

###### Example

```
if(TactilButton.state==true){ //Action }
```

**Rectangular Button**

> TactilButton.Square(X,Y,W,H,Color);

###### Example

```
if(TactilButton.state==true){ //Action }
```

## Gravity

>Gravity.init(bool,value);

If the bool parameter is set to true, gravity will affect the object.
while the value parameter indicates the force of gravity.
When the bool parameter is set to `` false``, the effect of gravity stops.

## Time

**Delay**

This function allows you to control the activation time of a specific action.

###### Initial

>Time.Delay(Capture,stateconter);

````
Capture: indicates the delay time.
stateconter: It's a bool recive true for activation and false for disconnection.
````

###### Obtaining data from Time.delay

```
Time.init: Get the counter value
Time.state: Returns the boolean.
```

###### Example

```
Time.delay(30,true);
	
	if(Time.state==true){
		/*Action*/	
	}
```

**Interval**

###### Initial

>interval(Capture,end,stateconter);

The counter starts at 0 and counts until you reach the end value and capture the action value.

###### Example

```
Time.Interval(20,40,true);

Capture: It is the action value of the function.
end: Indicates the final value of the counter.
stateconter: It is a bool recive true for activation and false for disconnection.
```

## Sound

This function allows you to add sound effects to the game.

**Initialization**

>Sound.init(url);

It should be added outside the loop to avoid calling the audio file multiple times.

**Initial Reproduction**

>Sound.play();

**Pausar Reproduccion**

>Sound.stop();

###### Example

````
Sound.init("./Sonido.mp3");
````

## Position Detection

**Distancepointos**

Detect the distance between the corresponding objects
to the parameters assigned to the function.

>Distancepoints(PosX-Object1,PosY-Object1,PosX-Object2, PosY-Object2);

###### Example

````
if(Distancepoints(PosX-Object1,PosY-Object1,PosX-Object2, PosY-Object2)<5){

/*Funciones*/
}
````

**Angletwopoints**

Detects the angle between two objects on the canvas.

>Angletwopoints(PosX-Object1, PosY-Object1,PosX-Object2, PosY-Object2);

###### Example

````
if(Angletwopoints(PosX-Object1, PosY-Object1,PosX-Object2, PosY-Object2)==0){

/*Action*/

}
````
## Collision System

**Box Collision**
 
It allows the interaction between two objects created an interaction layer corresponding to a box

>BoxCollision.init(PosX-Object1, PosY-Object1, W-Object1, H-Object1, PosX-Object2, PosY-Object2, W-Object2, H-Object2);

###### Example

````
BoxCollision.init(PosX-Object1, PosY-Object1, W-Object1, H-Object1, PosX-Object2, PosY-Object2, W-Object2, H-Object2);

var state_Collision=false;

if(BoxCollision.state==true){
	
	state_Collision=true;
	
}
else{ state_Collision=false;}

````

###### Example

````
var Collision=BoxCollision.init(PosX-Object1, PosY-Object1, W-Object1, H-Object1, PosX-Object2, PosY-Object2, W-Object2, H-Object2);

if(!Collision){
	// if(!BoxCollision.state){
		/*Action*/
		}

````

**Circle Collision**

It allows to detect collisions through a circular layer that surrounds the object.

>CircleCollision.init(PosX-Object1, PosY-Object1, PosX-Object2, PosY-Object2, limit);


````
Limit:

Determine the minimum distance between the two defined objects
````

###### Example

````
if(CircleCollision.state==true){
	
	state_Collision=true;
	
}
else{ state_Collision=false;}

````

# Nota

The information presented may be subject to modifications or changes.

# License

[MIT](https://github.com/DunoCgame/HorizonFrontierJs/blob/master/LICENSE).