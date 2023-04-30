const btnOpen = document.querySelector('.open-btn')
const btnClose = document.querySelector('.modal__footer__btn')
const iconClose = document.querySelector('.bx.bx-x')
const modalContainer = document.querySelector('.modal-container')
const modal = document.querySelector('.modal')

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

