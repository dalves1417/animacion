var frame = window.requestAnimationFrame||
			window.mozRequedAnimationFrame||
			window.webkitRequestAnimationFrame||
			window.msRequesAnimationFrame;

var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");


var sprite = new Image();
sprite.src ="img/opcion1.png";

var numeroo5=0;
var ubicacionxo5=0;

var numero5=0;
var ubicacion5=0;

function movimientoopcion5(){
	
	if(numeroo5 >= 600) {numeroo5=0}else{numeroo5+=3}

    for (var i = 0; i <= numeroo5; i+=100) {
	  
	    if (numeroo5>=i) {ubicacionxo5 =i}
	}

	if(numero5 >= 1000) {numero5=0}else{numero5+=3}

    for (var a = 0; a <= numero5; a+=30) {
	  
	    if (numero5>=a) {ubicacion5=a}
	}
// por defecto para borar la imagen
ctx.clearRect(ubicacion5,400,100,150);

//=========================================
//        PAISAJE
//========================================
//        CIELO I
//========================================
 
var cielo1={
	gradiantex:0,
	gradiantey:0,
	gradiantex1:0,
	gradiantey1:500,
 	coloresquina:"blue",
 	esquina0:0,
 	esquina1:1,
 	coloresquinaI:"white",
 	puntox:0,
 	puntoy:0,
 	puntox1:1000,
 	puntoy1:500,
 	visualizar: function(){
 		var grd = ctx.createLinearGradient(cielo1.gradiantex,cielo1.gradiantey,cielo1.gradiantex1,cielo1.gradiantey1);
        grd.addColorStop(cielo1.esquina0,cielo1.coloresquina);
        grd.addColorStop(cielo1.esquina1,cielo1.coloresquinaI);
        ctx.fillStyle=grd;
        ctx.fillRect(cielo1.puntox,cielo1.puntoy,cielo1.puntox1,cielo1.puntoy1);
    }

 }
cielo1.visualizar();

//========================================
//        CIELO II
//========================================

var cielo2={
	ancholinia:1,
	colorcontorno:"rgba(255,0,255,1)",
	gradiantex:0,
	gradiantey:300,
	gradiantex1:0,
	gradiantey1:500,
	esquina0:0,
	coloresquina:"#40c4ff",
	esquina1:1,
	coloresquinaI:"white",
	puntox:0,
	puntoy:350,
	puntox1:1000,
	puntoy1:1000,
	
	visualizar:function(){
		ctx.lineWidth=cielo2.ancholinia;
        ctx.strokeStyle =cielo2.colorcontorno;
        var grd = ctx.createLinearGradient(cielo2.gradiantex,cielo2.gradiantey,cielo2.gradiantex1,cielo2.gradiantey1);
        grd.addColorStop(cielo2.esquina0,cielo2.coloresquina);
        grd.addColorStop(cielo2.esquina1,cielo2.coloresquinaI);
        ctx.fillStyle=grd;
        ctx.fillRect(cielo2.puntox,cielo2.puntoy,cielo2.puntox1,cielo2.puntoy1);
	}


}
cielo2.visualizar();



//========================================
//        sol
//========================================

var sol={
	puntox:30,
	puntoy:30,
	radio:70,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#E9FE33",
	colorcontorno:"yellow",
	
	visualizar:function(){
	           ctx.beginPath();
               ctx.arc(sol.puntox,sol.puntoy,sol.radio,sol.puntox1,sol.puntoy1 );
               ctx.fillStyle=sol.colorfon;
               ctx.fill();
               ctx.strokeStyle=sol.colorcontorno;
                ctx.stroke();	
	}

}
sol.visualizar();


//==========================
//   MONTAÑAS
//===========================
 // montaña I 
 var montaña1={
 	colorfon: "#6400FF",
 	puntox:40,
 	puntoy:350,
 	liniax:220,
 	liniay:100,
 	linia2x:375,
 	linia2y:350,
 	ancholinia:1,
 	colorcontorno:"#6400FF",

 	visualizar:function(){
 		 
        ctx.beginPath();
        ctx.fillStyle =montaña1.colorfon;
        ctx.moveTo(montaña1.puntox,montaña1.puntoy);
        ctx.lineTo(montaña1.liniax,montaña1.liniay);
        ctx.lineTo(montaña1.linia2x,montaña1.linia2y);
        ctx.fill();
        ctx.lineWidth=montaña1.ancholinia;
        ctx.strokeStyle=montaña1.colorcontorno;
        ctx.stroke();
 	}
 }
montaña1.visualizar();
 

// montaña I.1

var montaña2={
	colorfon:"#FFFFFF",
	puntoIniciox:220,
	puntoInicioy:100,
	liniax:160,
	liniay:180,
	linia2x:220,
	linia2y:260,
	ancholinia:1,
	colorcontorno:"#FFFFFF",

	visualizar:function(){

		ctx.beginPath();
        ctx.fillStyle =montaña2.colorfon;
        ctx.moveTo(montaña2.puntoIniciox,montaña2.puntoInicioy);
        ctx.lineTo(montaña2.liniax,montaña2.liniay);
        ctx.lineTo(montaña2.linia2x,montaña2.linia2y);
        ctx.fill();
        ctx.lineWidth=montaña2.ancholinia;
        ctx.strokeStyle=montaña2.colorcontorno;
        ctx.stroke();
	}

}  
 montaña2.visualizar();


// montaña I.2

var montaña3={
	colorfon:"#D1D2FF",
	puntoIniciox:220,
	puntoInicioy:100,
	liniax:270,
	liniay:180,
	linia2x:220,
	linia2y:260,
	ancholinia:1,
	colorcontorno:"#D1D2FF",

	visualizar:function(){
		ctx.beginPath();
        ctx.fillStyle =montaña3.colorfon;
        ctx.moveTo(montaña3.puntoIniciox,montaña3.puntoInicioy);
        ctx.lineTo(montaña3.liniax,montaña3.liniay);
        ctx.lineTo(montaña3.linia2x,montaña3.linia2y);
        ctx.fill();
        ctx.lineWidth=montaña3.ancholinia;
        ctx.strokeStyle=montaña3.colorcontorno;
        ctx.stroke();
	}

}  
montaña3.visualizar();

// montaña II

var montaña4={
	colorfon:"#3200FF",
	puntoIniciox:220,
	puntoInicioy:350,
	liniax:420,
	liniay:100,
	linia2x:575,
	linia2y:350,
	ancholinia:1,
	colorcontorno:"#3200FF",

	visualizar:function(){
		ctx.beginPath();
        ctx.fillStyle =montaña4.colorfon;
        ctx.moveTo(montaña4.puntoIniciox,montaña4.puntoInicioy);
        ctx.lineTo(montaña4.liniax,montaña4.liniay);
        ctx.lineTo(montaña4.linia2x,montaña4.linia2y);
        ctx.fill();
        ctx.lineWidth=montaña4.ancholinia;
        ctx.strokeStyle=montaña4.colorcontorno;
        ctx.stroke();
	}

}
montaña4.visualizar();

// montaña II.1

 var montaña5={
	colorfon:"#FFFFFF",
	puntoIniciox:420,
	puntoInicioy:100,
	liniax:355,
	liniay:180,
	linia2x:420,
	linia2y:260,
	ancholinia:1,
	colorcontorno:"#FFFFFF",

	visualizar:function(){
	ctx.beginPath();
    ctx.fillStyle =montaña5.colorfon;
    ctx.moveTo(montaña5.puntoIniciox,montaña5.puntoInicioy);
    ctx.lineTo(montaña5.liniax,montaña5.liniay);
    ctx.lineTo(montaña5.linia2x,montaña5.linia2y);
    ctx.fill();
    ctx.lineWidth=montaña5.ancholinia;
    ctx.strokeStyle= montaña5.colorcontorno;
    ctx.stroke();	
	}
}
montaña5.visualizar();


// montaña II.2 

var montaña6={
	colorfon:"#D1D2FF",
	puntoIniciox:420,
	puntoInicioy:100,
	liniax:470,
	liniay:180,
	linia2x:420,
	linia2y:260,
	ancholinia:1,
	colorcontorno:"#D1D2FF",

	visualizar:function(){
		ctx.beginPath();
        ctx.fillStyle =montaña6.colorfon;
        ctx.moveTo(montaña6.puntoIniciox,montaña6.puntoInicioy);
        ctx.lineTo(montaña6.liniax,montaña6.liniay);
        ctx.lineTo(montaña6.linia2x,montaña6.linia2y);
        ctx.fill();
        ctx.lineWidth=montaña6.ancholinia;
        ctx.strokeStyle=montaña6.colorcontorno;
	}
}
montaña6.visualizar();

// montaña III

var montaña7={
	colorfon:"#6400FF",
	puntoIniciox:420,
	puntoInicioy:350,
	liniax:620,
	liniay:100,
	linia2x:775,
	linia2y:350,
	ancholinia:1,
	colorcontorno:"#6400FF",

	visualizar:function(){
		ctx.beginPath();
        ctx.fillStyle =montaña7.colorfon;
        ctx.moveTo(montaña7.puntoIniciox,montaña7.puntoInicioy);
        ctx.lineTo(montaña7.liniax,montaña7.liniay);
        ctx.lineTo(montaña7.linia2x,montaña7.linia2y);
        ctx.fill();
        ctx.lineWidth=montaña7.ancholinia;
        ctx.strokeStyle=montaña7.colorcontorno;
        ctx.stroke();
	}
}
 montaña7.visualizar();

// montaña III.1

var montaña8={
	colorfon:"#FFFFFF",
	puntoIniciox:620,
	puntoInicioy:100,
	liniax:555,
	liniay:180,
	linia2x:620,
	linia2y:260,
	ancholinia:1,
	colorcontorno:"#FFFFFF",

	visualizar:function(){
		ctx.beginPath();
        ctx.fillStyle =montaña8.colorfon;
        ctx.moveTo(montaña8.puntoIniciox,montaña8.puntoInicioy);
        ctx.lineTo(montaña8.liniax,montaña8.liniay);
        ctx.lineTo(montaña8.linia2x,montaña8.linia2y);
        ctx.fill();
        ctx.lineWidth=montaña8.ancholinia;
        ctx.strokeStyle=montaña8.colorcontorno;
        ctx.stroke();

	}
}    
montaña8.visualizar();
// montaña III.2 

var montaña9={
	colorfon:"#D1D2FF",
	puntoIniciox:620,
	puntoInicioy:100,
	liniax:670,
	liniay:180,
	linia2x:620,
	linia2y:260,
	ancholinia:1,
	colorcontorno:"#D1D2FF",

	visualizar:function(){
		ctx.beginPath();
        ctx.fillStyle =montaña9.colorfon;
        ctx.moveTo(montaña9.puntoIniciox,montaña9.puntoInicioy);
        ctx.lineTo(montaña9.liniax,montaña9.liniay);
        ctx.lineTo(montaña9.linia2x,montaña9.linia2y);
        ctx.fill();
        ctx.lineWidth=montaña9.ancholinia;
        ctx.strokeStyle=montaña9.colorcontorno;
	}
}   
montaña9.visualizar();

// montaña IV


var montaña10={
	colorfon:"#3200FF",
	liniax:620,
	liniay:350,
	linia1x:820,
	linia1y:100,
	linia2x:975,
	linia2y:350,
	ancholinia:1,
	colorcontorno:"#3200FF",

	visualizar:function(){
		ctx.beginPath();
        ctx.fillStyle =montaña10.colorfon;
        ctx.lineTo(montaña10.liniax,montaña10.liniay);
        ctx.lineTo(montaña10.linia1x,montaña10.linia1y);
        ctx.lineTo(montaña10.linia2x,montaña10.linia2y);
        ctx.fill();
        ctx.lineWidth=montaña10.ancholinia;
        ctx.strokeStyle=montaña10.colorcontorno;
        ctx.stroke();
	}
} 
montaña10.visualizar();

// montaña IV.1 

var montaña11={
	colorfon:"#FFFFFF",
	puntoIniciox:820,
	puntoInicioy:100,
	liniax:755,
	liniay:180,
	linia2x:820,
	linia2y:260,
	ancholinia:1,
	colorcontorno:"#FFFFFF",

	visualizar:function(){
		ctx.beginPath();
        ctx.fillStyle ="#FFFFFF";
        ctx.moveTo(montaña11.puntoIniciox,montaña11.puntoInicioy);
        ctx.lineTo(montaña11.liniax,montaña11.liniay);
        ctx.lineTo(montaña11.linia2x,montaña11.linia2y);
        ctx.fill();
        ctx.lineWidth=montaña11.ancholinia;
        ctx.strokeStyle= montaña11.colorcontorno;
        ctx.stroke();
	}
}    
montaña11.visualizar();

// montaña IV.2

   var montaña12={
	colorfon:"#D1D2FF",
	puntoIniciox:820,
	puntoInicioy:100,
	liniax:870,
	liniay:180,
	linia2x:820,
	linia2y:260,
	ancholinia:0,
	colorcontorno:"#D1D2FF",

	visualizar:function(){
		ctx.beginPath();
        ctx.fillStyle =montaña12.colorfon;
        ctx.moveTo(montaña12.puntoIniciox,montaña12.puntoInicioy);
        ctx.lineTo(montaña12.liniax,montaña12.liniay);
        ctx.lineTo(montaña12.linia2x,montaña12.linia2y);
        ctx.fill();
        ctx.lineWidth=montaña12.ancholinia;
        ctx.strokeStyle=montaña12.colorcontorno;
        ctx.beginPath();
	}
}     
montaña12.visualizar();

//===============
// ===linia===
var linia0={
	puntoIniciox:900,
	puntoInicioy:220,
	liniax:900,
	liniay:600,
	ancholinia:18,
	colorcontorno:"#6A0015",

	visualizar:function(){
		ctx.moveTo(linia0.puntoIniciox,linia0.puntoInicioy);
        ctx.lineTo(linia0.liniax,linia0.liniay);
        ctx.stroke();
        ctx.lineWidth=linia0.ancholinia;
        ctx.strokeStyle=linia0.colorcontorno;
        ctx.stroke();
        ctx.beginPath();
	}
}
linia0.visualizar();




//===============
// ===linia===

var linia00={
	puntoIniciox:900,
	puntoInicioy:220,
	liniax:900,
	liniay:600,
	ancholinia:18,
	colorcontorno:"#6A0015",

	visualizar:function(){
		ctx.moveTo(linia00.puntoIniciox,linia00.puntoInicioy);
        ctx.lineTo(linia00.liniax,linia00.liniay);
        ctx.stroke();
        ctx.lineWidth=linia00.ancholinia;
        ctx.strokeStyle=linia00.colorcontorno;
        ctx.stroke();
        ctx.beginPath();
	}
}
linia00.visualizar();

//===============
// ===pino I===

var pino={
	colorfon:"#003219",
	liniax:850,
	liniay:270,
	linia1x:900,
	linia1y:160,
	linia2x:960,
	linia2y:270,
	ancholinia:1,
	colorcontorno:"#003219",

	visualizar:function(){
		ctx.fillStyle =pino.colorfon;
        ctx.lineTo(pino.liniax,pino.liniay);
        ctx.lineTo(pino.linia1x,pino.linia1y);
        ctx.lineTo(pino.linia2x,pino.linia2y);
        ctx.fill();
        ctx.lineWidth=pino.ancholinia;
        ctx.strokeStyle=pino.colorcontorno;
        ctx.stroke();
        ctx.beginPath();
	}
} 
pino.visualizar();

//===============
// ===pino II===

var pino1={
	colorfon:"#005119",
	liniax:850,
	liniay:240,
	linia1x:900,
	linia1y:150,
	linia2x:960,
	linia2y:240,
	ancholinia:1,
	colorcontorno:"#005119",

	visualizar:function(){
		ctx.fillStyle =pino1.colorfon;
        ctx.lineTo(pino1.liniax,pino1.liniay);
        ctx.lineTo(pino1.linia1x,pino1.linia1y);
        ctx.lineTo(pino1.linia2x,pino1.linia2y);
        ctx.fill();
        ctx.lineWidth=pino1.ancholinia;
        ctx.strokeStyle=pino1.colorcontorno;
        ctx.stroke();
        ctx.beginPath();
	}
} 
pino1.visualizar();

//===============
// ===pino III===


var pino2={
	colorfon:"#028B19",
	liniax:850,
	liniay:200,
	linia1x:900,
	linia1y:100,
	linia2x:960,
	linia2y:200,
	ancholinia:1,
	colorcontorno:"#028B19",

	visualizar:function(){
		ctx.fillStyle =pino2.colorfon;
        ctx.lineTo(pino2.liniax,pino2.liniay);
        ctx.lineTo(pino2.linia1x,pino2.linia1y);
        ctx.lineTo(pino2.linia2x,pino2.linia2y);
        ctx.fill();
        ctx.lineWidth=pino2.ancholinia;
        ctx.strokeStyle=pino2.colorcontorno;
        ctx.stroke();
        ctx.beginPath();
	}
} 
pino2.visualizar();


//========================================
//        montaña REDONDA I
//========================================

var montañaR={
	puntox:895,
	puntoy:500,
	radio:180,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#00780A",
	ancholinia:1,
	colorcontorno:"#00780A",

	visualizar:function(){
	   ctx.arc(montañaR.puntox,montañaR.puntoy,montañaR.radio,montañaR.puntox1,montañaR.puntoy1 );
       ctx.fillStyle=montañaR.colorfon;
       ctx.fill();
       ctx.lineWidth=montañaR.ancholinia;
       ctx.strokeStyle=montañaR.colorcontorno;
       ctx.stroke();
       ctx.beginPath();	
	}
}
montañaR.visualizar();


//===============
// ===linia===
var linia000={
	puntoIniciox:140,
	puntoInicioy:220,
	liniax:140,
	liniay:600,
	ancholinia:18,
	colorcontorno:"#6A0015",

	visualizar:function(){
		ctx.moveTo(linia000.puntoIniciox,linia000.puntoInicioy);
        ctx.lineTo(linia000.liniax,linia000.liniay);
        ctx.stroke();
        ctx.lineWidth=linia000.ancholinia;
        ctx.strokeStyle=linia000.colorcontorno;
        ctx.stroke();
        ctx.beginPath();
	}
}
linia000.visualizar();



//========================================
//       ARBOL RAMA I
//========================================


var arbol={
	puntox:180,
	puntoy:200,
	radio:40,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#028B19",
	ancholinia:1,
	colorcontorno:"#028B19",

	visualizar:function(){
		ctx.beginPath();
        ctx.arc(arbol.puntox,arbol.puntoy,arbol.radio,arbol.puntox1,arbol.puntoy1);
        ctx.fillStyle=arbol.colorfon;
        ctx.fill();
        ctx.lineWidth=arbol.ancholinia;
        ctx.strokeStyle=arbol.colorcontorno;
        ctx.stroke();
        ctx.beginPath();
	}
}
arbol.visualizar();
//========================================
//       ARBOL RAMA II
//========================================
var arbol2={
	puntox:110,
	puntoy:200,
	radio:30,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#005119",
	ancholinia:1,
	colorcontorno:"#005119",

	visualizar:function(){
		ctx.beginPath();
        ctx.arc(arbol2.puntox,arbol2.puntoy,arbol2.radio,arbol2.puntox1,arbol2.puntoy1);
        ctx.fillStyle=arbol2.colorfon;
        ctx.fill();
        ctx.lineWidth=arbol2.ancholinia;
        ctx.strokeStyle=arbol2.colorcontorno;
        ctx.stroke();
        ctx.beginPath();
	}
}
arbol2.visualizar();

//========================================
//       ARBOL RAMA III
//========================================
var arbol3={
	puntox:140,
	puntoy:220,
	radio:50,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#005119",
	ancholinia:1,
	colorcontorno:"#005119",

	visualizar:function(){
		ctx.beginPath();
        ctx.arc(arbol3.puntox,arbol3.puntoy,arbol3.radio,arbol3.puntox1,arbol3.puntoy1);
        ctx.fillStyle=arbol3.colorfon;
        ctx.fill();
        ctx.lineWidth=arbol3.ancholinia;
        ctx.strokeStyle=arbol3.colorcontorno;
        ctx.stroke();
        ctx.beginPath();
	}
}
arbol3.visualizar();

//========================================
//       ARBOL RAMA IV
//========================================

var arbol4={
	puntox:160,
	puntoy:250,
	radio:30,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#003219",
	ancholinia:1,
	colorcontorno:"#005119",

	visualizar:function(){
		ctx.beginPath();
        ctx.arc(arbol4.puntox,arbol4.puntoy,arbol4.radio,arbol4.puntox1,arbol4.puntoy1);
        ctx.fillStyle=arbol4.colorfon;
        ctx.fill();
        ctx.lineWidth=arbol4.ancholinia;
        ctx.strokeStyle=arbol4.colorcontorno;
        ctx.stroke();
        ctx.beginPath();
	}
}
arbol4.visualizar();



//========================================
//        montaña redonda II
//========================================

var montañaR1={
	puntox:80,
	puntoy:500,
	radio:210,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#00B40A",
	ancholinia:1,
	colorcontorno:"#005119",

	visualizar:function(){
		ctx.arc(montañaR1.puntox,montañaR1.puntoy,montañaR1.radio,montañaR1.puntox1,montañaR1.puntoy1);
        ctx.fillStyle=montañaR1.colorfon;
        ctx.fill();
        ctx.lineWidth=montañaR1.ancholinia;
        ctx.strokeStyle=montañaR1.colorcontorno;
        ctx.stroke();
        ctx.beginPath();
	}
}
montañaR1.visualizar();


//========================================
//        montaña II.I
//========================================

var montañaR2={
	puntox:20,
	puntoy:500,
	radio:30,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#00780A",
	ancholinia:1,
	colorcontorno:"#00780A",

	visualizar:function(){
		ctx.arc(montañaR2.puntox,montañaR2.puntoy,montañaR2.radio,montañaR2.puntox1,montañaR2.puntoy1);
        ctx.fillStyle=montañaR2.colorfon;
        ctx.fill();
        ctx.lineWidth=montañaR2.ancholinia;
        ctx.strokeStyle=montañaR2.colorcontorno;
        ctx.stroke();
        ctx.beginPath();
	}
}
montañaR2.visualizar();
//========================================
//        montaña II.II
//========================================

var montañaR3={
	puntox:80,
	puntoy:500,
	radio:30,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#00780A",
	ancholinia:1,
	colorcontorno:"#00780A",

	visualizar:function(){
		ctx.arc(montañaR3.puntox,montañaR3.puntoy,montañaR3.radio,montañaR3.puntox1,montañaR3.puntoy1);
        ctx.fillStyle=montañaR3.colorfon;
        ctx.fill();
        ctx.lineWidth=montañaR3.ancholinia;
        ctx.strokeStyle=montañaR3.colorcontorno;
        ctx.stroke();
        ctx.beginPath();
	}
}
montañaR3.visualizar();
//========================================
//        montaña II.III
//========================================

var montañaR4={
	puntox:140,
	puntoy:500,
	radio:30,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#00780A",
	ancholinia:1,
	colorcontorno:"#00780A",

	visualizar:function(){
		ctx.arc(montañaR4.puntox,montañaR4.puntoy,montañaR4.radio,montañaR4.puntox1,montañaR4.puntoy1);
        ctx.fillStyle=montañaR4.colorfon;
        ctx.fill();
        ctx.lineWidth=montañaR4.ancholinia;
        ctx.strokeStyle=montañaR4.colorcontorno;
        ctx.stroke();
        ctx.beginPath();
	}
}
montañaR4.visualizar();
//========================================
//        montaña II.IV
//========================================

var montañaR5={
	puntox:200,
	puntoy:500,
	radio:30,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#00780A",
	ancholinia:1,
	colorcontorno:"#00780A",

	visualizar:function(){
		ctx.arc(montañaR5.puntox,montañaR5.puntoy,montañaR5.radio,montañaR5.puntox1,montañaR5.puntoy1);
        ctx.fillStyle=montañaR5.colorfon;
        ctx.fill();
        ctx.lineWidth=montañaR5.ancholinia;
        ctx.strokeStyle=montañaR5.colorcontorno;
        ctx.stroke();
        ctx.beginPath();
	}
}
montañaR5.visualizar();

//========================================
//        montaña II.V
//========================================

var montañaR6={
	puntox:260,
	puntoy:500,
	radio:30,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#00780A",
	ancholinia:1,
	colorcontorno:"#00780A",

	visualizar:function(){
		ctx.arc(montañaR6.puntox,montañaR6.puntoy,montañaR6.radio,montañaR6.puntox1,montañaR6.puntoy1);
        ctx.fillStyle=montañaR6.colorfon;
        ctx.fill();
        ctx.lineWidth=montañaR6.ancholinia;
        ctx.strokeStyle=montañaR6.colorcontorno;
        ctx.stroke();
        ctx.beginPath();
	}

}
montañaR6.visualizar();
//========================================
//        manzanas
//========================================

var manzana={
	puntox:100,
	puntoy:250,
	radio:5,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"red",
	ancholinia:1,
	colorcontorno:"red",

	visualizar:function(){
		ctx.arc(manzana.puntox,manzana.puntoy,manzana.radio,manzana.puntox1,manzana.puntoy1);
        ctx.fillStyle=manzana.colorfon;
        ctx.fill();
        ctx.lineWidth=manzana.ancholinia;
        ctx.strokeStyle=manzana.colorcontorno;
        ctx.stroke();
        ctx.beginPath();
	}
}
 manzana.visualizar();

//recortar el dibujo de la imagen
//ctx.draw(imagen,x1,y1,recortex,recortey,x2,y2)
ctx.drawImage(sprite, ubicacionxo5,0,100,100,ubicacion5,350,150,150);
frame(movimientoopcion5);
}

//declaramos la funcion para qye se ejecute
movimientoopcion5();

//declaramos la funcion para qye se ejecute
movimientoopcion5();
