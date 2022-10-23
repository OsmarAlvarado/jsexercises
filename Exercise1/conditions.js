let sentence = confirm("¿Do you want to know your sentence?")

if (sentence) {
    let guilty = prompt("Are you guilty?")
    if (guilty == 'yes') {
        alert("You are guilty")
    } else if (guilty == 'no') {
        alert("you are free")
    } else {
        alert("find a lawyer")
    }

} else {
    alert("look for life")
}






