const multiply = (a, b) => {
    return a * b
}
const product = multiply(5, 8)

// console.log(product)

const fs = require(`fs`);
const validator = require(`validator`);
// const { default: isEmail } = require("validator/lib/isEmail");

// fs.writeFile(`./hello.txt`, `hellp, Friend`, () => {
//     console.log(`done creating file`);
    
// })

console.log(validator.isEmail(`test@example.com`))
console.log(validator.isEmail(`not-an-email`));
console.log(validator.isUppercase(`HI THERE`));
