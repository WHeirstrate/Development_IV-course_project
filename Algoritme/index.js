//-----------------------------------------//
//------------ GLOBAL VARIABLE ------------//
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

// On button press, scramble a copy of the global array and display it
document.getElementById('scramble').addEventListener('click', (event) => {
    event.preventDefault();
    const scrambledArray = scrambleArray(array);
    document.getElementById('scrambledArray').innerText = scrambledArray.join(', ');
});

// On button press, sort a copy of the global array and display it
document.getElementById('sort').addEventListener('click', (event) => {
    event.preventDefault();
    const sortedArray = sortArray(array);
    document.getElementById('sortArray').innerHTML = sortedArray.join(', ');
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
 * Sort the array
 */

function sortArray(array) {
    return array.sort((a, b) => a - b);
}

/* 
 * Randomize the array
 */
function scrambleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

/*
 * Find first missing number in a copy of
 * the array, starting from the smallest
 * number.
 */
function findMissing(array) {
    let newArray = scrambleArray(array);
    console.log(newArray);
    newArray = sortArray(newArray);
    console.log(newArray);
    for (let i = 0; i <= newArray.length; i++) {
        if (newArray[i] !== newArray[i + 1] - 1 && newArray[i] !== newArray[i + 1]) {
            return newArray[i] + 1;
        }
    }
}