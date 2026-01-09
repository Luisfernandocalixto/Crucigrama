function inputByFirstCells() {
    return `<input type="text" pattern=".{1,}" maxlength="1" aria-label="cellByFirstWord" class="cellByFirstWord"/>`;
}

function inputBySecondCells() {
    return `<input type="text" pattern=".{1,}" maxlength="1" aria-label="cellBySecondWord" class="cellBySecondWord"/>`;

}

function inputsByThreeCells() {

    return `<input type="text" pattern=".{1,}" maxlength="1"aria-label="cellByThreeWord" class="cellByThreeWord"/>`;
}

function inputByFirstIntersection() {
    return `<input type="text" pattern=".{1,}" maxlength="1" aria-label="cellBySecondWord&cellByThreeWord" class=" cellBySecondWord cellByThreeWord"/>`;
}

function inputBySecondIntersection() {
    return `<input type="text" pattern=".{1,}" maxlength="1" aria-label="cellByFirstWord&cellBySecondWord" class="cellByFirstWord cellBySecondWord"/>`;

}


export {
    inputByFirstCells,
    inputBySecondCells,
    inputsByThreeCells,
    inputByFirstIntersection,
    inputBySecondIntersection
}