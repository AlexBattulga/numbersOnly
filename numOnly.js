var arr = [1, "apple", "orange", -5, 30, 0.5];
function numOnly(array){
    var newArray=[];
    for (var i = 0; i < array.length; i++) {
        if(typeof array[i] === "number"){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
// numOnly(arr);
// var x = numOnly(arr);
// console.log(x);
function removeNum(array){
    var removed = [];
    for (var i = 0; i < array.length; i++) {
        if(typeof array[i] === "string"){
            removed.push(array[i]);
        }
    }
    return removed;
}
removeNum(arr);
var y = removeNum(arr);
console.log("Numbers are removed:",y);
