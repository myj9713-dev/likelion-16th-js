const wrap = document.querySelector('.wrap')
// console.log(wrap)
const modalOpenButton = document.querySelector('.modal-open-button')
// console.log(modalOpenButton)

const body = document.body
modalOpenButton.addEventListener('click', () => {
  if (body.classList.contains('modal-is-open')) {
    body.classList.remove('modal-is-open')
  } else {
    body.classList.add('modal-is-open')
  }
})

const isOpen = body.querySelector('.is-open')
// console.log(isOpen)
const modalCloseButton = body.querySelector('.modal-close-button')
// console.log(modalCloseButton)

modalCloseButton.addEventListener('click', () => {
  body.classList.remove('modal-is-open')
})