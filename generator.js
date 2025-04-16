// generator array
function* generatorArray(){
    for (const index in this) {
        yield this[index]
    }
}
let arr = [3,2,5,6]
arr[Symbol.iterator]=generatorArray;
for (const element of arr) {
    console.log(element);
}