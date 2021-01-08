# HorizonFrontierJs

Library for the development of Video Games using Javascript technology.

![](https://raw.githubusercontent.com/DunoCgame/HorizonFrontierJs/master/Logo_HFjs.png) 

## Installation NPM

>npm i horizonfrontierjs

###### **Implementation**

>const Game = require('horizonfrontierjs');

###### Initial Window

>Screen.Init();

It is recommended to initialize the window outside the game cycle to avoid multiple canvas creation
to get the full size of the browser window add to the parameters.

Calling Width of Screen and Height Screen

>Screen.Canvas.width;

>Screen.Canvas.height;

###### Show Mouse 

>Screen.MouseShow(data);
```
show and hide mouse
Data is a Boolean value True or False that indicates whether or not the mouse will be displayed on the screen
 ```

###### Clear Screen

>Screen.Clear();

It is added in the game cycle to clean window

>To use the SAVE, Rotate, Translate, Restore, Scale functions canvas api web

>Screen.Save();
```
Saves the state of the screen
```

>Screen.Restore();
```
Returns previously saved path state and attributes
```

Screen.Scale(W,H);
```
W is the width of the scale
H the top of the scale

example

Screen.scale(2, 2);

1=100%, 0.5=50%, 2=200%

```
Screen.Rote(Angle);
```
The angle is the value that the figure will rotate in degrees

example

Screen.Rote(20);
``` 
Screen.Translate(X,Y);
``` 
X is the position that the object will translate
Y it is the position that will translate the object

example

Screen.Translate(10,10);
``` 

###### Example

>Download sample screen from list

[Examples](https://github.com/DunoCgame/Example-HFJs).


## Create Loop Game

>Game_loop.start (LoopGame function);

## Show Fps and Aps

>Game_loop.start (LoopGame function, boolean);

```
The boolean parameter allows to show lso fps and aps of the canvas when it is in True in false or null the data is not visible.
```

###### Example:

```
(function LoopGame(){
			/*add clear secreen*/
				/ *Game Features* /  		
Game_loop.start(LoopGame);
})();

(function LoopGame(){
		/*add clear secreen*/
			/ *Game Features* /    
Game_loop.start(LoopGame,true);
})();
```

## Crear Figuras

The Geometry figures used in HorizonFrontierJs are the square and the circle these can use
in different ways in your project.

## Create Square

>Square(X,Y,W,H,Rotate,Point,Colour)

```
X is the position on the x axis
Y is the position on the y axis
W is the width of the square
H is the height
Rotate allows the figure to rotate
Point is the center of the axis of the figure by default is "Upper-Left" "String"
Colour indicates the Colour that "String" will have
```

###### Example 1
	
```
let  Square = new Square(0,0,100,100,0,"Upper-Left" "green");
```

###### Example 2
```
let  MySquare = new Square();
MySquare.X=100;
MySquare.Y=100;	
MySquare.W=100;
MySquare.H=100;
MySquare.Rotate=0
MySquare.Point="Upper-Left";
MySquare.Colour="blue";
MySquare.Draw(); 

```
>to paint the figure on the screen use 	```Square.Draw(); ```

## Create Circle

>Circle(X, Y, Radius, Colour)

```
X is for position on the X axis
Y is the position on the Y axis
Radius is the radius of the circumference
Color indicates the color that "String" will have
```

###### Example1
```
Circle(0, 0, 0, 0, "red");
```
###### Example2
```
let MyCircle = new Circle();
MyCircle.X=100;	
MyCircle.Y=100;
MyCircle.Radius=50
MyCircle.Rotate=0
MyCircle.Colour="blue";
MyCircle.Draw();
```
>to paint the figure on the screen use ```Circle.Draw();```

## Images

This function allows you to implement images in your project, to enter an object or a background to the stage.

> Images(X,Y,W,H,Url,Rotate,Point)

```
X is the position of the X axis of the image
And the position in and of the image
W the width of the image
H is the height of the image
Url is the path of the image to use
Rotate allows the figure to rotate
Point is the center of the axis of the figure by default is "Upper-Left" "String"
```

###### Example 1
```
Images(0,0,100,100,'../image.png');
```
###### Example 1
```
let MyIMG = new Images();
MyIMG.X = 200;
MyIMG.Y = 200;
MyIMG.W = 100;
MyIMG.H = 100;
MyIMG.Url = img;
MyIMG.Rote = 0;
MyIMG.Point = "Meddle-Center";
MyIMG.Draw();
```

>to paint the figure on the screen use ```IMG.Draw();```

## Sprite

Add a sprite sheet to the stage

> Sprite(x,y,X,Y,W,H,Url,Rotate,Point);

```
The small x is the x position of the sprite sheet
The small y is the y position of the sprite sheet
Capital X in position X of the image on the screen
And capital is the position y of the image on the screen
W the width of the image
H is the height of the image
Url is the path of the image to use
Rotate allows the figure to rotate
Point is the center of the axis of the figure by default is "Upper-Left" "String"
```
###### Example1
```
Sprite(0,0,0,0,100,100,'../url.png);

```
###### Example2
```
let MySprite = new Sprite(0,0,0,0,100,100,'../url.png');
MySprite.x=0;
MySprite.y=0;
MySprite.X=100;
MySprite.Y=100;
MySprite.W=100;
MySprite.H=100;
MySprite.Rotate=0
MySprite.Point="Meddle-Center";
MySprite.Draw();
```
>to paint the figure on the screen use ```MySprite.Draw();```

## Text

As the name implies, enter text into the scene.

>Text(Text,Size,Font,Colour,X,Y);
```
Text is the text to use is a "string"
Size It is the size of the text
Font is the type of text to use
Color indicates the color that "String" will have
X is for position on the X axis
Y is the position on the Y axis
```
###### Example1
```
>Text('HelloWord','20px','Calibri','Black',10,10);
```
###### Example2
```
> let MyText = new Text();
MyText.Text = "HorizonFrontierJs";
MyText.Tamano = '20px';
MyText.Font = "Calibri";
MyText.Color = 'white';
MyText.X = Game.Screen.W/2-100;
MyText.Y = Game.Screen.H/2;
MyText.Draw();
```

>to paint the figure on the screen use ```MyText.Draw();```

## Debug

Debug allows you to add a text for the purpose of being used to see the status of an event.

>Debug(Var,X,Y);
```
Var The value to show
X is for position on the X axis
Y is the position on the Y axis
```

###### Example
```
Debug(transition.state,0,0);
```
###### Receive Variable by debug
```
var Num = 10;
Debug(Num,0,0); ó Debug('Num'+':'+Num,0,0);
```

## Transitions

Transitions are useful to oculate the load from stage or to pass from one scene to another an example It is in the RPG where the scene is changed when starting a fight.

>Transition.A(color);

To change the type of transition, change the letter to another of the alphabet,
at the moment it is available until 'F'; "A, B, C, D, E, F".

>Transition.State;

With 'Transition.State' you can get the state of the transition this returns
false at start and true at end.

>Transition.Reset();

with 'Transition.Reset'you can reset the values ​​of a transition.

###### Example

```
Transition.A("blue");

Debug("state"+":"+Transition.state,10,10);

```
## Mouse

The "Mouse" option allows you to obtain the mouse position on the canvas, this
generate a circle and square together to use with the touch buttons
The parameters of this function are:
Cursor Visibiliti lets is a bool color: indicates the color of the object W is 
the width and h is the height, r corresponds to the radius of the circumference.

>Mouse.Position(Visibility,Colour,W,H,R)
```
Visibility 
It is a boolean value if it is true it shows the outline of the cursor if it is false it will not show anything
Colour It is the color of the contour
W Outline width
H Contour height
R Contour radius
```
>Get value from mouse
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

>ButtonTouch(X,Y,W,H,R,Colour,url)

````
-X: sets the position on the X axis.
-Y: sets the position on the Y axis.
-W: Sets the width of the object.
-H: Sets the height of the object.
-R: Set the object radius.
-Colour: sets the color of the object.
-url: is the string with the url of the image you want to use. If it stays null use color to keep it in place.
````

To obtain the value returned by the touch object, use the function ``Action()``, this real return if the event is executed or, on the contrary, it will return false.

###### Example

````
ButtonTouch(100,100,100,100,50,"green");

To obtain the state of the button the function `` .Action () '' is used, which will return true when the event is executed, otherwise it will return false.

var Button = new ButtonTouch(100,100,100,100,40,"green","img.png");
 if(Button.Action()==true){
	   console.log("Button");  
	  
  }
````
## SurfaceTouch

Only on devices with a touch screen
SurfaceTouch allows to implement touch actions for mobile devices on the Screen.

#####Calling

>Game.SurfaceTouch.Init();

This function returns the X and Y values ​​where the touch was made

````
SurfaceTouch.X  
SurfaceTouch.Y
````

## Movil Touch Button

>MovilTouchButton(X,Y,W,H,R,Color,url)

Only on devices with a touch screen

````
-X: sets the position on the X axis.
-Y: sets the position on the Y axis.
-W: Sets the width of the object.
-H: Sets the height of the object.
-R: Set the object radius.
-Color: sets the color of the object.
-url: is the string with the url of the image you want to use. If it stays null use color to keep it in place.
````

To obtain the value returned by the touch object, use the function ``Action()``, this real return if the event is executed or, on the contrary, it will return false.

###### Example

````
MovilTouchButton(100,100,100,100,50,"green");
````

````
To obtain the state of the button the function `` .Action () '' is used, which will return true when the event is executed, otherwise it will return false.

var Button = new MovilTouchButton(100,100,100,100,40,"green","img.png");
 if(Button.Action()==true){
	   console.log("Button"); 
	  
  }
````

## Gravity

>Gravity.Init(bool,value);

If the bool parameter is set to true, gravity will affect the object.
while the value parameter indicates the force of gravity.
When the bool parameter is set to `` false``, the effect of gravity stops.

## Time

**Delay**

This function allows you to control the activation time of a specific action.

###### Initial

>Time.Delay(Capture,StateConter);

````
Capture: indicates the delay time.
stateconter: It's a bool recive true for activation and false for disconnection.
````

###### Obtaining data from Time.delay

```
Time.Init: Get the counter value
Time.State: Returns the boolean.
```

###### Example

```
Time.Delay(30,true);	
	if(Time.State==true){
		/*Action*/	
	}
```

**Interval**

###### Initial

>Interval(Capture,End,StateConter);

The counter starts at 0 and counts until you reach the end value and capture the action value.

###### Example

```
Time.Interval(20,40,true);
	if(Time.State==true){
		/*Action*/	
	}

Capture: It is the action value of the function.
End: Indicates the final value of the counter.
Stateconter: It is a bool recive true for activation and false for disconnection.
```

## Sound

This function allows you to add sound effects to the game.

**Initialization**

>let Sound = new Sound(Url,auto_play,loop,volume);
```
Url The address of the audio file
auto_play Indicates whether it will play the sound automatically or not it is a boolean
loop It is a boolean value and indicates if it will repeat the sound in cycle
volume determines the sound power min = 0 max = 1
```
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

>BoxCollision(PosX-Object1, PosY-Object1, W-Object1, H-Object1, PosX-Object2, PosY-Object2, W-Object2, H-Object2);

###### Example-1

````
BoxCollision(PosX-Object1, PosY-Object1, W-Object1, H-Object1, PosX-Object2, PosY-Object2, W-Object2, H-Object2);

var state_Collision=false;

if(BoxCollision.state==true){
	
	state_Collision=true;
	
}
else{ state_Collision=false;}

````
###### Example-2

````
var Collision  = new BoxCollision(PosX-Object1, PosY-Object1, W-Object1, H-Object1, PosX-Object2, PosY-Object2, W-Object2, H-Object2);

if(!Collision){			 			}
		 else{	/*Action*/ }

````

**Circle Collision**

It allows to detect collisions through a circular layer that surrounds the object.

>CircleCollision(PosX-Object1, PosY-Object1, PosX-Object2, PosY-Object2, limit);

````
Limit:

Determine the minimum distance between the two defined objects
````

###### Example

````
var Collision  = new CircleCollision.init(PosX-Object1, PosY-Object1, PosX-Object2, PosY-Object2, limit);
if(!CircleCollision){ 	 	 }
	else{
		/*Action*/
	}
````

## Camera

To implement a 'camera' in your game there are two Fixed or dynamic options.

>Camera Fixed

````
Camera.Fixed(S,A);
S is the scale of the camera.
A is the angle.
````
>Camera dynamic

````
Camera.Dynamic(S,A,X,Y,W,H,mW,mH );

S is the scale of the camera.
A is the angle.
X, Y, W, H, work only in the 'dynamic' camera and are the width and height as well as their position in X and Y of the character to follow.
mH and mW are the width and height of the map.

````

# Note

The information presented may be subject to modifications or changes.

# Example List

Examples of HFJs, the examples were tested in the last version of electronJs.

[Examples](https://github.com/DunoCgame/Example-HFJs).

# Game

## Asteroid Detroyer

[Game in itch.io](https://dunocgame.itch.io/asteroid-destroyer).

# License

[MIT](https://github.com/DunoCgame/HorizonFrontierJs/blob/master/LICENSE).

# Donate

I do this work during my free time. If you want to support this project. 
I would appreciate your [donation](https://www.patreon.com/DunoC). these will be used for the maintenance and improvement of the equipment


