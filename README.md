# HorizonFrontierJs

Library for the development of Video Games using Javascript technology.

![](https://raw.githubusercontent.com/DunoCgame/HorizonFrontierJs/master/Logo_HFjs.png) 

## Installation NPM

>npm i horizonfrontierjs

###### **Implementation**

>const Game = require('horizonfrontierjs');

```
After requesting the file, id = "body" must be assigned to the 'BODY'
tag so that the library automatically generates the canvas inside it.
```

###### Initial Window

>Screen.Init();

It is recommended to initialize the window outside the game cycle to avoid multiple canvas creation
to get the full size of the browser window add to the parameters.


```
Modify the way the window starts, it is no longer necessary to pass an argument as it was done in previous versions, now it automatically 
adapts to the size of the browser.

Screen.Init(width,height); => Screen.Init();
```
```
Calling Width of Screen and Height Screen

Screen.Canvas.width;

Screen.Canvas.height;

```

## Create Loop Game

>Game_loop.start (LoopGame function);

###### Example:

```
(function LoopGame(){
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

>Transition.state;

With 'transition.state' you can get the state of the transition this returns
false at start and true at end.

>Transition.resert();

with 'transition.resert'you can reset the values ​​of a transition.

###### Example

```
Transition.A("blue");

Debut("state"+":"+Transition.state,10,10);

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

The function create an object that interacts with the mouse by clicking on it.

>ButtonTouch(X,Y,W,H,R,Color,url)

X: sets the position on the X axis.
Y: sets the position on the Y axis.
W: Sets the width of the object.
H: Sets the height of the object.
R: Set the object radius.
Color: sets the color of the object.
url: is the string with the url of the image you want to use. If it stays null use color to keep it in place.

To obtain the value returned by the touch object, use the function ``Action()``, this real return if the event is executed or, on the contrary, it will return false.

###### Example

````
ButtonTouch(100,100,100,100,50,"green");
````````
To obtain the state of the button the function `` .Action () '' is used, which will return true when the event is executed, otherwise it will return false.

var Button = new ButtonTouch(100,100,100,100,40,"green","img.png");
 if(Button.Action()==true){
	   alert("Button"); 
	  
  }
````


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

>Interval(Capture,end,stateconter);

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

>var Sound = new Sound('url');

It should be added outside the loop to avoid calling the audio file multiple times.

**Initial Reproduction**

>Sound.play();

**Pausar Reproduccion**

>Sound.stop();

###### Example

````
var Init=true;

if(Init==true){
	Sound.play();
}
else{
	Sound.stop();
}
````

## Position Detection

**Distancepointos**

Detect the distance between the corresponding objects
to the parameters assigned to the function.

>Distancepoints(PosX-Object1, PosY-Object1, PosX-Object2, PosY-Object2);

###### Example

````
if(Distancepoints(PosX-Object1,PosY-Object1,PosX-Object2, PosY-Object2)<5){

/*Funciones*/
}

5 is the limit
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

###### Example-1

````
BoxCollision.init(PosX-Object1, PosY-Object1, W-Object1, H-Object1, PosX-Object2, PosY-Object2, W-Object2, H-Object2);

var state_Collision=false;

if(BoxCollision.state==true){
	
	state_Collision=true;
	
}
else{ state_Collision=false;}

````
###### Example-2

````
var Collision=BoxCollision.init(PosX-Object1, PosY-Object1, W-Object1, H-Object1, PosX-Object2, PosY-Object2, W-Object2, H-Object2);

if(!Collision){			 			}
		 else{	/*Action*/ }

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
var Collision = CircleCollision.init(PosX-Object1, PosY-Object1, PosX-Object2, PosY-Object2, limit);
if(!CircleCollision){ 	 	 }
	else{
		/*Action*/
	}
````

## Camera

To implement a 'camera' in your game there are two static or dynamic options.

>Camera static

````
Camera.fixed(S,A);
````
>Camera dynamic

````
Camera.Dynamic(S,A,X,Y,W,H,mW,mH );
````

S is the scale of the camera.
A is the angle.
X, Y, W, H, work only in the 'dynamic' camera and are the width and height as well as their position in X and Y of the character to follow.
mH and mW are the width and height of the map.

# Example

Examples of HFJs, the examples were tested in the last version of electronJs.

[Examples](https://github.com/DunoCgame/Example-HFJs).

# Note

The information presented may be subject to modifications or changes.

# License

[MIT](https://github.com/DunoCgame/HorizonFrontierJs/blob/master/LICENSE).
