//Question 1) -- forEach()
/* callback = (n) => {
    return n + 1;
}
let numsList = [1, 3, 21, 19, 8, 22]
function myEach(nums, callback){
    for (let i = 0; i < numsList.length; i++){
        console.log(callback(nums[i]))
    }
}
myEach(numsList, callback) */

//Question 2) -- map()

//Question 3) -- filter
let nameList = ["Jesus", "Jake", "Bobby", "Nichole", "Jessica"]

function myFilter (list, callback){
    callback(list, "a")
}

hasLetter = (list, n) => {
    let tempArray = []
    for (let i = 0; i < list.length; i++){
        let currentName = list[i]
        for(let j = 0; j < currentName.length; j++){
            if (currentName[j] == n){
                tempArray.push(currentName);
            }
        }
    }
    console.log("My Filter:", tempArray)
}

myFilter(nameList, hasLetter)

// Question 4) Some()

namesHaveMoreThan3Letters = (temp) => {
    for (let i = 0; i < temp.length; i++){
        if(temp[i].length >= 3) {
            return true
        }
        else {
            return false
        }
        }}

function mySome(temp, callback){
    let bool = callback(temp)
    console.log("MySome checks if some letters are more than 3:", bool)
}

mySome(nameList, namesHaveMoreThan3Letters)

//every()
namesLessThan3Letters = (temp) => {
    let allIsTrue = true
    for (let i = 0; i < temp.length; i++){
        if(!temp[i].length < 3) {
            allIsTrue = false
        }    
    }
    return allIsTrue
}

function myEvery(temp, callback){
    let bool = callback(temp)
    console.log("MyEvery checks if all letters less than 3:", bool)
}

myEvery(nameList, namesLessThan3Letters)

// Had trouble with reduce()

// Includes ()
function myIncludes (list, callback){
    let doesInclude = callback(list, "Jake")
    console.log("myIncludes sees is Jake is in there:", doesInclude)
}

check = (list, n) => {
    for (let i = 0; i < list.length; i++){
            if (list[i] == n){
                return true
        }
    }
    return false
}

myIncludes(nameList, check)

//let doesInclude = myIncludes(nameList, includes)
//console.log("MyIncludes checks if 'O' is there", doesInclude)

// myIndexOf

function myIndexOf (list, callback){
    let insideIndex = callback(list, 3)
    console.log("myIndexOf checks what's inside index 3:", insideIndex)
}

getIndexOf = (list, n) => {
    if (list[n] != undefined){
        return list[n]
    }
    return -1
}

myIndexOf(nameList, getIndexOf)

//push()

function myPush (list, callback){
    console.log("myPush adding 'Tony' to the array", )
}

addToArray = (list, n) => {
}

myPush(nameList, addToArray)

//LastIndexOf()

function myLIO (list, callback){
    console.log("Using myLastIndexOf on names array:", callback(list))
}

getLastIndex = (list) => {
    return list.length - 1  
}

myLIO(nameList, getLastIndex)