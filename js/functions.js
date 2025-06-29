export async function removeAttributes(inputsByWord) {
    Array.from(inputsByWord).map((elem) => {
        elem.classList.remove("isCompleted")
        elem.removeAttribute('readonly')
        elem.value = ''
    })

}

export async function verifyWordsInStorage(getWordStorage, inputsByWord) {
    const renderStorage = JSON.parse(getWordStorage)
    Array.from(inputsByWord).map((elem, index) => {
        elem.classList.add("isCompleted")
        elem.setAttribute('readonly', true)

        renderStorage.map((val, storageIndex) => {
            if (index === storageIndex) {
                elem.setAttribute('value', val)

            }
        })
    })
}
