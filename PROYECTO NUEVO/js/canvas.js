var frame = window.requestAnimationFrame||
			window.mozRequedAnimationFrame||
			window.webkitRequestAnimationFrame||
			window.msRequesAnimationFrame;

var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");

var jugador = {
	x:200,
	y:70,
	ancho:50,
	alto:50,
	color: "red",
	movimientox: 0,
	movimientoy:0,
	velocidad:5
}
 var datos={
 	izquierda:false,
 	derecha:false,
 	arriba: false,
 	abajo:false,
 	//variables booleanas
 	
 }

 var juego={
// captura si se oprime o se suelta el teclado
 	teclado:function(){
 		document.addEventListener("keydown",juego.oprimir);
 	    document.addEventListener("keyup",juego.soltar);
 	},
 	// funcion oprimir distribuye que teclado 
 	oprimir:function(tecla){
 		tecla.preventDefault();
 		switch(tecla.keyCode){
 			case 37:datos.izquierda=true; break;
 			case 38:datos.arriba=true;break;
 			case 39:datos.derecha=true;break;
 			case 40:datos.abajo=true;break;

 		}

 	},
 	// funcion soltar distribuye que teclado 
 	soltar:function(tecla){
 		tecla.preventDefault();
 		switch(tecla.keyCode){
 			case 37:datos.izquierda=false; break;
 			case 38:datos.arriba=false;break;
 			case 39:datos.derecha=false;break;
 			case 40:datos.abajo=false;break;

 		}

 	},

 	tiempo: function(){
 		jugador.x+=jugador.movimientox;
 		if (datos.izquierda) {
 			jugador.movimientox = -jugador.velocidad;
 			jugador.movimientoy = 0;

 		}
 		if (datos.derecha) {
 			jugador.movimientox = jugador.velocidad;
 			jugador.movimientoy = 0;
 		}
 		if (datos.izquierdo && datos.derecha){ 
 			jugador.movimientox=0
 		}

 		jugador.y+=jugador.movimientoy;

 		if (datos.arriba) {
 			jugador.movimientoy= -jugador.velocidad;
 			jugador.movimientox = 0;

 		}
 		if (datos.abajo) {
 			jugador.movimientoy = jugador.velocidad;
 			jugador.movimientox= 0;
 		}
 		if (datos.arriba && datos.abajo){ 
 			jugador.movimientoy=0;
 		}

 		juego.canvas();
 		frame(juego.tiempo);
 	},

 	canvas:function(){
 		ctx.clearRect(0,0,canvas.width,canvas.height);
 		ctx.fillStyle=jugador.color;
 		ctx.fillRect(jugador.x,jugador.y,jugador.ancho,jugador.alto);
 	}
 	

}
juego.teclado();
juego.tiempo();