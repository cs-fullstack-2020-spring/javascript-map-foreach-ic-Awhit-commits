//  let numList;
// numList = [1,2,3,4,5,6];

// console.log( Math.max(...numList));
// console.log(Math.min(...numList));

// let sum = numList.reduce(function (accumulator,currentValue) {
//     return accumulator +currentValue
// })
// console.log(sum);
// //forEach usage in a list
// // numList.forEach(function(number){
// //     console.log(number);
// // })

// // TEST DATA 
// //const companies= [ {name: "Company One", category: "Finance", start: 1981, end: 2004}, {name: "Company Two", category: "Retail", start: 1992, end: 2008}, {name: "Company Three", category: "Auto", start: 1999, end: 2007}, {name: "Company Four", category: "Retail", start: 1989, end: 2010}, {name: "Company Five", category: "Technology", start: 2009, end: 2014}, {name: "Company Six", category: "Finance", start: 1987, end: 2010}, {name: "Company Seven", category: "Auto", start: 1986, end: 1996}, {name: "Company Eight", category: "Technology", start: 2011, end: 2016}, {name: "Company Nine", category: "Retail", start: 1981, end: 1989} ];

// // const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// // let maxNum = number =>(
// //     Math.max(...)

// // )
// sortNum = numList.filter(num=> num>1);
// console.log(sortNum);

// //Multiply items in the array by 2
// // const arr1 = [1, 2, 3];
// // const arr2 = arr1.map(function(item) {
// //   return item * 2;
// // });
// // console.log(arr2);

// //getting ages by subtracting 2018
// const birthYear = [1975, 1997, 2002, 1995, 1985];
// const ages = birthYear.map(year => 2018 - year);
// // prints [ 43, 21, 16, 23, 33 ]
// console.log(ages);

// //Adding in the array using reduce
// const arr = [5, 7, 1, 8, 4];
//  sum = arr.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// },);
// // prints 25
// console.log(sum);

//ternary

let v1 =5, v2 = 20;
let new_value =v2 < 29 ? v2:v1;