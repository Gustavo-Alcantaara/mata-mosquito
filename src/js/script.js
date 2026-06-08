//VARIÁVEIS
let altura
let largura
const body = document.querySelector('body')
let vidas = 1

//AJUSTE DE TAMANHO DE TELA
function ajustarTela(){
    altura = window.innerHeight
    largura = window.innerWidth
}
body.addEventListener('resize', ajustarTela)
ajustarTela()

//MOSQUITO
function criarMosquito(){

    //REMOVER ANTERIOR(CASO EXISTA)
        if(document.querySelector('#mosquito')){
            document.querySelector('#mosquito').remove()
            
            if(vidas > 3){
                alert("Game over")
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


 setInterval(function(){
            criarMosquito()
        }, 1000)