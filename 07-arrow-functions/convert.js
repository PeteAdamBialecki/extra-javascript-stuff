
console.log('Conneted...');

// My version:

// // #1
// // Function before arrow converting:
//     // function addToTen(num) {
//     //     return 10 + num;
//     // }
// // Same function from above as arrow:
//     let addToTen = (num) => 10 + num

// // #2
// // Function before arrow converting:
//     // function divideUs(num1, num2) {
//     //     return num1/num2;
//     // }
// // Same function from above as arrow:
//     let divideUs = (num1, num2) => num1/num2

// // #3
// // Function before arrow converting:
//     // function printMyName() {
//     //     let myName = 'Pete';
//     //     console.log(myName);
//     // }
// // Same function from above as arrow:
//     let printMyName = (myName) => console.log('Pete')

// console.log(addToTen(5));
// console.log(divideUs(5,5));
// printMyName();


// The following is a second version.
    const addToTen = (num) => 10 + num
    const divideUs = (num1, num2) => num1/num2
    const printMyName = () => {
        let myName = 'Pete';
        console.log('Pete');
    }

console.log(addToTen(5));
console.log(divideUs(5,5));
printMyName();