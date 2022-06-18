/*Screen*/ /*Screen*/ /*Screen*/

let Screen = {
			W:0,
			H:0,	
			Canvas:document.createElement("canvas"),
			 		
		Init:function(){
			
				this.Canvas.id = "canvas";
				this.context = this.Canvas.getContext("2d");
				document.body.insertBefore(this.Canvas, document.body.childNodes[0]);
				document.body.style.margin="0px";
				document.body.style.padding="0px";
				document.body.id="body";
				var s = getComputedStyle(this.Canvas);
				var w = s.width;
				var h = s.height;
			
				/*obciones style*/
					this.Canvas.style.display="block";
					this.Canvas.style.position="absolute";
					this.Canvas.style.width="100%";
					this.Canvas.style.height="100%";
					this.Canvas.style.top="0px";
					this.Canvas.style.left="0px";
					this.Canvas.style.right="0px";
					
					var s = getComputedStyle(this.Canvas);
					var w = s.width;
					var h = s.height;
					
					Screen.W = this.Canvas.width = w.split("px")[0];
					Screen.H = this.Canvas.height = h.split("px")[0];
				/*obciones style*/
					},
		MouseShow:function(data){
						
						if(data==false){
							this.Canvas.style.cursor = "none";
						}
						else
						   if(data==true ){
								this.Canvas.style.cursor = "block";
						}
						
					},
		Rote:function(Angle){
						
					this.context.rotate(Angle*Math.PI/180);	
						
					},		
		Scale:function(W,H){
						
					this.context.scale(W,H);	
						
					},	
		Translate:function(X,Y){
						
					this.context.translate(X,Y);
						
					},
		Save:function(){  
				
					this.context.save();
				},				
		Restore:function(){ 
						
					this.context.restore();
				},
		Clear:function(){
					this.context.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
					}
					
					
					
			
}


/*Screen*/ /*Screen*/ /*Screen*/
/***************************************************/
/*Game_loop*/ /*Game_loop*/ /*Game_loop*/
let Game_loop={
	FPS:0,
	APS:0,
	LastTime:0,
	DeltaTime:0,
	TimerDeltaTime:0,
	Stop:false,
	loop:null,
	
Start:function(funcion,wiev,time){
		
		ctx = Screen.context;
		
		window.addEventListener("resize", function(event) {
		
		// console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
				Screen.Canvas.width == Screen.Canvas.width;
				Screen.Canvas.height == Screen.Canvas.height;		

		})

		Game_loop.FPS = Math.round(Number((1000/(time - Game_loop.LastTime)).toFixed(2)));	
		Game_loop.APS = Math.round(Number((1000/(time - Game_loop.LastTime)).toFixed(2)));	
		
		Game_loop.LastTime = time;
		
		 Game_loop.TimerDeltaTime = (1/Game_loop.FPS);
		
		
		if(!isNaN(Game_loop.TimerDeltaTime)){
			
			Game_loop.DeltaTime = Game_loop.TimerDeltaTime*Game_loop.FPS;
			
		}
	
		if(wiev == true){	
			ctx.save();
			ctx.fillStyle="white";
			ctx.font = "25px Calibri";
			ctx.fillText(" FPS: " + Game_loop.FPS +" | "+" APS: " + Game_loop.APS+" | "+"T∆ "+Game_loop.DeltaTime,10,30);
			ctx.restore();
		}
		
		Game_loop.loop = requestAnimationFrame(funcion);
		
	}


}
/*Game_loop*/ /*Game_loop*/ /*Game_loop*/
/**********************************************/

