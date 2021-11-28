// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Event listener
// for the button being clicked
// in which case: call newSnake function
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const btn = document.querySelector('button');
console.log(btn);

btn.addEventListener("click", newSnake);



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// New Snake function 
// (ie restart with a clean board)
// - ask the number of squares per side for the new board
// - create and display the new board
// - change the squares background color when mouse hovering over
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function newSnake() {

    const container = document.querySelector('.container-squares');

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // Remove all squares in order to clear any snake
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // Ask for the number of square per side
    // - Calculate the size of each square (in pix)
    // - Calculate the total number of squares to be 
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    let nb_squares_per_side = prompt("Please enter the number of squares per side", 16);

    side_px = (640 / nb_squares_per_side);
    console.log(side_px);

    let nb_squares = nb_squares_per_side * nb_squares_per_side;
    console.log(nb_squares);    

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // Create each square as an HTML 'div' element
    // of class 'square'
    // add the square dimensions as 'min-width' and 'min-height' 
    // and add it inside the container div 
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    for (let i = 0; i < nb_squares; i++) {
    
        const square = document.createElement('div');
        square.classList.add('square');

        square.style.cssText = "min-width: " + side_px.toString() + "px; min-height: " +  side_px.toString() + "px;";
    
        container.appendChild(square);
    }

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // Event listener 
    // for mouse over any square
    // change the background color of that square 
    // 
    // can make the changed color remain for only a limited amount of time
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    let square_touched = document.querySelectorAll(".square");

    square_touched.forEach((squar) => {
        // This handler will be executed only once when the cursor
        // moves over a square
        squar.addEventListener("mouseover", function( event ) {
            // event.target.style.color = "orange";
            event.target.style.background = "yellow";
            console.log(event);

            // reset the color after a short delay
            // setTimeout(function() {
            // event.target.style.color = "";
            // }, 500);
        }, false);
    });

}

