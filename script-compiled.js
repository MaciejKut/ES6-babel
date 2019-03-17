"use strict";

// ćwiczenie 1
var h = "Hello";
var w = "world";

// function hw(h, w) {
console.log(" Text: " + h + "  " + w);
// };
// hw(h, w);


// ćwiczenie 2
var multiply = function multiply() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return x * y;
};

console.log(multiply(9, 53));

// ćwiczenie 3
var numbers = [1, 2, 3, 8, 0, 0, 3, 48, 9];

function average(args) {
    var sum = 0;
    args.forEach(function (x) {
        return sum += x;
    });
    return sum / args.length;
}

var average2 = function average2() {
    for (var _len = arguments.length, args2 = Array(_len), _key = 0; _key < _len; _key++) {
        args2[_key] = arguments[_key];
    }

    var sum = function sum(sumValue, arrayElement) {
        return sumValue + arrayElement;
    };

    console.log('suma to : ' + args2.reduce(sum));
    console.log('Ilość elementów: ' + args2.length);
    console.log('średnia: ' + args2.reduce(sum) / args2.length);
};

average2(3, 4, 5, 5, 5, 3, 4);
// Ćwiczenie 4
average2.apply(undefined, numbers);

// Ćwiczenie 5
var array2 = [1, 4, 'Iwona', false, 'Nowak'];

var firstName = array2[2],
    LastMame = array2[4];

console.log(firstName + " " + LastMame);

//CodeWars1
var uniqueInOrder = function uniqueInOrder(iterable) {
    var array = [];
    if (iterable.length != 0) {

        array.push(iterable[0]);
        for (var i = 1; i < iterable.length; i++) {
            if (iterable[i] !== iterable[i - 1]) {
                array.push(iterable[i]);
            }
        }
    }
    console.log(array);
    return array;
};
uniqueInOrder('AAAABBBCCDAABBB'); // == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD'); // == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1, 2, 2, 3, 3]); // == [1, 2, 3]
uniqueInOrder([]);
