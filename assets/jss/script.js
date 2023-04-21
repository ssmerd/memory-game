

document.addEventListener("DOMContentLoaded", function() {
    sortCardsArray(cards);
    createCardsGame();

    
})

function sortCardsArray(cards) {
    cards.sort(function(){return 0.5 - Math.random()});
}

function createCardsGame() {

    let cards = document.getElementsByClassName('card');
    let startGameBtn = document.getElementById('start-game');
    
    console.log(startGameBtn);

    startGameBtn.addEventListener('click', startGame);

    for (let i = 0; i < cards.length; i++) {
        let image = document.createElement('img');
        image.setAttribute('card-id', i);
        image.src = 'assets/images/matryoshka-doll-souvenir-toy.png';
        image.alt = 'Colorful Russian Matryoshka';
        cards[i].appendChild(image);
    }
}

function startGame() {

    console.log('start game...')

    let images = document.getElementsByTagName('img');

    for (let i = 0; i < images.length; i++) {
        console.log(images[i]);
        images[i].addEventListener('click', showCard)
    }
}

var firstCardId = -1;
var secondCardId = -1;

function hideCard(id) {

    let firstElement = document.querySelector(`[card-id="${id}"]`);

    firstElement.src = 'assets/images/matryoshka-doll-souvenir-toy.png';

    firstElement.classList = "card-hide"; 

}

function hideCards(id1, id2) {

    let firstElement = document.querySelector(`[card-id="${id1}"]`);
    let secondElement = document.querySelector(`[card-id="${id2}"]`);
 
    firstElement.src = 'assets/images/matryoshka-doll-souvenir-toy.png';
    secondElement.src = 'assets/images/matryoshka-doll-souvenir-toy.png';

    firstElement.classList = "card-hide"; 
    secondElement.classList = "card-hide";
}

function showCard() {
    
    let cardId = this.getAttribute("card-id");

    this.src = cards[cardId].src;
    this.alt = cards[cardId].alt;
    this.classList = "card-view";

    if (firstCardId === -1) {
        firstCardId = cardId;
        console.log(firstCardId);
    } else {
        secondCardId = cardId;
        console.log(secondCardId);
    }

    if (firstCardId === secondCardId) {
        setTimeout(hideCard, 1000, firstCardId);
        firstCardId = -1;
        secondCardId = -1;
        return;
    }
        
    if (secondCardId !== -1) {
        
        let firstElement = document.querySelector(`[card-id="${firstCardId}"]`);

        if (firstElement.src == this.src) {
            firstElement.removeEventListener('click', showCard);
            this.removeEventListener('click', showCard);
            console.log('yes');
        } else {
            
            setTimeout(hideCards, 1000, firstCardId, secondCardId);
            
            console.log('no');
        }

        firstCardId = -1;
        secondCardId = -1;
    } 

}

const cards = [
    {
        src: 'assets/images/colorful-russian-doll-png-1.png',
        alt: 'Colorful Russian Matryoshka',
    },

    {
        src: 'assets/images/colorful-russian-doll-png-2.png',
        alt: 'Colorful Russian Matryoshka',
    },
    {
        src: 'assets/images/colorful-russian-doll-png-3.png',
        alt: 'Colorful Russian Matryoshka',
    },
    {
        src: 'assets/images/colorful-russian-doll-png-4.png',
        alt: 'Colorful Russian Matryoshka',
    },
    {
        src: 'assets/images/colorful-russian-doll-png-5.png',
        alt: 'Colorful Russian Matryoshka',
    },
    {
        src: 'assets/images/colorful-russian-doll-png-6.png',
        alt: 'Colorful Russian Matryoshka',
    },
    {
        src: 'assets/images/colorful-russian-doll-png-7.png',
        alt: 'Colorful Russian Matryoshka',
    },
    {
        src: 'assets/images/colorful-russian-doll-png-8.png',
        alt: 'Colorful Russian Matryoshka',
    },
    {
        src: 'assets/images/colorful-russian-doll-png-1.png',
        alt: 'Colorful Russian Matryoshka',
    },
    {
        src: 'assets/images/colorful-russian-doll-png-2.png',
        alt: 'Colorful Russian Matryoshka',
    },
    {
        src: 'assets/images/colorful-russian-doll-png-3.png',
        alt: 'Colorful Russian Matryoshka',
    },
    {
        src: 'assets/images/colorful-russian-doll-png-4.png',
        alt: 'Colorful Russian Matryoshka',
    },
    {
        src: 'assets/images/colorful-russian-doll-png-5.png',
        alt: 'Colorful Russian Matryoshka',
    },
    {
        src: 'assets/images/colorful-russian-doll-png-6.png',
        alt: 'Colorful Russian Matryoshka',
    },
    {
        src: 'assets/images/colorful-russian-doll-png-7.png',
        alt: 'Colorful Russian Matryoshka',
    },
    {
        src: 'assets/images/colorful-russian-doll-png-8.png',
        alt: 'Colorful Russian Matryoshka',
    }
]