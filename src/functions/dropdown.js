const dropDown = document.getElementById("dropdown")
let countAdults = 0
let countChildren = 0
let countBabies = 0

// decrement number
const minusAdults = document.getElementById("minus-adults").onclick = function() {
  if (countAdults > 0) {
    countAdults--
    adultsCounter.innerText = countAdults
  }
}
const minusChildren = document.getElementById("minus-children")
const minusBabies = document.getElementById("minus-babies")

// increment a number
const plusAdults = document.getElementById("plus-adults").onclick = function() {
  if (countAdults >= 0) {
    countAdults++
    adultsCounter.innerText = countAdults
  }
}
const plusChildren = document.getElementById("plus-children")
const plusBabies = document.getElementById("plus-babies")

// number of guests
const adultsCounter = document.getElementById("adults-counter")
const childrenCounter = document.getElementById("children-counter")
const babiesCounter = document.getElementById("babies-counter")


console.log(adultsCounter)