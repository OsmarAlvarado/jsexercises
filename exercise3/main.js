const message = confirm("Do you want know the different languages for the wrod HELLO WORLD?")

if (message) {

    let lenguage = prompt("Write the language")
    if (lenguage == 'spanish') {
        alert("Hola mundo!!")
    } else if (lenguage == 'French') {
        alert("Salut monde")
    } else if (lenguage == 'Italian')
        alert("Ciao mondo")
    else {
        alert("Hola mundo!!")
    }
} else {
    alert("You should learn languages")
}