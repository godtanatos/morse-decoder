const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
        return expr.match(/.{1,10}/g)
        .map(elem => { return elem.match(/.{1,2}/g) })
        .map(elem => { return elem.filter(el => { return el == "00" ? false : true }) })
        .map(elem => {
            return elem.map(e => {
                if (e == "10") {
                    e = "."
                } else if (e == "11") {
                    e = "-"
                } return e;
            })
        }
        ).map(elem => {
            if (elem.join('') == "**********") { return " " }
            return MORSE_TABLE[elem.join("")]

        }).join(""
    // write your solution here
}

module.exports = {
    decode
}
