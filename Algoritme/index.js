let array = [12, 13, 14, 19, 22, 15];
//-----------------------------------------//
function findMissing(array) {
    array.sort((a, b) => a - b);
    for (let i = 0; i <= array.length; i++) {
        if (array[i] !== array[i + 1] - 1) {
            return array[i] + 1;
        }
    }
    return array;
}
//-----------------------------------------//
console.log(findMissing(array));