
var visitante = 20000;

//se visitante = 200000000000000000000000 ganhar o prêmio
if(visitante === 20000){
    alert("Parabéns Miguel, você ganhou 50 mil reais!");
}else{
    alert("Perdeu haha!");
}
/*comentário*/
//obtém o componente do menu do celular(icone)
var celular = document.querySelector('.celular');
//obtém lista
var listaMenu = document.querySelector('.menu ul');

//evento de click no menu 
celular.addEventListener('click', function(){
    listaMenu.classList.toggle('mostraMenu');
});




