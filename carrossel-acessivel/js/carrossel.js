const artigos = document.querySelectorAll('.artigo');
artigos.forEach(artigo => artigo.classList.add('escondeArtigo'));
artigos[0].classList.remove('escondeArtigo');

const botoes = document.querySelectorAll('.botao__link');

let artigoAtual = document.createElement('span');
artigoAtual.classList.add('escondeIndicador');
artigoAtual.textContent = 'artigo atual';

botoes.forEach(botao => {

    botao.addEventListener('click', () => {

        artigos.forEach(artigo => {

            artigo.classList.add('escondeArtigo');

            if(botao.getAttribute('data-botao') === artigo.getAttribute('data-artigo')) artigo.classList.remove('escondeArtigo'); 
        });

        botao.append(artigoAtual);

        botoes.forEach(botao => botao.classList.remove('botao__ativo'));

        botao.classList.add('botao__ativo');
    });
});
