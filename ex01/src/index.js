let myArr = [];
// Only change code below this line
let num = multiplication(3);

function* multiplication(x) {
    for (let i = 0; i <= x; i++) {
        x = x * 2;
        myArr.push(x);
        yield x;
    }
    return iterationCount;
}

for (let j = 0; j < 3; j++) {
    console.log(num.next().value)
}
// Only change code above this line
module.exports = multiplication;


