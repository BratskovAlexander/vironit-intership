const changeLetter = () => {
  let string = "Привет";
  let newString = string.replace(/ив/i, "aaaa");
  console.log(newString);
};
changeLetter();

const obj = {
  a: `Hello`,
  b: {
    c: `Alex!`,
    d: `How are you?`,
    e: {
      f: `- I'm fine! Thank you!`
    }
  }
};

const func = obj => {
  for (let value in obj) {
    if (typeof obj[value] === "object") {
      func(obj[value]);
    } else {
      console.log(obj[value]);
    }
  }
};
func(obj);

const getConflict = (a = 3, b = 5) => {
  debugger;
 return console.log(a * b);;
};

getConflict(8, 10);
