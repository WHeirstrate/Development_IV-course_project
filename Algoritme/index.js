let array = [];

document.getElementById('inputForm').addEventListener('submit', (event) => {
    event.preventDefault();
    let number = document.getElementById('numberInput');
    array.push(Number(number.value))
    document.getElementById('inputForm').reset();
    updateNumbers();
});

function updateNumbers() {
    let htmlEl = document.getElementById('displayNumbers');
    htmlEl.innerText = array.join(', ');
}

document.getElementById('sortAndFind').addEventListener('click', () => {
    const missingNr = findMissing(array);
    console.log(array);
    document.getElementById('missingNr').innerText = missingNr;
})

//-----------------------------------------//
/* Find first missing number in the array,
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