/*Figure*/ /*Figure*/ /*Figure*/
/*Square*/
function Square(X,Y,W,H,Rotate,Point,Colour){
		
			this.X = X || 0;
			this.Y = Y || 0;
			this.W = W || 100;
			this.H = H || 100;
			this.Rotate = Rotate || 0;
			this.Colour = Colour || "grey";
			this.Point = Point || "Upper-Left";
			this.Draw = function(){		
				
					ctx=Screen.context;	
					ctx.save();
					ctx.translate(this.X, this.Y);					
					ctx.rotate(this.Rotate*Math.PI/180);			
					ctx.fillStyle = this.Colour;
					
					switch(this.Point){
						
					/**Superior-Upper**/
						case "Upper-Left":
							ctx.fillRect(0, 0, this.W, this.H);
						break;
						case "Upper-Center":
							ctx.fillRect(0, -this.W/2, this.W, this.H);
						break;
						case "Upper-Right":
							ctx.fillRect(-this.W, 0, this.W, this.H);
						break;
						
					/**Medio-Meddle**/
						case "Meddle-Left":
							ctx.fillRect(0, -this.H/2, this.W, this.H);
						break;
						case "Meddle-Center":
							ctx.fillRect(-this.W/2, -this.H/2,  this.W, this.H);
						break;
						case "Meddle-Right":
							ctx.fillRect(-this.W, -this.H/2, this.W, this.H);
						break;
						
					/**Inferior-Lower**/	
						case "Lower-Left":
							ctx.fillRect(0, -this.W, this.W, this.H);
						break;
						case "Lower-Center":
							ctx.fillRect(-this.W/2, -this.H, this.W, this.H);
						break;
						case "Lower-Right":
							ctx.fillRect(-this.W, -this.H, this.W, this.H);
						break;
						
						default:
							
						}
						
					ctx.restore();
			}
}
/*Circle*/
function Circle(X, Y, Radius, Colour){
	
	this.X = X || 0;
	this.Y = Y || 0;
	this.Radius = Radius || 10;
	this.Colour = Colour || "grey";
	
	this.Draw = function(){
	
						ctx = Screen.context;	
						ctx.save();	
						
						ctx.fillStyle = this.Colour;
						ctx.beginPath();
						
						ctx.translate(this.X, this.Y);
						ctx.arc(0, 0, this.Radius, 50, 0, (Math.PI/180)*360,true);
						
						ctx.closePath;
						ctx.fill();
						ctx.restore();
				
					}
}
/*Figure*/ /*Figure*/ /*Figure*/
/*************************************************/
/*************************************************/
/*imagenes*/ /*imagenes*/ /*imagenes*/
/*imagen*/
function Images(X,Y,W,H,Url,Rotate,Point){
	
	this.X = X || 0;
	this.Y = Y || 0;
	this.W = W || 100;
	this.H = H || 100;
	this.Rotate = Rotate || 0;
	this.Point = Point || "Upper-Left";
	this.Url = Url || "node_modules/horizonfrontierjs/Horizon.png" || "https://raw.githubusercontent.com/DunoCgame/HorizonFrontierJs/master/Horizon.png";


	this.Draw = function(){
		
		ctx = Screen.context;
		
		ctx.save();
		
		var Urlimg = new Image();
		Urlimg.src = this.Url;
		
		ctx.translate(this.X, this.Y);					
		ctx.rotate(this.Rotate*Math.PI/180);

		switch(this.Point){
						
					/**Superior-Upper**/
						case "Upper-Left":
							
							ctx.drawImage(Urlimg, 0, 0, this.W, this.H);
						break;
						case "Upper-Center":
							ctx.drawImage(Urlimg, 0, -this.W/2, this.W, this.H);							
						break;
						case "Upper-Right":
							ctx.drawImage(Urlimg, -this.W, 0, this.W, this.H);
						break;
						
					/**Medio-Meddle**/
						case "Meddle-Left":
							
							ctx.drawImage(Urlimg, 0, -this.H/2, this.W, this.H);
						break;
						case "Meddle-Center":
							ctx.drawImage(Urlimg, -this.W/2, -this.H/2, this.W, this.H);
						break;
						case "Meddle-Right":							
							ctx.drawImage(Urlimg, -this.W, -this.H/2, this.W, this.H);
						break;
						
					/**Inferior-Lower**/	
						case "Lower-Left":						
							ctx.drawImage(Urlimg, 0, -this.W, this.W, this.H);
						break;
						case "Lower-Center":						
							ctx.drawImage(Urlimg,-this.W/2, -this.H, this.W, this.H);
						break;
						case "Lower-Right":
							ctx.drawImage(Urlimg,-this.W, -this.H, this.W, this.H);
						break;
						
						default:
							
						}
		ctx.restore();
		
	}

}

 /*Sprite*/ /*Sprite*/ /*Sprite*/
