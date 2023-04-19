

document.addEventListener("DOMContentLoaded", function() {
    sortCardsArray(cards);
    createCardsGame();

    
})

function sortCardsArray(cards) {
    cards.sort(function(){return 0.5 - Math.random()});
}

function createCardsGame() {

    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        let image = document.createElement('img');
        image.setAttribute('card-id', i);
        image.src = 'assets/images/matryoshka-doll-souvenir-toy.png';
        image.alt = 'Colorful Russian Matryoshka';
        cards[i].appendChild(image);
        image.addEventListener('click', showCard)
    }

}

let firstCardId = -1;
let secondCardId = -1;

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

    if (secondCardId !== -1) {
        
        let firstElement = document.querySelector(`[card-id="${firstCardId}"]`);

        if (firstElement.src == this.src) {
            console.log('yes');
        } else {
            firstElement.src = 'assets/images/matryoshka-doll-souvenir-toy.png';
            this.src = 'assets/images/matryoshka-doll-souvenir-toy.png';
            firstElement.classList = "card-hide"; 
            this.classList = "card-hide";
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