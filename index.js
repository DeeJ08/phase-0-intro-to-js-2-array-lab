let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push("Ralph")

}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
    cats.pop("")
}

function destructivelyRemoveFirstCat(name) {
    cats.shift("")
}

function appendCat(name) {
    const copyOfCats = [...cats]
    copyOfCats.push("Broom")
    return copyOfCats
}

function prependCat(name) {
    const copyOfCats = [...cats]
    copyOfCats.unshift("Arnold")
    return copyOfCats
}

function removeLastCat(name) {
    const copyOfCats = [...cats]
    copyOfCats.pop("")
    return copyOfCats
}

function removeFirstCat(name) {
    const copyOfCats = [...cats]
    copyOfCats.shift("")
    return copyOfCats
}