function Sprite(x,y,X,Y,W,H,Url,Rotate,Point){
	
	this.Url = Url || "node_modules/horizonfrontierjs/Horizon.png" || "https://raw.githubusercontent.com/DunoCgame/HorizonFrontierJs/master/Horizon.png";
	
	/**La IMAGEN LIENSO **/
	this.x = x;
	this.y = y;
	
	/**La IMAGEN TOTAL **/
	this.X = X;
	this.Y = Y;

	this.w = W;
	this.h = H;
	
	this.W = W;
	this.H = H;
	
	this.Rotate = Rotate || 0;
	this.Point = Point || "Upper-Left";
	
        this.Draw = function(){
		
	ctx=Screen.context;
	ctx.save();
	
	var Url = new Image();
	Url.src = this.Url;
	ctx.translate(this.X, this.Y);					
	ctx.rotate(this.Rotate*Math.PI/180);
	
		switch(this.Point){
						
		/**Superior-Upper**/
			case "Upper-Left":
				ctx.drawImage(Url, this.x, this.y, this.w, this.h, 0, 0, this.W, this.H );
			break;
			case "Upper-Center":
	
				ctx.drawImage(Url, this.x, this.y, this.w, this.h, 0, -this.W/2, this.W, this.H );				
			break;
			case "Upper-Right":
			
				ctx.drawImage(Url, this.x, this.y, this.w, this.h, 0, this.W, this.W, this.H );
				
			break;
			
		/**Medio-Meddle**/
			case "Meddle-Left":
				
			
			ctx.drawImage(Url, this.x, this.y, this.w, this.h, 0, -this.H/2, this.W, this.H );
				
			break;
			case "Meddle-Center":
				
			ctx.drawImage(Url, this.x, this.y, this.w, this.h, -this.W/2, -this.H/2, this.W, this.H );
			
			break;
			case "Meddle-Right":							
		
			ctx.drawImage(Url, this.x, this.y, this.w, this.h, -this.W, -this.H/2, this.W, this.H );
		
			break;
			
		/**Inferior-Lower**/	
			case "Lower-Left":						
		
				ctx.drawImage(Url, this.x, this.y, this.w, this.h, 0, -this.W, this.W, this.H );
			break;
			case "Lower-Center":						
			
				ctx.drawImage(Url, this.x, this.y, this.w, this.h, -this.W/2, -this.H, this.W, this.H );
			break;
			case "Lower-Right":
			
				ctx.drawImage(Url, this.x, this.y, this.w, this.h, -this.W, -this.H, this.W, this.H );
				
			break;
			
			default:
				
			}	
		
	ctx.restore();	
	
	}

}
/*imagenes*/
/*****************************************************/
/*****************************************************/
/*texto*/ /*texto*/ /*texto*/
function Text(Text,Size,Font,Colour,X,Y){
	
		this.Text = Text || "HorizonFrontierJs" ;
		this.Size = Size || '16px';
		this.Font = Font || 'Calibri';
		this.Colour = Colour || "white";
		this.X = X || 10;
		this.Y = Y || 10;
		this.Draw = function(){		
					ctx=Screen.context;
					ctx.save();
					ctx.fillStyle=this.Colour;
					ctx.font = this.Size+" "+this.Font;
					ctx.fillText(this.Text,this.X,this.Y);
					ctx.restore();
				
		}
}
/*texto*/ /*texto*/ /*texto*/
/*****************************************************/
/*****************************************************/
/*Debug*/ /*Debug*/ /*Debug*/
function Debug(Text,X,Y){
	
	this.Text = Text;
	this.X = X;
	this.Y = Y;
	this.Draw = function(){
		ctx = Screen.context;

		ctx.save();
		ctx.fillStyle="black";
		ctx.font = "25px Calibri";
		ctx.fillText(this.Text,this.X,this.Y);
		ctx.restore();
	}
}
/*Debug*/ /*Debug*/ /*Debug*/
/*****************************************************/
/*****************************************************/
//*Transisiones*// //*Transisiones*//////
var Opacidad = 1;
var T=0;
let Transition = {
			Decen:1,
			Acen:0,
			State:false,
A:function(Colour){
	
				this.Colour = Colour;
				ctx = Screen.context;
				W = Screen.Canvas.width;
				H = Screen.Canvas.height;
			
	
				if(this.Acen<H && this.State==false){ this.Acen+=10;}
				
				if(this.Acen>=H){
							this.State=true;		
				}
				
				ctx.save();
				ctx.fillStyle = this.Colour;
				ctx.fillRect(0,0, W, this.Acen);
				ctx.restore();
									
				},
B:function(Colour){
				this.Colour=Colour;
				ctx=Screen.context;
				W=Screen.Canvas.width;
				H=Screen.Canvas.height;

		             if(0+H+this.Acen>0 && this.State==false){
					this.Acen-=10;
				 }
				 else{
					 this.State=true;					 
				 }

				ctx.save();
				ctx.fillStyle = this.Colour;
				ctx.fillRect(0,0+H+this.Acen, W, H);
				ctx.restore();
						
						
						
					},				
C:function(Colour){	
		
		this.Colour=Colour;
		
		ctx = Screen.context;
		W = Screen.Canvas.width;
		H = Screen.Canvas.height;
		
		if(this.Acen<W && this.State==false){
			
			this.Acen+=10;	
		}
			if(this.Acen>W  && this.State==false){						
							this.State=true;
							
						}
						
				ctx.save();
				ctx.fillStyle = this.Colour;
				ctx.fillRect(0,0, this.Acen, H);
				ctx.restore();
},
D:function(Colour){
		
	this.Colour = Colour;
	
	ctx = Screen.context;
	W = Screen.Canvas.width;
	H = Screen.Canvas.height;
	
	if(W+this.Acen>=0 && this.State==false){		
			this.Acen-=10;
				}
				else{
					this.State=true;
					}				
			ctx.save();
			ctx.fillStyle = this.Colour;
			ctx.fillRect(W+this.Acen,0, W+20, H);
			ctx.restore();
},
E:function(Colour){
		
		this.Colour = Colour;
		
		ctx = Screen.context;
		W = Screen.Canvas.width;
		H = Screen.Canvas.height;
		
		if(Math.round(this.Acen)!=2){
			this.Acen = this.Acen+=0.02;		
		}
		if(Math.round(this.Acen)==2){
				this.State = true;	
		}	
				ctx.save();
				ctx.globalAlpha = this.Acen;
				ctx.fillStyle = this.Colour;
				ctx.fillRect(0,0, W, H);
				ctx.restore();
},
F:function(Colour){
		
	this.Colour=Colour;
	
	ctx=Screen.context;
	W=Screen.Canvas.width;
	H=Screen.Canvas.height;
	
	if(this.Decen >0.07 ){
		
		this.Decen -= 0.1;
		
	}if(Math.round(this.Decen) == 0 ){
		this.State=true;
		
	}

	ctx.save();
	ctx.globalAlpha = this.Decen;
	ctx.fillStyle = this.Colour;
	ctx.fillRect(0,0, W, H);
	ctx.restore();		
			
			
},
Reset:function(){ 
	if(this.State==true){
				this.State=false;		
				this.Decen=1;
				this.Acen=0;
				
	} 
}
		
		}//cierre
