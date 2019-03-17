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

// Create a function ```shuffleIt```. The function accepts two or more parameters. The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays. Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds). For every such array, swap the elements. Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.

// Example:
// ```
// shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
// shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
// shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]
// ```

function shuffleIt(arr, ...args) {
    for (var i = 0; i < args.length; i++) {
        console.log('kolejność iteracji: ' + i);
        console.log('lenght of args.length' + args.length);
        console.log('args[i][1]' + args[i][1]);
        var [a, b] = [args[i][0], args[i][1]]
        console.log('wartości indeksów do zamiany');
        console.log(a);
        console.log(b);
        console.log('wartości tablicy o tych indeksach:');
        console.log(arr[a]);
        console.log(arr[b]);
        [arr[b], arr[a]] = [arr[a], arr[b]]
        console.log('po wykonaniu zamiany');
        console.log(arr[a]);
        console.log(arr[b]);
        console.log(arr);
    }
    return arr;
}
shuffleIt([1, 2, 3, 4, 5], [1, 2]);
shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4]);
shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3]);