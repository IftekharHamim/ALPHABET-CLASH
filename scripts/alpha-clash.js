// function play(){
    //stpe-1 hide the home screen. to hide the screen add the class hidden to the home section.

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
    // console.log(homeSection.classList);
    //step-2 show the playground
//     const playgroundSection = document.getElementById('play-ground');{
//         playgroundSection.classList.remove('hidden');
        // console.log(playgroundSection.classList);

//     }
// }

function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet',alphabet);

    //set randomly generated alphabet to the screen (show it)
    const currentALphabet = document.getElementById('current-alphabet');
    currentALphabet.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}