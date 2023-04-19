function avaliacao(){
    const stars = document.querySelectorAll('.star-icon');

    document.addEventListener('click', function(e){
        var classStar = e.target.classList;
        if(!classStar.contains('ativo')){
            stars.forEach(function(star){
                star.classList.remove('ativo')
            });
            classStar.add('ativo');
        }
    });
}

// avaliacao();


function  layoutDesktop(){
    //muda a ordem dos elementos nas telas maiores
    const linhaTexto = document.querySelector('.caracter');
    const linhaBotoes = document.querySelector('.botoes');
    const elementoPai = document.querySelector('.separa');

    elementoPai.insertBefore(linhaTexto, linhaBotoes);

}

function layoutMobile(){
        //muda a ordem dos elementos nas telas menores
        const linhaTexto = document.querySelector('.caracter');
        const divisao1 = document.querySelector('.separa');
        const elementoPai = document.querySelector('#descricao');

        elementoPai.insertBefore(linhaTexto, divisao1);

}


function tamanhoTela(){
    //verifica qual o tamanho inicial da tela para alterar o layout ou não, se for igual ou maior que 801 altera para o layout desktop senão, não será necessário alterar pois ficará já no modo mobile, visto que esse é o HTML padrão.
    if(window.innerWidth >= 801){
        layoutDesktop();
    }
}

tamanhoTela();

//window.onresize é ativado sempre que o tamanho da tela é alterada
window.onresize = () =>{
    if(window.innerWidth >= 801){
        layoutDesktop();
    }
    else{
        layoutMobile();
    }
};