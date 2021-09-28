const getNumStringWithSpaces = num => {
  const numString = String(num)
  return numString
    .split('')
    .reverse()
    .join('')
    .match(/\d\d?\d?/g)
    .map(el => el.split('').reverse().join(''))
    .reverse()
    .join(' ')
}

export default getNumStringWithSpaces
