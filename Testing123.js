function number (array){
    let result = [];
    if (array.length == 0) {
        return [];
    }
    else
    {
        for (let index = 0; index < array.length; index ++){
            result.push (index + 1 + ':' + array[index]);
        }
    }
    return result;


}
console.log(number(["a", "b", "c"]))

