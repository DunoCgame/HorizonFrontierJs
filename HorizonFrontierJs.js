/*Screen*/ /*Screen*/ /*Screen*/



let Screen={
			W:0,
			H:0,
			Canvas:document.createElement("canvas"),
			 
			
			Init:function(){
			
				this.Canvas.id="canvas";
				this.context=this.Canvas.getContext("2d");
				document.body.insertBefore(this.Canvas, document.body.childNodes[0]);
				document.body.style.margin="0px";
				document.body.style.padding="0px";
				var s = getComputedStyle(this.Canvas);
				var w = s.width;
				var h = s.height;
						
				Screen.W = this.Canvas.width = w.split("px")[0];
				Screen.H = this.Canvas.height = h.split("px")[0];
				 
			}
				
				
			
}







/*Screen*/ /*Screen*/ /*Screen*/
/***************************************************/
/*Game_loop*/ /*Game_loop*/ /*Game_loop*/
let Game_loop={
	
		
		
start:function(funcion){
		
		requestAnimationFrame(funcion); 

	ctx=Screen.context;

		Screen.Canvas.width==Screen.Canvas.width;
		Screen.Canvas.height==Screen.Canvas.height;
		
				}

}
/*Game_loop*/ /*Game_loop*/ /*Game_loop*/
/*Game_loop*/ /*Game_loop*/ /*Game_loop*/
/**********************************************/
/**********************************************/
/**********************************************/
/*Figure*/ /*Figure*/ /*Figure*/
/*Square*/
function Square(X,Y,W,H,rote,Color){
	this.X=X;
	this.Y=Y;
	this.W=W;
	this.H=H;
	this.rote=rote;
	this.Color=Color;
			ctx=Screen.context;
			
			ctx.save();
			ctx.rotate(rote * Math.PI / 180);
			ctx.fillStyle = Color;
			
			ctx.fillRect(this.X, this.Y, this.W, this.H);
			ctx.restore();
}
/*Circle*/
function Circle(X, Y, R, rote, Color){
	this.X=X;
	this.Y=Y;
	this.R=R;

	this.rote=rote;
	this.Color=Color;
	ctx=Screen.context;
				ctx.save();
				ctx.rotate(rote * Math.PI / 180);
				ctx.fillStyle=Color;
				ctx.beginPath();
				ctx.arc(this.X, this.Y, this.R,50, 0, (Math.PI/180)*360,true);
				ctx.closePath;
				ctx.fill();
}
/*Figure*/ /*Figure*/ /*Figure*/
/*************************************************/
/*************************************************/
/*************************************************/
/*imagenes*/ /*imagenes*/ /*imagenes*/
/*imagen*/
function Images(X,Y,W,H,Url){
	
	this.X=X;
	this.Y=Y;
	this.W=W;
	this.H=H;
	this.Url=Url;
	
		ctx=Screen.context;
		
		ctx.save();
		var Urlimg = new Image();
		Urlimg.src = this.Url;
		ctx.drawImage(Urlimg, this.X, this.Y, this.W, this.H);
		ctx.restore();
		
		



}

 /*Sprite*/ /*Sprite*/ /*Sprite*/
function Sprite(x,y,X,Y,W,H,Url){
	
	this.Url=Url;
	
/**La IMAGEN LIENSO **/
	this.x=x;
	this.y=y;
	

 /**La IMAGEN TOTAL **/
	this.X=X;
	this.Y=Y;

	this.w=W;
	this.h=H;
	
	this.W=W;
	this.H=H;

ctx=Screen.context;

ctx.save();
var Url = new Image();
Url.src = this.Url;
ctx.drawImage(Url, this.x, this.y, this.w, this.h, this.X, this.Y, this.W, this.H );
ctx.restore();






}
/*imagenes*/
/*****************************************************/
/*****************************************************/

