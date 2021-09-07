const dropDown = document.getElementById("dropdown")
const dropDownShow = document.getElementById("dropdown-show")

// number of guests
const adultsCounter = document.getElementById("adults-counter")
const childrenCounter = document.getElementById("children-counter")
const babiesCounter = document.getElementById("babies-counter")

dropDown.addEventListener("click", event => {
  dropDown.classList.toggle("dropdown-active")
  dropDownShow.classList.toggle("dropdown-hidden")
})
// dropDown.onclick = function() {
//   dropDown.classList.toggle("dropdown-active")
//   dropDownShow.classList.toggle("dropdown-hidden")
// }

let countAdults = 0
let countChildren = 0
let countBabies = 0

// decrement number
const minusAdults = (document.getElementById("minus-adults").onclick = function () {
  if (countAdults > 0) {
    countAdults--
    adultsCounter.innerText = countAdults
  }
})
const minusChildren = (document.getElementById("minus-children").onclick = function () {
  if (countChildren > 0) {
    countChildren--
    childrenCounter.innerText = countChildren
  }
})
const minusBabies = (document.getElementById("minus-babies").onclick = function () {
  if (countBabies > 0) {
    countBabies--
    babiesCounter.innerText = countBabies
  }
})

// increment a number
const plusAdults = (document.getElementById("plus-adults").onclick = function () {
  if (countAdults >= 0) {
    countAdults++
    adultsCounter.innerText = countAdults
  }
})
const plusChildren = (document.getElementById("plus-children").onclick = function () {
  if (countChildren >= 0) {
    countChildren++
    childrenCounter.innerText = countChildren
  }
})
const plusBabies = (document.getElementById("plus-babies").onclick = function () {
  if (countBabies >= 0) {
    countBabies++
    babiesCounter.innerText = countBabies
  }
})