//*Transisiones*// //*Transisiones*//////
/*****************************************************/		
/*****************************************************/				
/*Posicion de mause*/ /*Posicion de mause*/ /*Posicion de mause*/
var Mouse = {
	PosX:0,
	PosY:0,
	W:0,
	H:0,
	Position:function(Visibility,Colour,W,H,R){
		
		var mousePos=0;
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');


		canvas.onmousemove = function (e) {
		   Mouse.PosX = e.pageX - this.offsetLeft;
		   Mouse.PosY = e.pageY - this.offsetTop;

			};
	
		if(Visibility==true){
				
	                ctx.save();
		        ctx.fillStyle=Colour;
		        ctx.fillRect(Mouse.PosX,Mouse.PosY,W,H);
		        ctx.restore();
			
		        ctx.save();
		        ctx.fillStyle=Colour;
		        ctx.beginPath();
		        ctx.arc(Mouse.PosX,Mouse.PosY,R,0,Math.PI*2,true);
		        ctx.closePath;
		        ctx.fill();
		
		        canvas.style.cursor = "block";
		
		
                        ctx.save();
                        ctx.fillStyle="white";
                        ctx.font = "15px Calibri";
                        ctx.fillText("X"+":"+Mouse.PosX+"|"+"Y"+":"+Mouse.PosY+"",Mouse.PosX,Mouse.PosY);
                        ctx.restore();
                        
		}
		else{
			
		        canvas.style.cursor = "none";
			
		}

		Mouse.W=W;
		Mouse.H=H;
			
	}
}//fin de la funcions
/*Posicion de mause*/ /*Posicion de mause*/ /*Posicion de mause*/
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
function Distancepoints(PosX1,PosY1,PosX2,PosY2){

var Distancia_entre_dos_Puntos=Math.floor(Math.sqrt((Math.pow(PosX1-PosX2,2))+(Math.pow(PosY1-PosY2,2))));
	return Distancia_entre_dos_Puntos;

}

