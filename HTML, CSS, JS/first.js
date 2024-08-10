function convertFirstLetter(word) {
    characters = word.split("")
    firstChar = characters.shift()
    finalWord = String(firstChar).toUpperCase()
    return finalWord.concat(characters.join(""))
}
