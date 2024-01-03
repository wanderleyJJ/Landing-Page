var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var SetaDireita = window.document.getElementById("SetaDireita")
var SetaEesquerda = window.document.getElementById("SetaEsquerda")
 

function RolarParaDireita() {
    leonardo.style = "display:none"
    samanta.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEesquerda.style = "display:flex; margin-top:100px"

}
function RolarParaEsquerda() {
    leonardo.style = "display:flex"
    samanta.style = "display:none"
    SetaDireita.style = "display:flex"
    SetaEesquerda.style = "display:none"

}