const numbers = [1,2,3,4,5,6,7,9];
// const output = [];
// for(const number of numbres){
//     const doubled = number * 2;
//     output.push(doubled);
// }

// console.log(output);

function getDouble(numbers){
    const output = [];
    for(const number of numbres){
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}



/* 
purpose:
1. get an array 
2. for every elements of the array 
3. store the result in an array 
4. returne the result array 
*/

const doubleIt = num => num * 2; 

const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);

const double2 = numbers.map(x => x * 2);
console.log(double2);

const fiveTimes = [1,2,3,4,5].map(x=>x*5);
console.log(fiveTimes);
