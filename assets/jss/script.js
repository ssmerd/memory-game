
/** 
 * Global variables used in the program
 */
var firstCardId = -1;
var secondCardId = -1;
let elapsedSeconds = 0;
let timerInterval = null;
let noOfPairsFound = 0;

/**
 * Add the main DOMContentLoaded listener. Once the event is triggered, the game is created.
 */
document.addEventListener("DOMContentLoaded", function() {
    sortCardsArray(cards);
    createCardsGame();

    
})



/**
 * The main function createing the game board. It fills the borard with Matryoska images,
 * and register some event handlers.
 */
function createCardsGame() {

    let cards = document.getElementsByClassName('card');
    let startGameBtn = document.getElementById('start-game');
    let resetGameBtn = document.getElementById('reset-game');

    startGameBtn.addEventListener('click', startGame);


    for (let i = 0; i < cards.length; i++) {
        let image = document.createElement('img');
        image.setAttribute('card-id', i);
        image.src = 'assets/images/matryoshka-doll-souvenir-toy.png';
        image.alt = 'Colorful Russian Matryoshka';
        cards[i].appendChild(image);
    }
}

/**
 * Start game function. It start the game initially or after reset.
 */
function startGame() {

    console.log('start game...')

    let startGameBtn = document.getElementById('start-game');
    let resetGameBtn = document.getElementById('reset-game');
    let images = document.getElementsByTagName('img');
    let noOfMoves = document.getElementById('no-of-moves');
    let elapsedTime = document.getElementById('elapsed-time');

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', showCard);  
    }

    startGameBtn.removeEventListener('click', startGame);
    resetGameBtn.addEventListener('click', resetGame);

    noOfMoves.innerHTML = 0;
    elapsedTime.innerHTML = 0;

    firstCardId = -1;
    secondCardId = -1;
    noOfPairsFound = 0;
    elapsedSeconds = 0;

	const timerElement = document.getElementById("elapsed-time");

    console.log(timerInterval);

    if (timerInterval)
        clearInterval(timerInterval);

	timerInterval = setInterval(() => {

		elapsedSeconds++;

		timerElement.innerText = elapsedSeconds + " s";		
    }, 1000);

    console.log(timerInterval);
}

/**
 * The function reset the game. In order to play the game again, a user has to click the start button.
 */
function resetGame() {

    console.log('reset game...');

    let startGameBtn = document.getElementById('start-game');
    let resetGameBtn = document.getElementById('reset-game');
    let images = document.getElementsByTagName('img');
    

    for (let i = 0; i < images.length; i++) {
        images[i].removeEventListener('click', showCard);   
        images[i].src = 'assets/images/matryoshka-doll-souvenir-toy.png';
        images[i].alt = 'Colorful Russian Matryoshka';
    }

    startGameBtn.addEventListener('click', startGame);
    resetGameBtn.removeEventListener('click', resetGame);

    if (timerInterval)
         clearInterval(timerInterval);

    resetMoves();
}



/**
 * The function hides a card that was clicked twice.
 * @param {*} id  - card id
 */
function hideCard(id) {

    let firstElement = document.querySelector(`[card-id="${id}"]`);

    firstElement.src = 'assets/images/matryoshka-doll-souvenir-toy.png';

    // firstElement.classList = "card-hide"; 

}
/**
 * The function hides two clicked cards if they don't match
 * @param {*} id1 - id of the first card
 * @param {*} id2  - id of the second card
 */
function hideCards(id1, id2) {

    let firstElement = document.querySelector(`[card-id="${id1}"]`);
    let secondElement = document.querySelector(`[card-id="${id2}"]`);
 
    firstElement.src = 'assets/images/matryoshka-doll-souvenir-toy.png';
    secondElement.src = 'assets/images/matryoshka-doll-souvenir-toy.png';

    // firstElement.classList = "card-hide"; 
    // secondElement.classList = "card-hide";
}

/**
 * 
 * @returns This is the main function that shows the cards and check for a match.
 */
function showCard() {
    
    let cardId = this.getAttribute("card-id");

    this.src = cards[cardId].src;
    this.alt = cards[cardId].alt;
    // this.classList = "card-view";

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
            
            noOfPairsFound++;

            if (timerInterval && noOfPairsFound === 8)
                clearInterval(timerInterval);
            
            console.log('yes');
        } else {
            
            setTimeout(hideCards, 1000, firstCardId, secondCardId);
            
            console.log('no');
        }

        incrementMoves();

        firstCardId = -1;
        secondCardId = -1;
    } 

}

/**
 * The function mixes arrary.
 * @param {*} cards - Array of cards to play the game.
 */
 function sortCardsArray(cards) {
    cards.sort(function(){return 0.5 - Math.random()});
}


/**
 * The function increaments moves
 */
function incrementMoves() {
 
    let noOfMoves = document.getElementById('no-of-moves');
    let moves = parseInt(noOfMoves.innerHTML);
    noOfMoves.innerHTML = ++moves;
 		
}

function resetMoves() {
    let noOfMoves = document.getElementById('no-of-moves');
    noOfMoves.innerHTML = 0;

    let timerElement = document.getElementById("elapsed-time");
    timerElement.innerText = 0;
}
/**
 * The array with the images of the cards.
 */
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