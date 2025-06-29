const inputByFirstCells = `<input type="text" pattern=".{1,}" maxlength="1"  class="cellByFirstWord"/>`

const inputBySecondCells = `<input type="text" pattern=".{1,}" maxlength="1"  class="cellBySecondWord"/>`

const inputsByThreeCells = `<input type="text" pattern=".{1,}" maxlength="1" class="cellByThreeWord"/>`

const inputByFirstIntersection = `<input type="text" pattern=".{1,}" maxlength="1"  class=" cellBySecondWord cellByThreeWord"/>`

const inputBySecondIntersection = `<input type="text" pattern=".{1,}" maxlength="1"  class="cellByFirstWord cellBySecondWord"/>`


export {
    inputByFirstCells,
    inputBySecondCells,
    inputsByThreeCells,
    inputByFirstIntersection,
    inputBySecondIntersection
}