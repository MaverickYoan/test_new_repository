const burgerButton = document.queryselector(".nav-toggler")
const navigation = document.queryselector(".nav")

burgerButton.addEventListenner("click", toggleNav)

function toggleNav() {
    burgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}