/*texto*/ /*texto*/ /*texto*/
function Text(text,tamano,color,X,Y){
	
this.text=text;
this.tamano=tamano;
this.color=color;
this.X=X;
this.Y=Y;


ctx=Screen.context;

	ctx.save();
	ctx.fillStyle=this.color;
	ctx.font = this.tamano;
	ctx.fillText(this.text,this.X,this.Y);
	ctx.restore();
}
/*texto*/ /*texto*/ /*texto*/
/*****************************************************/
/*Debut*/ /*Debut*/ /*Debut*/
function Debut(Text,X,Y){
	
	this.text=Text;
	this.X=X;
	this.Y=Y;

ctx=Screen.context;

	ctx.save();
	ctx.fillStyle="black";
	ctx.font = "25px Calibri";
	ctx.fillText(this.text,this.X,this.Y);
	ctx.restore();
	
}
/*Debut*/ /*Debut*/ /*Debut*/

/*****************************************************/
//*Transisiones*// //*Transisiones*//////
var Opacidad = 1;
let Transition={
			Decen:1,
			Acen:0,
			state:false,
A:function(color){
			
					this.color=color;
					ctx=Screen.context;
					W=Screen.Canvas.width;
					H=Screen.Canvas.height;
					
				if(this.Acen<H){this.Acen+=10;				}
				
					if(this.Acen==H){this.Acen+=10; 		
					this.state=true;
					}
							ctx.save();
							ctx.fillStyle = this.color;
							ctx.fillRect(0,0, W, this.Acen);
							ctx.restore();
				},
B:function(color){
							
				this.color=color;
				ctx=Screen.context;
				W=Screen.Canvas.width;
				H=Screen.Canvas.height;
				
				if(this.Acen!=-H){this.Acen-=10;


				}
				if(this.Acen==-H){this.Acen+=10; 		
					
					this.state=true;
					}
						ctx.save();
						ctx.fillStyle = this.color;
						ctx.fillRect(0,H, W, this.Acen);
						ctx.restore();
						
						
					},				
C:function(color){
		
	this.color=color;
	
	ctx=Screen.context;
	W=Screen.Canvas.width;
	H=Screen.Canvas.height;
	
	if(this.Acen<W){this.Acen+=10;	}
				
					if(this.Acen==W){this.Acen+=10; 		
					
					this.state=true;
					}
					
			ctx.save();
			ctx.fillStyle = this.color;
			ctx.fillRect(0,0, this.Acen, H);
			ctx.restore();
},

D:function(color){
		
	this.color=color;
	
	ctx=Screen.context;
	W=Screen.Canvas.width;
	H=Screen.Canvas.height;
	
	if(this.Acen!=-W-10){this.Acen-=10;


				}
				if(this.Acen==-W-10){this.Acen+=10; 		
					
					this.state=true;
					}
					
					ctx.save();
			ctx.fillStyle = this.color;
			ctx.fillRect(W,0, this.Acen, H);
			ctx.restore();
},

E:function(color){
		
	this.color=color;
	
	ctx=Screen.context;
	W=Screen.Canvas.width;
	H=Screen.Canvas.height;
	
	if(Math.round(this.Acen)!=2){
	this.Acen=this.Acen+=0.02;
	
	}	if(Math.round(this.Acen)==2){
this.state=true;
	
	}	
			ctx.save();
			ctx.globalAlpha = this.Acen;
			ctx.fillStyle = this.color;
			ctx.fillRect(0,0, W, H);
			ctx.restore();
},
F:function(color){
	
	
	this.color=color;
	
	ctx=Screen.context;
	W=Screen.Canvas.width;
	H=Screen.Canvas.height;
	
	if(this.Decen >0.07 ){
		
		this.Decen -= 0.1;
		
	}if(Math.round(this.Decen) == 0 ){
		this.state=true;
		
	}

ctx.save();
ctx.globalAlpha = this.Decen;
ctx.fillStyle = this.color;
ctx.fillRect(0,0, W, H);
ctx.restore();		
			
			
			},

		
		}//cierre

//*Transisiones*// //*Transisiones*//////

		
/*****************************************************/		
/*****************************************************/		
/*****************************************************/			
		
