let menuNavElementBurger = document.querySelector(".menuNavElementBurger")
let phoneNavMeta = document.querySelector(".phoneNavMeta")
let burgPart1 = document.querySelector('.burgPart1')
let burgPart2 = document.querySelector('.burgPart2')
let burgPart3 = document.querySelector('.burgPart3')
menuNavElementBurger.onclick = function () {
    phoneNavMeta.classList.toggle('phoneNavMeta2')
    burgPart1.classList.toggle('burgPart12')
    burgPart2.classList.toggle('burgPart22')
    burgPart3.classList.toggle('burgPart33')
    document.body.classList.toggle('body2')
}