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
const questions = [

{
question:"Cuando el mundo comienza a romperse…",

answers:[

{
text:"💜 Aún intento encontrar algo hermoso entre los pedazos.",
type:"kuken"
},

{
text:"🤎 Busco refugio en quienes amo.",
type:"thato"
},

{
text:"💙 Transformo el dolor en arte.",
type:"muse"
},

{
text:"❤️ Lucho con intensidad hasta el final.",
type:"pyro"
},

{
text:"💚 Escucho aquello que mi corazón intenta decir.",
type:"symphony"
},

{
text:"🖤 Me pierdo en mis pensamientos bajo la lluvia.",
type:"nyxen"
},

{
text:"💛 Sigo creyendo que mañana puede sanar.",
type:"jin"
}

]
},

{
question:"¿Qué representa más tu alma?",

answers:[

{
text:"💜 Un amanecer lleno de posibilidades.",
type:"kuken"
},

{
text:"🤎 Un abrazo cálido en silencio.",
type:"thato"
},

{
text:"💙 Un cuaderno lleno de ideas y dibujos.",
type:"muse"
},

{
text:"❤️ Una llama imposible de apagar.",
type:"pyro"
},

{
text:"💚 Una melodía que entiende tus emociones.",
type:"symphony"
},

{
text:"🖤 La lluvia cayendo durante la noche.",
type:"nyxen"
},

{
text:"💛 Una estrella brillando incluso en la oscuridad.",
type:"jin"
}

]
},

{
question:"Si pudieras darle algo a Carmín…",

answers:[

{
text:"💜 Valor para volver a sonreír.",
type:"kuken"
},

{
text:"🤎 Protección cuando el mundo pese demasiado.",
type:"thato"
},

{
text:"💙 Inspiración para nunca abandonar el arte.",
type:"muse"
},

{
text:"❤️ Fuerza para perseguir sus sueños.",
type:"pyro"
},

{
text:"💚 Una canción que cure sus heridas.",
type:"symphony"
},

{
text:"🖤 Comprensión en sus momentos más oscuros.",
type:"nyxen"
},

{
text:"💛 Esperanza para seguir adelante.",
type:"jin"
}

]
},

{
question:"¿Qué frase se siente más cercana a ti?",

answers:[

{
text:"💜 Incluso los sueños rotos pueden volver a florecer.",
type:"kuken"
},

{
text:"🤎 No tienes que cargar el dolor sola.",
type:"thato"
},

{
text:"💙 El arte también puede salvar vidas.",
type:"muse"
},

{
text:"❤️ El corazón más intenso jamás deja de arder.",
type:"pyro"
},

{
text:"💚 Cada emoción tiene su propia melodía.",
type:"symphony"
},

{
text:"🖤 La tristeza también guarda sabiduría.",
type:"nyxen"
},

{
text:"💛 La esperanza siempre encuentra una forma de regresar.",
type:"jin"
}

]
}

];

let currentQuestion = 0;

let scores = {

kuken:0,
thato:0,
muse:0,
pyro:0,
symphony:0,
nyxen:0,
jin:0

};

const questionEl = document.getElementById("question");

const answersEl = document.querySelector(".answers");

function loadQuestion(){

const q = questions[currentQuestion];

questionEl.innerText = q.question;

answersEl.innerHTML = "";

q.answers.forEach(answer => {

const button = document.createElement("button");

button.innerText = answer.text;

button.onclick = () => selectAnswer(answer.type);

answersEl.appendChild(button);

});

}

function selectAnswer(type){

scores[type]++;

currentQuestion++;

if(currentQuestion < questions.length){

loadQuestion();

}else{

showResult();

}

}

function showResult(){

let winner = Object.keys(scores).reduce((a,b)=>
scores[a] > scores[b] ? a : b
);

document.querySelector(".question-box").style.display="none";

const resultBox = document.getElementById("result-box");

const resultTitle = document.getElementById("result-title");

const resultDescription = document.getElementById("result-description");

const resultImage = document.getElementById("result-image");

resultBox.classList.remove("hidden");

if(winner === "kuken"){

resultTitle.innerHTML =
"💜 Tu Latido es: Príncipe Kuken";

resultDescription.innerHTML =
"<em>Las partículas púrpuras de la euforia.</em><br><br>Representas la magia de creer en los sueños, la semilla de la esperanza en camino al despertar del alma.";

resultImage.src = "kuken-test.png";

}
else if(winner === "thato"){

resultTitle.innerHTML =
"🤎 Tu Latido es: Duque Thato";

resultDescription.innerHTML =
"<em>La resonancia de la identidad.</em><br><br>Representas la serenidad auténtica, la restauración del arte como hogar de pertenencia.";

resultImage.src = "thato-test.png";

}
else if(winner === "muse"){

resultTitle.innerHTML =
"💙 Tu Latido es: Minie Muse";

resultDescription.innerHTML =
"<em>La misión del espejo y el destino.</em><br><br>Representas la curiosidad innata, la osadía del artista para cruzar puertas prohibidas.";

resultImage.src = "muse-test.png";

}
else if(winner === "pyro"){

resultTitle.innerHTML =
"❤️ Tu Latido es: Sir Pyro";

resultDescription.innerHTML =
"<em>La llama de la resiliencia ante la adversidad.</em><br><br>Representas la protección ante la tormenta inminente y el valor de florecer en los tiempos difíciles.";

resultImage.src = "pyro-test.png";

}
else if(winner === "symphony"){

resultTitle.innerHTML =
"💚 Tu Latido es: Mr. Symphony";

resultDescription.innerHTML =
"<em>La disciplina de la verdad.</em><br><br>Representas el cambio de perspectiva, despojar el arte del capricho y validación externa, con fortaleza y honestidad.";

resultImage.src = "symphony-test.png";

}
else if(winner === "nyxen"){

resultTitle.innerHTML =
"🖤 Tu Latido es: Líder Nyxen";

resultDescription.innerHTML =
"<em>El detective de la vulnerabilidad.</em><br><br>Representas la estrategia del acompañamiento empático ante el dolor y la aceptación de la sombra.";

resultImage.src = "nyxen-test.png";

}
else if(winner === "jin"){

resultTitle.innerHTML =
"💛 Tu Latido es: Wonder Jin";

resultDescription.innerHTML =
"<em>El deseo y la eternidad del vuelo.</em><br><br>Representas la liberación definitiva, la consagración del deseo puro, el arte en su encuentro con el destino.";

resultImage.src = "jin-test.png";

}

}
function restartTest(){

currentQuestion = 0;

scores = {

kuken:0,
thato:0,
muse:0,
pyro:0,
symphony:0,
nyxen:0,
jin:0

};

document.querySelector(".question-box").style.display="block";

document.getElementById("result-box").classList.add("hidden");

loadQuestion();

window.scrollTo({

top:document.querySelector(".test-latido").offsetTop,
behavior:"smooth"

});

}
loadQuestion();

