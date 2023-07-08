// 1.
let tab1 = [5, 8, 13, 19];

const newTab1 = tab1.map((index) => {
    return index * 2;
});
console.log("premier tableau");
console.log(tab1);

console.log("premier tableau doublé");
console.log(newTab1);

// 2.
let tab2 = ["a", "ab", "abc", "abcd", "abcde"]

const newTab2 = tab2.filter((index) => {
    return index.length > 3;
})
console.log("premier tableau sans filtrage ")
console.log(tab2);

console.log("nouveau tableau avec filtrage ( les chaines dont la longueur est strictement superieur à 3 )")
console.log(newTab2);

// 3.

let tab3 = [2, 4, 6, 8, 9, 10, 13, 18]

const total = tab3.reduce((accumulator, element) => {
    accumulator = accumulator + element;
    return accumulator;
}, 0)
console.log(total);

// 4.
let tab4 = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]

const newTab4 = tab4.sort((x, y) => {
    return x.localeCompare(y);
});
console.log(newTab4);

// 5. 
let tab5 = ["a", "b", "c", "d"]

tab5.forEach(element => console.log(element));
