const words = 'elephant sunshine symphony glacier bubble universe harvest dragon carnival zephyr lighthouse serenade tornado firefly wanderlust avalanche moonlight cascade pegasus enigma\n'.split(' ');
const wordsCount = words.length;
const gameTime = 30 * 1000;
window.timer = null;
window.gameStart = null;


function randomWord() {
    const randomIndex = Math.floor(Math.random() * wordsCount);
    return words[randomIndex]
}

function addClass(el, name) {
    if (!el.className.includes(name)) {
        el.className += ' ' + name;
    }
}

function removeClass(el, name) {
    el.className = el.className.replace(name, '');
}

function formatWord(word) {
    let formattedWord = '';
    for (let letter of word) {
        formattedWord += `<span class="letter">${letter}</span>`;
    }
    return `<div class="word">${formattedWord}</div>`;
}


function newGame() {
    document.getElementById('words').innerHTML = '';
    for (let i = 0; i < 200; i++) {
        document.getElementById("words").innerHTML += formatWord(randomWord());
    }
    addClass(document.querySelector('.word'), 'current');
    addClass(document.querySelector('.letter'), 'current');
    clearInterval(timer);
    timer = null;
}

function getWpm() {
    const words = [...document.querySelectorAll('.word')];
    const lastTypedWord = document.querySelector('.word.current');
    const lastTypedWordIndex = words.indexOf(lastTypedWord);
    const typedWords = words.slice(0, lastTypedWordIndex);
    const correctWords = typedWords.filter(word => {
        const letters = [...word.children];
        const redLetters = letters.filter(letter => letter.className.includes('incorrect'));
        const greenLetters = letters.filter(letter => letter.className.includes('correct'));
        return redLetters.length === 0 && greenLetters.length === letters.length;
    });
    return correctWords.length / gameTime * 60000;
}

function gameOver() {
    clearInterval(timer);
    addClass(document.getElementById('game'), 'over')
    document.getElementById('info').innerHTML = `Words per minute: ${getWpm()}`

}



document.addEventListener('keyup', ev => {
    const key = ev.key;
    const currentLetter = document.querySelector('.letter.current');
    const expected = currentLetter?.innerHTML || ' ';
    const isLetter = key.length === 1 && key !== ' ';
    const isSpace = key === ' ';
    const currentWord = document.querySelector('.word.current');
    const isBackspace = key === 'Backspace';
    const isFirstLetter = currentLetter === currentWord.firstChild;

    if (document.querySelector('#game.over')) {
        return;
    }


    if(!window.timer && isLetter) {
        window.timer = setInterval(() => {
          if(!window.gameStart) {
              window.gameStart = (new Date()).getTime();
          }
          const currentTime = (new Date()).getTime();
          const msPassed = currentTime - window.gameStart;
          const sPassed = Math.round(msPassed / 1000);
          const sLeft = (gameTime / 1000) - sPassed;
          if(sLeft === 0 || sLeft < 0) {
              gameOver();
              return;
          }

          document.getElementById('info').innerHTML = sLeft + ' ' + 'seconds';
        }, 1000);
    }


    if (isLetter) {
        if (currentLetter) {
            addClass(currentLetter, key === expected ? 'correct' : 'incorrect');
            if (currentLetter.nextSibling) {
                addClass(currentLetter.nextSibling, 'current');
            } else {
                removeClass(currentWord, 'current');
                const nextWord = currentWord.nextSibling;
                if (nextWord) {
                    addClass(nextWord, 'current');
                    addClass(nextWord.firstChild, 'current');
                }
            }
            removeClass(currentLetter, 'current');
        } else {
            const incorrectLetter = document.createElement('span')
            incorrectLetter.innerHTML = key;
            incorrectLetter.className = 'letter incorrect extra';
            currentWord.appendChild(incorrectLetter);
        }
    }

    if (isSpace) {
        if (expected !== ' ') {
            const lettersToInvalidate = [...document.querySelectorAll('.word.current .letter:not(correct)')];
            lettersToInvalidate.forEach(letter => {
                addClass(letter, 'incorrect');
            })
        }
        removeClass(currentWord, 'current');
        addClass(currentWord.nextSibling, 'current');
        if (currentLetter) {
            removeClass(currentLetter, 'current');
        }
        addClass(currentWord.nextSibling.firstChild, 'current');
    }

    if (isBackspace) {
        if(currentLetter && isFirstLetter) {
            removeClass(currentWord, 'current');
            addClass(currentWord.previousSibling, 'current');
            removeClass(currentLetter, 'current');
            addClass(currentWord.previousSibling.lastChild, 'current');
            removeClass(currentWord.previousSibling.lastChild, 'incorrect');
            removeClass(currentWord.previousSibling.lastChild, 'correct');
        }
        if(currentLetter && !isFirstLetter) {
            removeClass(currentLetter, 'current');
            addClass(currentLetter.previousSibling, 'current');
            removeClass(currentLetter.previousSibling, 'incorrect');
            removeClass(currentLetter.previousSibling, 'correct');

        }
        if(!currentLetter) {
            addClass(currentWord.lastChild, 'current');
            removeClass(currentLetter.lastChild, 'incorrect');
            removeClass(currentLetter.lastChild, 'correct');
        }
    }

    if (currentWord.getBoundingClientRect().top > 220) {
        const words = document.getElementById('words');
        const margin = parseInt(words.style.marginTop || '0px');
        words.style.marginTop = (margin - 35) + 'px';

    }



    const nextLetter = document.querySelector('.letter.current');
    const cursor = document.getElementById("cursor");
    const nextWord = document.querySelector('.word.current');
    if (nextLetter) {
        cursor.style.top = nextLetter.getBoundingClientRect().top + 'px';
        cursor.style.left = nextLetter.getBoundingClientRect().left + 'px';
    } else {
        cursor.style.top = nextWord.getBoundingClientRect().top + 'px';
        cursor.style.left = nextWord.getBoundingClientRect().left + 'px';
    }

});

function btn() {
    location.reload();
}

newGame();


let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector('.caps_lock_key');
let toggle_circle = document.querySelector('.toggle_circle');
let night_mode = document.querySelector('.night_mode');
let body = document.querySelector('body');
let text_input = document.querySelector('.text');
let change_color = document.querySelector('.change_light_color');
let colors_input = document.querySelector('.colors_input');
let keyboard_lights = document.querySelector('.keyboard_lights');
let keyboard_wrapp = document.querySelector('.keyboard_wrapp');

for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active')
        }
        if(e.code == 'Space') {
            spaceKey.classList.add('active')
        }
        if(e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
        }
        if(e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
        }
        if(e.code == 'CapsLock') {
            caps_lock_key.classList.toggle('active');
        }
    }
})

window.addEventListener('keyup', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        if(e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if(e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
            shift_right.classList.remove('remove')
        }
        if(e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
            shift_left.classList.remove('remove')
        }
        setTimeout(()=> {
            keys[i].classList.remove('remove')
        },200)
    }
})


