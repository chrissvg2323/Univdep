const entradas = document.getElementById("entradas");
const imgEntradas = document.getElementById("imgEntradas")

var tmp1 = true;

function cerrar(){
    imgEntradas.style.display = "none";
    imgEnsaladas.style.display = "none"
    imgSopas.style.display = "none"
    imgRollos.style.display = "none"
    imgConos.style.display = "none"
    imgOnigiris.style.display = "none"
    imgSet.style.display = "none"
    imgSashimis.style.display = "none"
    imgNigiris.style.display = "none"
    imgBolws.style.display = "none"
    imgPescados.style.display = "none"
    imgExtras.style.display = "none"
    imgBebidas.style.display = "none"
    imgBebidas1.style.display = "none"
    imgPostres.style.display = "none"

    tmp1 = true;
    tmp2 = true;
    tmp3 = true;
    tmp4 = true;
    tmp5 = true;
    tmp6 = true;
    tmp7 = true;
    tmp8 = true;
    tmp9 = true;
    tmp10 = true;
    tmp11 = true;
    tmp12 = true;
    tmp13 = true;
    tmp14 = true;
    tmp15 = true;
}

//Entradas

entradas.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp1){
        cerrar();
        imgEntradas.style.display = "block";
        tmp1 = false;
    }else{
        imgEntradas.style.display = "none";
        tmp1 = true;
    }
});

//Ensaladas

const ensaladas = document.getElementById("ensaladas");
const imgEnsaladas = document.getElementById("imgEnsaladas")

var tmp2 = true;

ensaladas.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp2){
        cerrar();
        imgEnsaladas.style.display = "block";
        tmp2 = false;
    }else{
        imgEnsaladas.style.display = "none";
        tmp2 = true;
    }
});

//Sopas

const sopas = document.getElementById("sopas");
const imgSopas = document.getElementById("imgSopas")

var tmp3 = true;

sopas.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp3){
        cerrar();
        imgSopas.style.display = "block";
        tmp3 = false;
    }else{
        imgSopas.style.display = "none";
        tmp3 = true;
    }
});

//Rollos

const rollos = document.getElementById("rollos");
const imgRollos = document.getElementById("imgRollos")

var tmp4 = true;

rollos.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp4){
        cerrar();
        imgRollos.style.display = "block";
        tmp4 = false;
    }else{
        imgRollos.style.display = "none";
        tmp4 = true;
    }
});

//Conos

const conos = document.getElementById("conos");
const imgConos = document.getElementById("imgConos")

var tmp5 = true;

conos.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp5){
        cerrar();
        imgConos.style.display = "block";
        tmp5 = false;
    }else{
        imgConos.style.display = "none";
        tmp5 = true;
    }
});

//Onigiris

const onigiris = document.getElementById("onigiris");
const imgOnigiris = document.getElementById("imgOnigiris")

var tmp6 = true;

onigiris.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp6){
        cerrar();
        imgOnigiris.style.display = "block";
        tmp6 = false;
    }else{
        imgOnigiris.style.display = "none";
        tmp6 = true;
    }
});

//Sets

const sets = document.getElementById("sets");
const imgSet = document.getElementById("imgSet")

var tmp7 = true;

sets.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp7){
        cerrar();
        imgSet.style.display = "block";
        tmp7 = false;
    }else{
        imgSet.style.display = "none";
        tmp7 = true;
    }
});

//Sashimis

const sashimis = document.getElementById("sashimis");
const imgSashimis = document.getElementById("imgSashimis")

var tmp8 = true;

sashimis.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp8){
        cerrar();
        imgSashimis.style.display = "block";
        tmp8 = false;
    }else{
        imgSashimis.style.display = "none";
        tmp8 = true;
    }
});

//Nigiris

const nigiris = document.getElementById("nigiris");
const imgNigiris  = document.getElementById("imgNigiris")

var tmp9 = true;

nigiris.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp9){
        cerrar();
        imgNigiris.style.display = "block";
        tmp9 = false;
    }else{
        imgNigiris.style.display = "none";
        tmp9 = true;
    }
});

//Bolws

const bolws = document.getElementById("bolws");
const imgBolws  = document.getElementById("imgBolws")

var tmp10 = true;

bolws.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp10){
        cerrar();
        imgBolws.style.display = "block";
        tmp10 = false;
    }else{
        imgBolws.style.display = "none";
        tmp10 = true;
    }
});

//Pescados

const pescados = document.getElementById("pescados");
const imgPescados  = document.getElementById("imgPescados")

var tmp11 = true;

pescados.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp11){
        cerrar();
        imgPescados.style.display = "block";
        tmp11 = false;
    }else{
        imgPescados.style.display = "none";
        tmp11 = true;
    }
});

//Extras

const extras = document.getElementById("extras");
const imgExtras  = document.getElementById("imgExtras")

var tmp12 = true;
extras.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp12){
        cerrar();
        imgExtras.style.display = "block";
        tmp12 = false;
    }else{
        imgExtras.style.display = "none";
        tmp12 = true;
    }
});

//Bebidas

const bebidas = document.getElementById("bebidas1");
const imgBebidas  = document.getElementById("imgBebidas1")

var tmp13 = true;
bebidas.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp13){
        cerrar();
        imgBebidas.style.display = "block";
        tmp13 = false;
    }else{
        imgBebidas.style.display = "none";
        tmp13 = true;
    }
});

//Bebidas

const bebidas1 = document.getElementById("bebidas2");
const imgBebidas1  = document.getElementById("imgBebidas2")

var tmp14 = true;
bebidas1.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp14){
        cerrar();
        imgBebidas1.style.display = "block";
        tmp14 = false;
    }else{
        imgBebidas1.style.display = "none";
        tmp14 = true;
    }
});

//Postres

const postres = document.getElementById("postres");
const imgPostres = document.getElementById("imgPostres")

var tmp15 = true;
postres.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp15){
        cerrar();
        imgPostres.style.display = "block";
        tmp15 = false;
    }else{
        imgPostres.style.display = "none";
        tmp15 = true;
    }
});


//Boton ir arriba

window.addEventListener('scroll', function(){
    let banner = document.getElementById('banner');
    let posicion = banner.getBoundingClientRect().top;
    const button_arriba = document.getElementById('button_arriba');
    console.log(posicion);

    if(posicion == 0){
        button_arriba.style.display = "none";
    }else{
        button_arriba.style.display = "block";
    }
});