function* generator() {
    yield* [1, 2, 3];
    yield* 'Gigi';
    yield* arguments;
}

const iterator = generator(5, 6);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
