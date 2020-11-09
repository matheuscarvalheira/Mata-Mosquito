
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

/*Extrair o valor do nível selecionado*/

var nivel = window.location.search
nivel = nivel.replace('?', '') //tira a '?'

if(nivel === 'normal'){
    criaMosquitoTempo = 1500
} else if(nivel  === 'dificil' ){
    criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris'){
    criaMosquitoTempo = 750
}

/*Encontrar a altura e a largura da página*/

function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth

     console.log(largura,altura)
}

ajustaTamanhoPalcoJogo()


var cronometro = setInterval(function(){

    //fazendo essa logica ser demonstrada dentro do html
    // vai pro html bem no meio das tags
    tempo-=1

    if(tempo < 0){
        clearInterval(cronometro) //limpa essa função e faz ela parar
        clearInterval(criaMosquito) // para de criar mosquitos
        window.location.href='vitoria.html'

    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    



    

}, 1000)

function posicaoRandomica(){

    //remover o mosquito anterior caso exista

    if(document.getElementById('mosquito')){
    //pegar o mosquito pra tirar ele e depois excluir
    //remover apenas se existir um anterior
        document.getElementById('mosquito').remove()

     //selecionando os corações
     if(vidas > 3){
        window.location.href = 'fim_de_jogo.html'
     }else{

        document.getElementById('v' + vidas ).src="imagens/coracao_vazio.png"   
        vidas++
        }
     }
        


    var posicaoX= Math.floor(Math.random() * largura) - 90
    var posicaoY= Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0: posicaoX
    posicaoY = posicaoY < 0 ? 0: posicaoY

    console.log(posicaoX,posicaoY)

    //criar o elemento HTML
    var mosquito = document.createElement('img')

    mosquito.src = "imagens/mosquito.png"
    mosquito.className = tamanhoAleatorio() + ' ' +  ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito' //identificação única
    mosquito.onclick= function(){
        this.remove() //remove o mosquito
    }

    document.body.appendChild(mosquito)

     
    

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
        
    }
}

