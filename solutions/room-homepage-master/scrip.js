const nav = document.querySelector("#nav")
let abrir = document.querySelector("#abrir");
let cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
    let abrir = document.getElementById("abrir")
    abrir.style.display = "none";
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    let abrir = document.getElementById("abrir")
    abrir.style.display = "block"
})

const slider = document.getElementById('heroIMGM');
const sliderD = document.getElementById('heroIMGD')
const imagenesD = sliderD.getElementsByTagName('img')
const imagenes = slider.getElementsByTagName('img');
const text = document.getElementById('mainDiv2')
const textDiv = text.getElementsByTagName('div')
const botonBefore = document.getElementById('beforeIMG');
const botonAfter = document.getElementById('afterIMG');
let indiceActual = 0;

botonBefore.addEventListener('click', () => {
    if(indiceActual > 0)
    {
        indiceActual--;

    } else {
        indiceActual = imagenes.length - 1;
    }
    mostrarImagen();
})

botonAfter.addEventListener('click', () => {
    if(indiceActual < imagenes.length - 1)
    {
        indiceActual++;
       
    } else 
    {
        indiceActual = 0;
    }
    mostrarImagen();
})

function mostrarImagen()
{
    for (let i = 0; i < imagenes.length; i++)
    {
        if(i === indiceActual)
        {
            imagenes[i].style.transform = 'translateX(0)';
            textDiv[i].style.transform = 'translateX(0)';
            imagenesD[i].style.transform = 'translateX(0)'
        }else
        {
            imagenes[i].style.transform = 'translateX(-100%)';
            textDiv[i].style.transform = 'translateX(-100%)';
            imagenesD[i].style.transform = 'translateX(-100%)';
        }
    }
}

mostrarImagen();