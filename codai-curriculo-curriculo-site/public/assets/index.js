

function clicarprojetos(){
    console.log("clicou no botao projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
    texto3.style.display = "none";
}
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function clicarsobre(){
    console.log("clicou em quem sou?");
    texto2.style.display = "none";
    texto1.style.display = "block";
    }
var texto3 = document.getElementById("texto-3");

function clicardeveloper(){
    console.log("clicou pq developer");
    texto3.style.display = "block";
    texto2.style.display = "none";
texto1.style.display = "none";
}
