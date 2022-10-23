const message = prompt("Learn the different languages to say HELLO WORLD.")
let word = ''

switch (message.toLowerCase()) {

    case 'spanish':
        word = 'Hola mundo'
        break;
    case 'german':
        word = 'Hallo welt'
        break;
    case 'english':
        word = 'Hello World'
        break;
    case 'french':
        word = 'Salut monde'
        break;
    case 'russian':
        word = 'мир приветствий'
        break;
    default:
        word = 'Hello world'
        break;
}

alert(`the selected language of the word HELLO WORLD is: ${word} `)