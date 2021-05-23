//-----------------------------------------//
//------------ GLOBAL VARIABLES -----------//
//-----------------------------------------//

let array = [];

//-----------------------------------------//
//------------------- DOM -----------------//
//-----------------------------------------//

// Take input from form, add to array and call function to display new array
document.getElementById('inputForm').addEventListener('submit', (event) => {
    event.preventDefault();
    let number = document.getElementById('numberInput');
    array.push(Number(number.value))
    document.getElementById('inputForm').reset();
    updateNumbers();
});

// Display the global array on screen
function updateNumbers() {
    let htmlEl = document.getElementById('displayNumbers');
    htmlEl.innerText = array.join(', ');
}
// On button press, scramble the global array and display it
document.getElementById('scramble').addEventListener('click', (event) => {
    event.preventDefault();
    const scrambledArray = scrambleArray(array);
    document.getElementById('scrambledArray').innerText = scrambledArray.join(', ');
});
// On button press, call the algorithm to find - to then display - the missing number
document.getElementById('sortAndFind').addEventListener('click', () => {
    const missingNr = findMissing(array);
    document.getElementById('missingNr').innerText = missingNr;
})

//-----------------------------------------//
//---------------- ALGORITHM --------------//
//-----------------------------------------//

/* 
 * Randomize the array
 */
function scrambleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

/*
 * Find first missing number in the array,
 * starting from the smallest number.
 */
function findMissing(array) {
    array.sort((a, b) => a - b);
    console.log(array);
    for (let i = 0; i <= array.length; i++) {
        if (array[i] !== array[i + 1] - 1 && array[i] !== array[i + 1]) {
            return array[i] + 1;
        }
    }
    return array;
}
//-----------------------------------------//