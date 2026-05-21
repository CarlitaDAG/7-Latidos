console.log("Bienvenida al universo de 7 Latidos ✨");
window.addEventListener("scroll", reveal);

function reveal(){

    let reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){

        let windowHeight = window.innerHeight;

        let revealTop = reveals[i].getBoundingClientRect().top;

        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add("active");
        }
    }
}

reveal();
function mostrarAmistad(imagen,nombre,frase){

    document.getElementById("amistad-img").src = imagen;

    document.getElementById("amistad-name").innerText = nombre;

    document.getElementById("amistad-frase").innerText = frase;
}
function mostrarCassette(imagen,nombre,latido){

    document.getElementById("cassette-img").src = imagen;

    document.getElementById("cassette-name").innerText = nombre;

    document.getElementById("cassette-latido").innerText = latido;
}
