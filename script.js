
// 
// 01. Event listener for 'push button'
// 02. Display the Player's selection, the Computer's selection and the result
// 03. Incremenet number of wins up to 5 rounds and display final winner


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Initialise the scores and round number
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// const playerWinsDiv=document.querySelector('.user-score');
// playerWinsDiv.textContent = number_of_player_win;



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Press button event listener
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const btns = Array.from(document.querySelectorAll('button'));
// console.log(btns);

// btns.forEach(btn => btn.addEventListener("click", playRound));


const container = document.querySelector('.container-squares');

let nb_squares = 16 * 16;
const squares = [];

for (let i = 0; i < nb_squares; i++) {

    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent = i.toString();

    // container.append(square);
    container.appendChild(square);

}



let test = document.querySelectorAll(".square");

test.forEach((squar) => {
    // This handler will be executed only once when the cursor
    // moves over a square
    squar.addEventListener("mouseover", function( event ) {
        event.target.style.color = "orange";
    
        // reset the color after a short delay
        setTimeout(function() {
        event.target.style.color = "";
        }, 500);
    }, false);
    })










