//VARIÁVEIS
let altura
let largura
const body = document.querySelector('body')
let vidas = 1
let tempo = 10

let nivel = window.location.search
nivel = nivel.replace('?', '')

let criaMosquitoTempo = 1500;

if(nivel == "normal"){
    criaMosquitoTempo = 1500
}else if(nivel == "dificil"){
    criaMosquitoTempo = 1000
}else if (nivel == "detetizador"){
    criaMosquitoTempo = 750
}


//AJUSTE DE TAMANHO DE TELA
function ajustarTela(){
    altura = window.innerHeight
    largura = window.innerWidth
}
body.addEventListener('resize', ajustarTela)
ajustarTela()

document.querySelector('#tempo').innerHTML = tempo

let cronometro = setInterval(() => {
    
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else{
    document.querySelector('#tempo').innerHTML = tempo
    }
}, 1000);


//MOSQUITO
function criarMosquito(){

    //REMOVER ANTERIOR(CASO EXISTA)
        if(document.querySelector('#mosquito')){
            document.querySelector('#mosquito').remove()
            
            if(vidas > 3){
                
                window.location.href = 'game-over.html'
                
            }else{
            document.querySelector('#v' + vidas).src = './src/assets/img/coracao_vazio.png'
            vidas++
            }
        }


//POSIÇÕES ALEATORIAS
let posicaoX = Math.floor(Math.random() * largura) - 90
let posicaoY = Math.floor(Math.random() * altura) - 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
//CRIAR ELEMENTO HTML(mosquito)
let mosquito = document.createElement('img')
    mosquito.src = './src/assets/img/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    mosquito.addEventListener('click', function(){
        this.remove()
    })

document.body.appendChild(mosquito)

}




//TAMANHO DE MOSQUITO ALEATÓRIO
function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return 'mosquito1'
        
        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

//ALTERANDO LADO DO MOSQUITO
function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoA'
        
        case 1:
            return 'ladoB'
    }
}


 const criaMosca = setInterval(function(){
            criarMosquito()
        }, criaMosquitoTempo)