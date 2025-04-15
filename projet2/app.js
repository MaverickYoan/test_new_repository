
const btns = document.querySelectorAll('button')

const cards = document.querySelectorAll('.card')

console.log(btns, cards);

const cardsFilter = (e) => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active')

    cards.forEach(card => {
        card.classList.add('filtre')

        if (card.dataset.name === e.target.dataset.name
            || e.target.dataset.name === "tous") { card.classList.remove('filtre') }
    })
}

btns.forEach(button => button.addEventListener('click', cardsFilter))