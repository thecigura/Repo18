function* generatorOne() {
    yield "Two";
    yield "Three";
    yield "Four";
}

function* genaratorTwo() {
    yield "One";
    yield* generatorOne();
    yield "Five";
}

const iterator = generatorTwo();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