// Angulo entre dos puntos
function Angletwopoints(PosX1, PosY1, PosX2, PosY2){
	
	var Pendiente = ((PosX1-(PosX2))/((PosY1-(PosY2))));
	var Angle_in_Radians = Math.tan(Pendiente);
	var Angle = Math.floor(Angle_in_Radians*(180/Math.PI));
	return Angle;
	
}





//BoxCollision
function BoxCollision(PosX1,PosY1,W1,H1,PosX2,PosY2,W2,H2){
			if ( ((PosX1+W1) > PosX2)  &&  (PosX1 < (PosX2+W2)) ) {          
				if ( ((PosY1+H1) > PosY2)  &&  (PosY1 < (PosY2+H2)) ) {
					
					return true;
				}
			}
			else{
				return false;
			}
	}

//CircleCollision
function CircleCollision(PosX1, PosY1, Radius1 PosX2, PosY2, Radius2){

		var Distancia_entre_dos_Puntos=Math.floor(Math.sqrt((Math.pow(PosX1-PosX2,2))+(Math.pow(PosY1-PosY2,2))));
		if(Distancia_entre_dos_Puntos<=Radius1+Radius2){
			
			return true;			
		}
		else{
			return false;
		}
		
	}


/*sistema de colisiones*/ /*sistema de colisiones*/ /*sistema de colisiones*/
/**********************/

/**********************/
		
/*botones tactil*/
var Valor=0; 
var ClickButton=false;
function ButtonTouch(X,Y,W,H,R,Colour,Url){
	
	this.X=X || 10;
	this.Y=Y || 10;
	this.R=R || 20;
	this.Colour=Colour || "grey";
							
	this.X1=X-50;
	this.Y2=Y-50;
	this.W=W;
	this.H=H;
	this.Url=Url;
			
if(this.Url==undefined){		
			ctx=Screen.context;
			//circle
			ctx.save();
			ctx.fillStyle=Colour;
			ctx.beginPath();
			ctx.arc(this.X, this.Y, this.R, 20, 0, (Math.PI/180)*360,true);
			ctx.closePath;
			ctx.fill();
			
			//square
			ctx.save();
			ctx.fillStyle = "rgba(255, 255, 255 ,0)";
			ctx.fillRect(this.X1, this.Y2, this.W, this.H);
			ctx.restore();
}
if(this.Url!=undefined){
		
		ctx=Screen.context;			

		ctx.save();
		var Urlimg = new Image();
		Urlimg.src = this.Url;
		ctx.drawImage(Urlimg, this.X1, this.Y2, this.W, this.H);
		ctx.restore();
	}	
this.Action = function(){

	Valor = Math.floor(Math.sqrt((Math.pow(Mouse.PosX-this.X,2))+(Math.pow(Mouse.PosY-this.Y,2))));

	var canvas = document.getElementById('canvas');
	
	//click
	canvas.onmousedown=function(){ 	 ClickButton=true; 	 	}
	canvas.onmouseup=function(){ 	 ClickButton=false; 	}
	//click

		if(Valor<=30 && ClickButton==true){		
					return true;
		}
		else
			if(Valor>=30 && ClickButton==false){
				return false;
				
			}
		

	
	
	}//cierre function_Action
	
	
}

/*botones tactil*/
/***Touch superficie***/ /***Touch superficie***/ /***Touch superficie***/ 

var ongoingTouches = new Array;
var ClickTouch=false;
var ValorTouch=0;
 
 // SurfaceTouch.X;
 // SurfaceTouch.Y;
