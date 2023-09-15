let arr = [ 1, 5, 6, 8, 7,'s', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ];

function removeElement(array, item) {
    let index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

console.log(removeElement(arr, 's'));