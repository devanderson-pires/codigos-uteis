const abreModal = document.querySelector('#abreModal'),
fechaModal = document.querySelector('.fechaModal'),
modal = document.querySelector('.modal');

abreModal.addEventListener('click', () => modal.classList.add('modal--aberto'));

function fechandoModal() {

    modal.classList.remove('modal--aberto');
    abreModal.focus();
}

fechaModal.addEventListener('click', () => fechandoModal());

// fecha o modal com esc
document.addEventListener('keyup', e => {

    if(e.keyCode == 27) fechandoModal();
});

// fecha o modal clicando fora
document.addEventListener('click', e => {

    if(e.target == modal) fechandoModal();
});