let SurfaceTouch = {
	X:0,
	Y:0,	
	Touhs:function(idToFind){
		  for (var i=0; i<ongoingTouches.length; i++){
			var id = ongoingTouches[i].identifier;
				
			if (id == idToFind){ return i; }
		  }
		return -1;    // not found
    },	
	Start:function(){
			/*iniciar el tactil*/
				
		var CanvasMovil = document.getElementById("canvas");
				
		CanvasMovil.addEventListener('touchstart',function(event){
				
			event.preventDefault();				
			var touches = event.changedTouches;
	
			for (var i=0; i<touches.length; i++){
						ongoingTouches.push(touches[i]);			
						SurfaceTouch.X=touches[i].pageX;
						SurfaceTouch.Y=touches[i].pageY;
								
					}				
				});

		},
		
	End:function(){
		var CanvasMovil = document.getElementById("canvas");
				
		CanvasMovil.addEventListener('touchend',function(event){
				event.preventDefault();
				var touches = event.changedTouches;
			
			  for(var i=0; i<touches.length; i++) {
					ongoingTouches.splice(i, 1);    
					
			  }  
				
			});	
		},
		
	Move:function(){
		var CanvasMovil = document.getElementById("canvas");
				
		CanvasMovil.addEventListener('touchmove',function(event){

		  event.preventDefault();
		  
		  var touches = event.changedTouches;
				 
	for(var i=0; i<touches.length; i++){
		var idx = SurfaceTouch.Touhs(touches[i].identifier);		
		ongoingTouches.splice(idx, 1, touches[i]);  
		console.log("moveX"+touches[i].pageX+"|"+"moveY"+touches[i].pageY);
		SurfaceTouch.X=touches[i].pageX;
		SurfaceTouch.Y=touches[i].pageY;
		  }
		  
		
		});
	},
	
	Cancel:function(){ 
			/*si se cancela tactil*/
		var CanvasMovil = document.getElementById("canvas");
				
		CanvasMovil.addEventListener('touchcancel',function(event){	
			 event.preventDefault();
			  var touches = event.changedTouches;	  
			  for(var i=0; i<touches.length; i++) {
				ongoingTouches.splice(i, 1);  
		
			 }
		
		
		});
		
		},//cierre

	Init:function(){
				SurfaceTouch.Start();
				SurfaceTouch.End();
				//SurfaceTouch.Move(surface);
				SurfaceTouch.Cancel();
	}

}
//cierre del objeto

function MovilTouchButton(X,Y,W,H,R,Colour,url){
	
	this.X=X;
	this.Y=Y;
	this.R=R;
	this.Colour=Colour;
							
	this.X1=X-50;
	this.Y2=Y-50;
	this.W=W;
	this.H=H;
	this.url=url;
	
if(this.url==undefined){		
			ctx=Screen.context;
			
			//circle
			ctx.save();
			ctx.fillStyle=Colour;
			ctx.beginPath();
			ctx.arc(this.X, this.Y, this.R, 20, 0, (Math.PI/180)*360,true);
			ctx.closePath;
			ctx.fill();
			
			//square
			ctx.save();
			ctx.fillStyle = "rgba(255, 255, 255 ,0)";
			ctx.fillRect(this.X1, this.Y2, this.W, this.H);
			ctx.restore();
}

 if(this.url!=undefined){
		
		ctx=Screen.context;			

		ctx.save();
		var Urlimg = new Image();
		Urlimg.src = this.url;
		ctx.drawImage(Urlimg, this.X1, this.Y2, this.W, this.H);
		ctx.restore();
	}
	
	this.Action = function(){

	ValorTouch = Math.floor(Math.sqrt((Math.pow(SurfaceTouch.X-this.X,2))+(Math.pow(SurfaceTouch.Y-this.Y,2))));

		var canvas = document.getElementById('canvas');
		
		//click
	canvas.addEventListener('touchstart',function(event){	 ClickTouch=true; 	 	});
	canvas.addEventListener('touchend',function(event){	 ClickTouch=false; 	 	});

	//click

		if(ValorTouch<=30 && ClickTouch==true){		
					return true;
		}
		else
			if(ValorTouch>=30 && ClickTouch==false){
					return false;
				
			}
	}
	//cierre function_Action
	
	
}

/***Touch superficie***/ /***Touch superficie***/ /***Touch superficie***/ 

