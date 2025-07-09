//imports 
import { removeAttributes, verifyWordsInStorage } from "./functions.js";
import { board, cellsByFirstWord, cellsBySecondWord, cellsByThreeWord, levelWords, words, span1, span2, span3 } from "./provides.js";
import {
    inputByFirstCells, inputBySecondCells, inputsByThreeCells, inputByFirstIntersection, inputBySecondIntersection
} from "./template.js";
document.addEventListener('DOMContentLoaded', async function () {

    const sectionElem = document.querySelector('section')
    sectionElem.innerHTML = board.map((el, index) => `<div></div>`).join('')

    const allDivElem = document.querySelectorAll('div')
    const fromArray = Array.from(allDivElem)


    fromArray.map((el, index) => {
        cellsByFirstWord.map(itemOfFirst => {
            if (index === 3) {
                el.insertBefore(span1, el.firstChild)

            }
            if (index === itemOfFirst) {
                el.innerHTML = inputByFirstCells
            }
        })
        cellsBySecondWord.map(itemOfSecond => {
            if (index === itemOfSecond) {
                el.innerHTML = inputBySecondCells
            }
        })

        cellsByThreeWord.map(itemOfThree => {
            if (index === itemOfThree) {
                el.innerHTML = inputsByThreeCells
            }
        })

        if (index === 33) {
            el.insertBefore(span2, el.firstChild)

        }
        if (index === 34) {
            el.innerHTML = inputByFirstIntersection
            el.insertBefore(span3, el.firstChild)

        }
        if (index === 36) {
            el.innerHTML = inputBySecondIntersection
        }
    })

    // elements of DOM =>  class="cellByFirstWord"
    const inputsByFirstWord = document.querySelectorAll('.cellByFirstWord')
    const inputsBySecondWord = document.querySelectorAll('.cellBySecondWord')
    const inputsByThreeWord = document.querySelectorAll('.cellByThreeWord')
    const button = document.querySelector('.button')
    const btnReset = document.querySelector('.optionReset')

    const getFirstWordStorage = localStorage.getItem('firstWordComplete')
    const getSecondWordStorage = localStorage.getItem('secondWordComplete')
    const getThreeWordStorage = localStorage.getItem('threeWordComplete')
    //reset game
    btnReset.addEventListener('click', async function () {
        localStorage.removeItem('firstWordComplete')
        localStorage.removeItem('secondWordComplete')
        localStorage.removeItem('threeWordComplete')
        removeAttributes(inputsByFirstWord)
        removeAttributes(inputsBySecondWord)
        removeAttributes(inputsByThreeWord)
    })

    function verifyWinner() {
        if (getFirstWordStorage && getSecondWordStorage && getThreeWordStorage) {
            document.querySelector('#modal').style.display = 'block'
        }

        async function verifyInputs() {
            const isCompletedFirstWord = Array.from(inputsByFirstWord).every(elem => elem.matches('.isCompleted'))
            const isCompletedSecondWord = Array.from(inputsBySecondWord).every(elem => elem.matches('.isCompleted'))
            const isCompletedThreeWord = Array.from(inputsByThreeWord).every(elem => elem.matches('.isCompleted'))

            if (isCompletedFirstWord && isCompletedSecondWord && isCompletedThreeWord) {
                document.querySelector('#modal').style.display = 'block'
            }

        }
        verifyInputs()
    }

    verifyWinner()


    if (getFirstWordStorage) {
        verifyWordsInStorage(getFirstWordStorage, inputsByFirstWord)
    }

    if (getSecondWordStorage) {
        verifyWordsInStorage(getSecondWordStorage, inputsBySecondWord)
    }

    if (getThreeWordStorage) {
        verifyWordsInStorage(getThreeWordStorage, inputsByThreeWord)
    }

    button.addEventListener('click', verifyWordCompletes);

    async function verifyWordCompletes() {
        const verifyFirstWord = Array.from(inputsByFirstWord).map((elem) => {
            let isFirstWord = ''
            isFirstWord += elem.value
            if (isFirstWord) {
                return isFirstWord
            } else {
                return ''
            }
        })

        function addStylesCompleted(inputs, setWordComplete) {
            Array.from(inputs).map(elem => {
                elem.classList.add("isCompleted")
                elem.setAttribute('readonly', true)
                localStorage.setItem(`${setWordComplete}`, JSON.stringify(Array.from(inputs).map(elem => elem.value)))
            })
        }

        function addStylesFailed(inputs) {
            Array.from(inputs).map(elem => {
                elem.classList.add("isFail")
                setInterval(() => {
                    elem.classList.remove("isFail")
                }, 3000)
            })
        }

        if (verifyFirstWord.join('') === words.isFirstWord) {
            addStylesCompleted(inputsByFirstWord, levelWords.firstWordComplete)
        }
        else {
            addStylesFailed(inputsByFirstWord)
        }

        const verifySecondWord = Array.from(inputsBySecondWord).map((elem) => {
            let isSecondWord = ''
            isSecondWord += elem.value
            if (isSecondWord) {
                return isSecondWord
            } else {
                return ''
            }
        })

        if (verifySecondWord.join('') === words.isSecondWord) {
            addStylesCompleted(inputsBySecondWord, levelWords.secondWordComplete)
        }
        else {
            addStylesFailed(inputsBySecondWord)
        }


        const verifyThreeWord = Array.from(inputsByThreeWord).map((elem) => {
            let isThreeWord = ''
            isThreeWord += elem.value
            if (isThreeWord) {
                return isThreeWord
            } else {
                return ''
            }
        })

        if (verifyThreeWord.join('') === words.isThreeWord) {
            addStylesCompleted(inputsByThreeWord, levelWords.threeWordComplete)
        }
        else {
            addStylesFailed(inputsByThreeWord)
        }
        verifyWinner()
    }

})