/*Posicion de mause*/ /*Posicion de mause*/ /*Posicion de mause*/
var Mouse={
	PosX:0,
	PosY:0,
	W:0,
	H:0,
Position:function (CursorVisibiliti,color,W,H,R){
	var mousePos=0;
	
	  
	function getMousePos(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
	  
   
		// ctx=Screen.context;
		// canvas=Screen.Canvas;	
		
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
		
				
				
	canvas.addEventListener('mousemove', function(evt) {
				var mousePos = getMousePos(canvas, evt);
				Mouse.PosX=mousePos.x;
				Mouse.PosY=mousePos.y;
		}, false);

		
		if(CursorVisibiliti==true){
				
				ctx.save();
				ctx.fillStyle=color;
				ctx.fillRect(Mouse.PosX,Mouse.PosY,W,H);
				ctx.restore();
					
				ctx.save();
				ctx.fillStyle=color;
				ctx.beginPath();
				ctx.arc(Mouse.PosX,Mouse.PosY,R,0,Math.PI*2,true);
				ctx.closePath;
				ctx.fill();
		
		}
		
		Mouse.W=W;
		Mouse.H=H;
		
		ctx.save();
		ctx.fillStyle="white";
		ctx.font = "15px Calibri";
		ctx.fillText("X"+":"+Mouse.PosX+"|"+"Y"+":"+Mouse.PosY+"",Mouse.PosX,Mouse.PosY);
		ctx.restore();
			
	}
}//fin de la funcions
/*Posicion de mause*/ /*Posicion de mause*/ /*Posicion de mause*/

/*****************************************************/	
/*****************************************************/	
/*****************************************************/	
	
/*Eventos del teclado*/
/*Deteccion del teclado*/
function KeyboardEvents(){
	
document.getElementById("body").addEventListener( "keydown", function(e){
	Keyboard[e.keyCode] = true; 		 });
	
document.getElementById("body").addEventListener( "keyup", function(e){
	Keyboard[e.keyCode] = false; 	 	});
}
/*Deteccion del teclado*/

/*Eventos del teclado*/
// sistema_colision

//Colisiones por circunferencia
function Distancepoints(PosX1, PosY1,PosX2, PosY2){

	var Distancia_entre_dos_Puntos=Math.floor(Math.sqrt((Math.pow(PosX1-PosX2,2))+(Math.pow(PosY1-PosY2,2))));
	return Distancia_entre_dos_Puntos;

}


//Angulo entre dos puntos
function Angletwopoints(PosX1, PosY1,PosX2, PosY2){
	
	var Pendiente=((PosX1-(PosX2))/((PosY1-(PosY2))));
	var AnguloenRadianes=Math.tan(Pendiente);
	var Angulo=Math.floor(AnguloenRadianes*(180/Math.PI));
	return Angulo;
	
}


// circleCollision
//BoxCollision
var BoxCollision = {
	state:false,
	init:function(PosX1,PosY1,W1,H1,PosX2,PosY2,W2,H2){
	if ( ((PosX1+W1) > PosX2)  &&  (PosX1 < (PosX2+W2)) ) {          
		if ( ((PosY1+H1) > PosY2)  &&  (PosY1 < (PosY2+H2)) ) {
			
			BoxCollision.state=true;
			return true;
		}
	}
	else{
		BoxCollision.state=false;
		return false;
	}
}
}

var CircleCollision={
	state:false,
	init:function(PosX1, PosY1, PosX2, PosY2, limit){

	var Distancia_entre_dos_Puntos=Math.floor(Math.sqrt((Math.pow(PosX1-PosX2,2))+(Math.pow(PosY1-PosY2,2))));
	if(Distancia_entre_dos_Puntos<=limit){
		
		CircleCollision.state=true;
		
	}
	else{
		CircleCollision.state=false;
	}
	
}
}




/*sistema de colisiones*/ /*sistema de colisiones*/ /*sistema de colisiones*/
/**********************/

/**********************/
		
/*botones tactil*/
let TactilButton = {
	D:0,
	state:false,
Circle:function(X,Y,R,Color){
	this.X=X;
	this.Y=Y;
	this.R=R;
	this.Color=Color;
	ctx=Screen.context;
	
		ctx.save();
		ctx.fillStyle=Color;
		ctx.beginPath();
		ctx.arc(this.X, this.Y, this.R, 20, 0, (Math.PI/180)*360,true);
		ctx.closePath;
		ctx.fill();

		TactilButton.D=Math.floor(Math.sqrt((Math.pow(Mouse.PosX-this.X,2))+(Math.pow(Mouse.PosY-this.Y,2))));
		
		if(TactilButton.D<=10  ){
			TactilButton.state=true;
			
		}else{
			TactilButton.state=false;
		}		
},
Square:function(X,Y,W,H,Color){


	this.X=X;
	this.Y=Y;
	this.W=W;
	this.H=H;
	this.Color=Color;
			
			ctx=Screen.context;
			ctx.save();
			ctx.fillStyle = Color;
			ctx.fillRect(this.X, this.Y, this.W, this.H);
			ctx.restore();
if ( ((this.X+this.W) > Mouse.PosX)  &&  (this.X < (Mouse.PosX+Mouse.W)) ) {          
if ( ((this.Y+this.H) > Mouse.PosY)  &&  (this.Y < (Mouse.PosY+Mouse.H)) ) {		
		TactilButton.state=true;
}
}else{
	TactilButton.state=false;
	}
	
}

	}

/*botones tactil*/
/********************************************/
/*Time System*/
let Time={
	init:0,
	i:0,
	state:false,
	Delay:function(Capture,stateconter){
	
	if(stateconter==true ){

		if(Time.init<Capture){
				
				Time.init+=1;
				
		}
		if(Time.init<Capture ){				
					
					Time.state=false;
					
			}else
				if(Time.init>=Capture){

					Time.state=true;
					
				}
				
			
			
	}//cierre boleano

},
//cierre delay 
Interval:function(Capture,end,stateconter){ 	
	
if(stateconter==true){

		Time.i+=1;
	
		if(Time.i>0 && Time.i<Capture ){
			
				Time.state=false;
		 
		}else
			if(Time.i>=Capture){

				Time.state=true;
				
			}
			
			
		if(Time.i==end){ 	Time.i=0; 				}
				
		

	}//cierre boleano


	 	}	

		
}
/*Time System*/

/********************************************/
		/*Gravity*/ /*Gravity*/


let Gravity={
		init:function(state,G){
			
		
			
			if(state==true){
				
				return G;
								
				console.log("NameObj",NameObj);
				
				}
				if(state==false){
					
					return 0;	
				}
		}
}


/*Gravity*/ /*Gravity*/
/************************/
/**Sound**/
	
function Sound(src){
	
	this.Sound = document.createElement("audio");
	this.Sound.src = src;
	this.Sound.setAttribute("preload", "auto");
	this.Sound.style.display = "none";	
	document.body.appendChild(this.Sound);
	
	this.play = function(){
			this.Sound.Play();
	  }
	this.stop = function(){
			this.Sound.Pause();	
	  }
 
		
	
}
/**Sound**/


/*******Esportar Modulos*/


module.exports.Screen=Screen;
module.exports.Game_loop=Game_loop;
module.exports.Square=Square;
module.exports.Circle=Circle;
module.exports.Images=Images;
module.exports.Sprite=Sprite;
module.exports.Text=Text;
module.exports.Debut=Debut;
module.exports.Transition=Transition;
module.exports.Mouse=Mouse;
module.exports.KeyboardEvents=KeyboardEvents;
module.exports.Angletwopoints=Angletwopoints;
module.exports.Distancepoints=Distancepoints;
module.exports.BoxCollision=BoxCollision;
module.exports.TactilButton=TactilButton;
module.exports.Time=Time;
module.exports.Gravity=Gravity;
module.exports.Sound=Sound;




/*******Esportar Modulos*/


