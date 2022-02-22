//#region --- Arrays Part 1

// 1. create an array containing everything a car needs with at least 10 elements.
const car = ["frame", "wheels", "engine", "driver's seat", "doors", "windows", "fuel", "locks", "radio", "lights"]

// 2. add a person to the start of the array.
car.unshift("person")

// 3. remove the person, and add them on top of the driver's seat (the index above the index of the driver's seat).
car.splice(0, 1)
car.splice(3, 0, "person")

// 4. remove the element in position 7.
car.splice(7, 1)

// 5. add a crow at the end of the array.
car.push("crow")

// 6. remove it again.
car.pop()

// console.log(car)

//#endregion
//#region --- Arrays Part 2

// set y to equal Euler's number
let y = 2.71828

// set string1 to "this is Euler's number"
// set string2 to "and this is pi"
let string1 = "this is Euler's number"
let string2 = "and this is pi"

// let x = pi
// console.log(x)
let x = Math.PI
// console.log(x)

// get the number of Pi to the fifth decimal.
x = x.toFixed(5)

// set Euler 's number to only contain 4 numbers.
y = y.toFixed(3)

// use the result of the last two tasks and multiply them together using a function.
function multiply() {
    return x * y
}

// concatenate string 1 and 2.
let string3 = string1.concat(" ", string2)

// console.log(string3)

// write a function that puts the numbers in their right position in the new string.
function sentence() {
    let new1 = string1.replace("this", y)
    let new2 = string2.replace("this", x)
    let new3 = new1 + " " + new2
    console.log(new3)
}

// console.log(sentence())

// add a string that explains that the numbers have been multiplied and insert the number.
let sum = "The numbers have been multiplied: " + x * y
console.log(sum)

//#endregion