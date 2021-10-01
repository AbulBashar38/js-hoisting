var LANGUAGE = 'java';
var language = 'javascript';

function getLanguage() {
    if (!language) {
        var language = LANGUAGE;
    }
    return language;
}
getLanguage() //output java

let LANGUAGE = 'java';
let language = 'javascript';

function getLanguage() {
    if (!language) {
        let language = LANGUAGE;
    }
    return language;
}
getLanguage() // out put javascript