/********************************************/
/*Time System*/
var Time = {
	Init:0,
	i:0,
	State:false,
Delay:function(Capture,Stateconter){
	
		if(Stateconter==true ){

				if(Time.Init<Capture){
						
						Time.Init+=1;
						
				}
				if(Time.Init<Capture ){				
							
							Time.State=false;
							
					}else
						if(Time.Init>=Capture){

							Time.State=true;
							
						}
						
						
		}//cierre boleano

},
//cierre delay 
Interval:function(Capture,End,Stateconter){ 	
	
if(Stateconter==true){

		Time.i+=1;
	
		if(Time.i>0 && Time.i<Capture ){
			
				Time.State=false;
		 
		}else
			if(Time.i>=Capture){

				Time.State=true;
				
			}
			
			
		if(Time.i==End){ 	Time.i=0; 				}
				
		

	}//cierre boleano


	 	}	

		
}
/*Time System*/

/********************************************/
/*Gravity*/ /*Gravity*/
// function Gravity(ObjectCollision,ForseGravity,PosPlayer){
			// if(State==true){				
				// return G;
				// }
				// if(State==false){
					
					// return 0;	
				// // }
			// if(state){
				
				
				
			// }
				
				
// }				
/*Gravity*/ /*Gravity*/
/************************/
/**Sound**//**Sound**//**Sound**//**Sound**/
	
function Sound(src,auto_play,loop,volume){
	
			this.Sound = document.createElement("audio");
			this.Sound.id = "audio";
			this.Sound.src = src;		
			this.Sound.preload="auto";
			this.Sound.controls="display";		
			this.Sound.loop = loop; //
			this.Sound.autoplay = auto_play;
			this.Sound.muted = false ; //
			this.Sound.volume = volume; // max =1			
			this.Sound.style.display = "none";
			
			document.body.appendChild(this.Sound);
				this.Play = function(){
						this.Sound.play();
				  }	  
				this.Stop = function(){
						this.Sound.pause();
				  }
				  
}
/**Sound**//**Sound**//**Sound**//**Sound**/
/**Camera**/ /**Camera**/ /**Camera**/ /**Camera**/

var Camera = {
	
Fixed:function(S,A){		
		this.S=S;
		this.A=A;
		if(this.S==null){ 			this.E=1; 		}
		if(this.A==null){ 			this.A=0; 		}
		
		ctx=Screen.context;
		
		ctx.setTransform(this.S,this.A,this.A,this.S,0,0);
		ctx.clearRect(0, 0, Screen.Canvas.width, Screen.Canvas.height);

		},
Dynamic:function(S,A,X,Y,W,H,mW,mH){

			this.S = S;
			this.A = A;
			
		this.x = X+W/2 - Screen.Canvas.width/2; 
		this.y = Y+H/2 - Screen.Canvas.height/2;	


		this.mapW = mW;
		this.mapH = mH;	

			ctx=Screen.context;
					
			ctx.setTransform(this.S,this.A,this.A,this.E,0,0);
			ctx.clearRect(0, 0, Screen.Canvas.width, Screen.Canvas.height);
			
		   if (this.x < 0) {
                this.x = 0;				
            } 
			else 
			if (this.x > this.mapW - Screen.Canvas.width) {
							this.x = this.mapW - Screen.Canvas.width;					
            }
            if (this.y < 0) {
                this.y = 0;					
            }
			else 
				if (this.y > this.mapH - Screen.Canvas.height) {
							this.y = this.mapH - Screen.Canvas.height;					
            }
			
ctx.translate(-this.x,-this.y); //ejecuta el movimiento de la camara 


	}


}

/**Camera**/ /**Camera**/ /**Camera**/ /**Camera**/




/*******Esportar Modulos*/


module.exports.Screen=Screen;
module.exports.Game_loop=Game_loop;
module.exports.Square=Square;
module.exports.Circle=Circle;
module.exports.Images=Images;
module.exports.Sprite=Sprite;
module.exports.Text=Text;
module.exports.Debug=Debug;
module.exports.Transition=Transition;
module.exports.Mouse=Mouse;

module.exports.KeyboardEvents=KeyboardEvents;

module.exports.Angletwopoints=Angletwopoints;
module.exports.Distancepoints=Distancepoints;


module.exports.BoxCollision=BoxCollision;
module.exports.CircleCollision=CircleCollision;
module.exports.ButtonTouch=ButtonTouch;

module.exports.SurfaceTouch=SurfaceTouch;
module.exports.MovilTouchButton=MovilTouchButton;


module.exports.Time=Time;
// module.exports.Gravity=Gravity;
module.exports.Sound=Sound;
module.exports.Camera = Camera;





/*******Esportar Modulos*/
