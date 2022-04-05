const entradas = document.getElementById("entradas");
const imgEntradas = document.getElementById("imgEntradas")

var tmp1 = true;

function cerrar(){
    imgEntradas.style.display = "none";
    imgSushiBar.style.display = "none"
    imgPescados.style.display = "none"
    imgBebidas.style.display = "none"
    imgBebidas1.style.display = "none"
    imgPostres.style.display = "none"

    tmp1 = true;
    tmp2 = true;
    tmp3 = true;
    tmp4 = true;
    tmp5 = true;
    tmp6 = true;
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

//Sushi Bar

const sushiBar = document.getElementById("sushiBar");
const imgSushiBar = document.getElementById("imgSushiBar")

var tmp2 = true;

sushiBar.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp2){
        cerrar();
        imgSushiBar.style.display = "block";
        tmp2 = false;
    }else{
        imgSushiBar.style.display = "none";
        tmp2 = true;
    }
});

//Pescados

const pescados = document.getElementById("pescados");
const imgPescados  = document.getElementById("imgPescados")

var tmp3 = true;

pescados.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp3){
        cerrar();
        imgPescados.style.display = "block";
        tmp3 = false;
    }else{
        imgPescados.style.display = "none";
        tmp3 = true;
    }
});

//Bebidas

const bebidas = document.getElementById("bebidas1");
const imgBebidas  = document.getElementById("imgBebidas1")

var tmp4 = true;
bebidas.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp4){
        cerrar();
        imgBebidas.style.display = "block";
        tmp4 = false;
    }else{
        imgBebidas.style.display = "none";
        tmp4 = true;
    }
});

//Bebidas

const bebidas1 = document.getElementById("bebidas2");
const imgBebidas1  = document.getElementById("imgBebidas2")

var tmp5 = true;
bebidas1.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp5){
        cerrar();
        imgBebidas1.style.display = "block";
        tmp5 = false;
    }else{
        imgBebidas1.style.display = "none";
        tmp5 = true;
    }
});

//Postres

const postres = document.getElementById("postres");
const imgPostres = document.getElementById("imgPostres")

var tmp6 = true;
postres.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
    if(tmp6){
        cerrar();
        imgPostres.style.display = "block";
        tmp6 = false;
    }else{
        imgPostres.style.display = "none";
        tmp6 = true;
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