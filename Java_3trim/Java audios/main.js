function tocaSom(idElemetoAudio){
    document.querySelector(idElemetoAudio).play();
}
const listadeteclas=document.querySelectorA11('.tecla');
let contador=0;
while(contador <listadeteclas.length){
    const efeito= listadeteclas[contador].classList[1];
    const idAudio="#som_"+efeito;
    listadeteclas[contador].onclick=function(){
        tocaSom(idAudio);
    }
    contador=contador +1 ;
    console.log(contador);
}
WebTransportBidirectionalStream.onkeydown=function(){
    tecla.add('ativa')
}
