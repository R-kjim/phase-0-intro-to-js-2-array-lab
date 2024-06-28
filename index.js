// Write your solution here!
let cats=['Milo','Otis','Garfield']
function destructivelyAppendCat(name){
    return cats.push(name)
}
function destructivelyPrependCat(name){
    return cats.unshift(name)
}
//function that destructively removes the last element of an array
function destructivelyRemoveLastCat(){
    return cats.pop(cats.length-1)
}

//function that destructively removes the first element of an array
function destructivelyRemoveFirstCat(){
    return cats.shift()
}

//non destructive function that appends a new element to an array
function appendCat(name){
    return [...cats,name]
}

//function that undestructively prepends anew element in an array
function prependCat(name){
    return [name,...cats]
}

//function that removes the last element of an array and returns a new array without changing the original array
function removeLastCat(){
    return cats.slice(0,cats.length-1)
}

//function that removes the first element of an array and returns anarray without changing the original array
function removeFirstCat(){
    return cats.slice(1)
}