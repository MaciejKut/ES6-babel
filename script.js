// ćwiczenie 1
const h = "Hello";
const w = "world";

// function hw(h, w) {
console.log(` Text: ${h}  ${w}`);
// };
// hw(h, w);


// ćwiczenie 2
let multiply = (x = 1, y = 1) => x * y

console.log(multiply(9, 53));

// ćwiczenie 3
const numbers = [1, 2, 3, 8, 0, 0, 3, 48, 9];

function average(args) {
    var sum = 0;
    args.forEach(x => sum += x);
    return sum / args.length;
}

const average2 = (...args2) => {
    const sum = (sumValue, arrayElement) => sumValue + arrayElement

    console.log('suma to : ' + args2.reduce(sum));
    console.log('Ilość elementów: ' + args2.length)
    console.log('średnia: ' + args2.reduce(sum) / args2.length);

}

average2(3, 4, 5, 5, 5, 3, 4);
// Ćwiczenie 4
average2(...numbers);

// Ćwiczenie 5
const array2 = [1, 4, 'Iwona', false, 'Nowak'];

const [, , firstName, , LastMame] = array2
console.log(`${firstName} ${LastMame}`);

//CodeWars1
var uniqueInOrder = function (iterable) {
    const array = [];
    if (iterable.length != 0) {

        array.push(iterable[0]);
        for (let i = 1; i < iterable.length; i++) {
            if (iterable[i] !== iterable[i - 1]) {
                array.push(iterable[i]);
            }
        }
    }
    console.log(array);
    return array;
}
uniqueInOrder('AAAABBBCCDAABBB'); // == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD'); // == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1, 2, 2, 3, 3]); // == [1, 2, 3]
uniqueInOrder([]);