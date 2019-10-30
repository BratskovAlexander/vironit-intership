const changeLetter = () => {
    let string = 'Привет';
    let newString = string.replace(/ив/i, 'aaaa');
    console.log(newString);
}
changeLetter();