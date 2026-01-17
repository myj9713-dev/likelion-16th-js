const siteContainer = document.querySelector('.site-container')
// console.log(siteContainer)
const siteContainerButton = document.querySelector('.button')
// console.log(siteContainerButton)


const body = document.body
// siteContainerButton.addEventListener('click', () => {
// if (body.classList.contains('offsite-is-open')) {
//   body.classList.remove('offsite-is-open')
// } else {
//   body.classList.add('offsite-is-open')
// }
// })

siteContainerButton.addEventListener('click', () => {
  body.classList.toggle('offsite-is-open')
})