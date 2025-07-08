const board = Array(132).fill(null)
const cellsByFirstWord = [3, 14, 25, 36, 47, 58, 69, 80]
const cellsBySecondWord = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43]
const cellsByThreeWord = [34, 45, 56, 67, 78, 89, 100, 111, 122]
const words = {
    isFirstWord: 'judicial',
    isSecondWord: 'legislativo',
    isThreeWord: 'ejecutivo',
}
const levelWords = {
    firstWordComplete: 'firstWordComplete',
    secondWordComplete: 'secondWordComplete',
    threeWordComplete: 'threeWordComplete',
}

const span1 = document.createElement('pre')
span1.textContent = '1'
const span2 = document.createElement('pre')
span2.textContent = '2'
const span3 = document.createElement('pre')
span3.textContent = '3'


export {
    board,
    cellsByFirstWord,
    cellsBySecondWord,
    cellsByThreeWord,
    words,
    levelWords,
    span1,
    span2,
    span3
}