const btn = document.querySelector('.phone')
const content = document.querySelector('.call')

btn.addEventListener('click', function () {
    content.classList.toggle('no-phone')
})