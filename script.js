 
//tema escuro
function temaEscuro() {
    //cor de fundo do body
    document.body.style.backgroundColor = "#030c18"

    //cor do texto no topo
    document.getElementById("topo").style.color = "white"
    //cor do texto no section
    document.getElementById("prin").style.color = "white"

    //cor de fundo do section
    document.querySelector("section#prin").style.backgroundColor = "darkslategray"
    
    //faz com que o botão com imagem do sol aparceça
    document.getElementById("temaClaro").style.display = "inline-block"

    //faz com que o botão com imagem do sol desaparceça
    document.getElementById("temaEsc").style.display = "none"

    //muda a cor de fundo do topo
    document.getElementById("topo").style.background = "linear-gradient(#0c4547,#030c18"

    document.querySelector("footer").style.color = "white"

}

//tema claro
function temaClaro() {

    //cor de fundo do body
    document.body.style.backgroundColor = "#c9d0d1"
    
    //cor do titulo
    document.getElementById("topo").style.color = "black"

    //cor do texto
    document.getElementById("prin").style.color = "black"

    document.querySelector("section#prin").style.backgroundColor = "lavender"

    document.getElementById("temaEsc").style.display = "inline-block"

    document.getElementById("temaClaro").style.display = "none"

    document.getElementById("topo").style.background = "linear-gradient(#0c4547,#c9d0d1)"

    document.querySelector("footer").style.color = "black"
    
}


