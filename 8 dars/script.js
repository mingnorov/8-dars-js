//let num = 10;
//while (num < 10){
//    console.log(num);
//    num++
//}

// let  num = 0;
// for(; num < 5; num++){
//    if (num == 3) continue;
//    console.log(num)
// }
// console.log(num)

//zadacha//

//for (let num = 0; num < 101; num++){
//    if (num % 2 ==0) if (num % 2 ==1)continue;
//    console.log(num)
//}

// 2 zadacha

// let sum =0;
// while (ture){
//     let value = +
// }

const letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];
const containsN = []; 
const noN = [];       
for (let i = 0; i < letterSearch.length; i++) {
  if (letterSearch[i].toLowerCase().includes('n')) {
    containsN.push(letterSearch[i]); 
  } else {
    noN.push(letterSearch[i]);
  }
}
console.log("N harfi qatnashgan so'zlar:", containsN);
console.log("N harfi qatnashmagan so'zlar:", noN);