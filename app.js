let btnOpen = document.querySelector('.open-btn')
let btnClose = document.querySelector('.modal__footer__btn')
let iconClose = document.querySelector('.bx.bx-x')
let modalContainer = document.querySelector('.modal-container')
let modal = document.querySelector('.modal')

function openModal (){
    modalContainer.classList.remove('hide')
}

function closeModal (){
    modalContainer.classList.add('hide')

}

btnOpen.addEventListener('click', openModal)
btnClose.addEventListener('click', closeModal)
iconClose.addEventListener('click', closeModal)
modalContainer.addEventListener('click', closeModal)
modal.addEventListener('click', function(e){
    e.stopPropagation()
})

