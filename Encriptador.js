var botonEncriptador=document.querySelector("#boton_encriptador");
var botonDesencriptar=document.querySelector("#boton_desencriptador");
var conejo=document.querySelector(".contenedor-conejo");
var texto1=document.querySelector(".contenerdor_texto1");
var texto2= document.querySelector(".contenedor_texto2");
var resultado=document.querySelector("#resultado");
var textoResultado=document.querySelector("#texto");
var botonCopiar=document.querySelector("#boton_copiar");
botonEncriptador.onclick=encripta;
botonDesencriptar.onclick=desencriptar;
botonCopiar.onclick=copiar;
botonEncriptador=ValidacionLetras;



function encripta(){
	ocultarAdelante()
	textoResultado.textContent=encriptarTexto(recuperarTexto());
}

function desencriptar(){
	ocultarAdelante()
	textoResultado.textContent=desencriptarTexto(recuperarTexto());

}


function recuperarTexto(){
 
	var mensaje=document.querySelector(".mensaje");
	return mensaje.value;
}

function ocultarAdelante(){
	conejo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
	var texto=mensaje;  
	var textoFinal="";

	for(var	i=0; i< texto.length; i++){
		if(texto[i]=="a"){
			textoFinal=textoFinal+"ai"
		}
		else if(texto[i]=="e"){
			textoFinal=textoFinal+"enter"
		}
		else if(texto[i]=="i"){
			textoFinal=textoFinal+"imes"
		}
		else if(texto[i]=="o"){
			textoFinal=textoFinal+"ober"
		}
		else if(texto[i]=="u"){
			textoFinal=textoFinal+ "ufat"
		}
		else{
			textoFinal=textoFinal+texto[i]
		}
	}
	return textoFinal;
}

function desencriptarTexto(mensaje){
	var texto=mensaje;  
	var textoFinal="";

	for(var	i=0; i< texto.length; i++){
		if(texto[i]=="a"){
			textoFinal=textoFinal+"a"
			i=i+1;
		}
		else if(texto[i]=="e"){
			textoFinal=textoFinal+"e"
			i=i+4;
		}
		else if(texto[i]=="i"){
			textoFinal=textoFinal+"i"
			i=i+3;
		}
		else if(texto[i]=="o"){
			textoFinal=textoFinal+"o"
			i=i+3;
		}
		else if(texto[i]=="u"){
			textoFinal=textoFinal+ "u"
			i=i+3;
		}
		else{
			textoFinal=textoFinal+texto[i]
		}
	}
	return textoFinal;
}
function copiar() {
 var mensajeencriptado=texto.value     
  navigator.clipboard.writeText(mensajeencriptado);
  alert("Mensaje encriptado copiado")
 }

 function ValidacionLetras(string){
    var mensajeFinal = '';
    var filtro = ' abcdefghijklmnñopqrstuvwxyz';
	
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1)
             
	     mensajeFinal += string.charAt(i);

    return mensajeFinal;
} 







