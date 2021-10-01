// Only change code below this line
let shoppingList = new Map([
    ["Banana", "3"],
    ["Pineapple", "5"],
    ["Pear", "2"],
    ["Carrot", "10"],
    ["Apple", "1.5"]
    
]);




let arrKey = [];
for (let i=0; i < arrKey.length; i++) {
  arrKey.push(shoppingList[i]["groceries: "]);
}

let arrValue = [];
for (let i=0; i < arrValue.length; i++) {
    arrValue.push(shoppingList[i]["amount: "]);
  }
// Only change code above this line
console.log(arrKey);
module.exports = {shoppingList, arrKey, arrValue};