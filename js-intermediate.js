// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

var fibLength = 8                             //Length of sequence to return. Should be 2 less than desired
const getFib = (fibLength) => {
  var fibArray = [0,1]
  var firstPosition = 0
  var secondPosition = 1
  var nextNum

  while (fibLength >= 0){
    nextNum = fibArray[firstPosition] + fibArray[secondPosition]
    fibArray.push(nextNum)
    fibLength --
    firstPosition++
    secondPosition++
  }
  fibArray.splice(0,1)                      //Take out the first Zero
  return fibArray
}

console.log(getFib(fibLength))


// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

const oddChecker = (inputArray) => {
  let oddArray = []
  for (let i=0; i<=inputArray.length; i++){
    if (typeof inputArray[i] === 'number' && inputArray[i] % 2 !== 0){
      oddArray.push(inputArray[i])
    }
  }
  return oddArray
}

console.log(oddChecker(fullArr1))
console.log(oddChecker(fullArr2))

// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes in an array and returns an array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]

const reverseArray = (arrayInput) => {
  let i = arrayInput.length -1
  let newArray = []
  while (i >=0){
    newArray.push(arrayInput[i])
    i --
  }
  return newArray
}
console.log(reverseArray(originalArray1))
console.log(reverseArray(originalArray2))

// 5. Write the code that would make this test pass.

describe("multTwo", () => {
    test ("returns an array with all the numbers multiplied by two", () => {
        expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
        expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
        expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
    })
})

const multTwo = (inputArray) => {
  let outputArray = []
  for (let i = 0 ; i <= inputArray.length-1 ; i++){
    outputArray[i] = inputArray[i] * 2
  }
  return outputArray
}


// 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3

const letterCounter = (inputString) => {
var lCount = 0
  for (let i=0 ; i<inputString.length ; i++){
    if (inputString.charAt(i) === "L" || inputString.charAt(i) === "l"){
      lCount ++
    }
  }
  return lCount
}
console.log(letterCounter(ourString))


// 7. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const middleLetter = (stringInput) => {
  if (stringInput.length % 2 === 1){
    return stringInput.charAt(Math.floor(stringInput.length/2))
  }
  else {
    return stringInput.charAt(stringInput.length/2 - 1) + stringInput.charAt(stringInput.length/2)
  }
}
console.log(middleLetter(middleLetters1))
console.log(middleLetter(middleLetters2))


// 8. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere{
  constructor(radius){
    this.radius = radius
  }

  findArea(){
    return (4 * Math.PI * Math.pow(this.radius , 2))
  }
}

var sphere1 = new Sphere(3)
var sphere2 = new Sphere(14)
var sphere3 = new Sphere(34)
console.log(sphere1.findArea())
console.log(sphere2.findArea())
console.log(sphere3.findArea())


// 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}

console.log(myCar.specs.doors , myCar.specs.transmission)

// 10. STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const addSum = (inputNumbers) => {
  let outputArray = []
  let runningTotal = 0
  for (let i = 0 ; i <= inputNumbers.length - 1 ; i++){
    runningTotal += inputNumbers[i]
    outputArray.push(runningTotal)
  }
  return outputArray
}
console.log(addSum(numbersToAdd1))
console.log(addSum(numbersToAdd2))
console.log(addSum(numbersToAdd3))