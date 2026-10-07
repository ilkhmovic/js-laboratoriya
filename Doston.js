// 1-misol
// let berilgan_masofa = 1295
// let metrda = berilgan_masofa / 100;
// console.log("Masofa metrda: " + metrda + " m");
//2-misol
// let berilgan = 1250
// let sentner = berilgan / 100;
// console.log("Yukning og'irligi sentnerda: " + sentner + " sentner");
//3-misol
// const prompt = require("prompt-sync")();
// let berilgan  = prompt("Berilgan kg ni kiriting: ");
// let tonna = berilgan / 1000;
// console.log("Yukning og'irligi tonnalarda: " + tonna + " t");
//4-misol
// const prompt = require("prompt-sync")();
// let berilgan = prompt("Berilgan masofani ni kiriting (m): ");
// let kilometr = berilgan / 1000;
// console.log("Masofa kilometrda: " + kilometr + " km");
//5-misol
// let kun = 234;
// let hafta = Math.trunc(kun/7);
// console.log("Kunlar soni: " + kun + " kun, bu esa " + hafta + " haftaga teng.");
//6-misol
// let n6 = 40000;
// let soat6 = Math.floor(n6 / 3600);
// let daqiqa6 = Math.floor((n6 % 3600) / 60);
// let soniya6 = n6 % 60;
// console.log("6:", soat6, daqiqa6, soniya6);
//7-misol
// let a7 = 543;
// let b7 = 130;
// let kvadrat7 = Math.floor(a7 / b7);
// console.log("7:", kvadrat7);
//8-misol
// let n8 = 47;
// let onlik8 = Math.floor(n8 / 10);
// let birlik8 = n8 % 10;
// let yigindi8 = onlik8 + birlik8;
// let kopaytma8 = onlik8 * birlik8;
// console.log("8:", onlik8, birlik8, yigindi8, kopaytma8);
//9-misol
// let n9 = 47;
// let onlik9 = Math.floor(n9 / 10);
// let birlik9 = n9 % 10;
// let natija9 = birlik9 * 10 + onlik9;
// console.log("9:", natija9);
//10-misol
// let n10 = 345;
// let birlik10 = n10 % 10;
// let onlik10 = Math.floor(n10 / 10) % 10;
// let yuzlik10 = Math.floor(n10 / 100);
// let yigindi10 = yuzlik10 + onlik10 + birlik10;
// let kopaytma10 = yuzlik10 * onlik10 * birlik10;
// console.log("10:", birlik10, onlik10, yigindi10, kopaytma10);
//11-misol
// let n11 = 345;
// let birlik11 = n11 % 10;
// let onlik11 = Math.floor(n11 / 10) % 10;
// let yuzlik11 = Math.floor(n11 / 100);
// let natija11 = birlik11 * 100 + onlik11 * 10 + yuzlik11;
// console.log("11:", natija11);
//12-misol
// let n12 = 345;
// let yuzlik12 = Math.floor(n12 / 100);
// let qolgan12 = n12 % 100;
// let natija12 = qolgan12 * 10 + yuzlik12;
// console.log("12:", natija12);
//13-misol
// let n13 = 345;
// let birlik13 = n13 % 10;
// let qolgan13 = Math.floor(n13 / 10);
// let natija13 = birlik13 * 100 + qolgan13;
// console.log("13:", natija13);
//14-misol
// let n14 = 345;
// let birlik14 = n14 % 10;
// let onlik14 = Math.floor(n14 / 10) % 10;
// let yuzlik14 = Math.floor(n14 / 100);
// let natija14 = onlik14 * 100 + yuzlik14 * 10 + birlik14;
// console.log("14:", natija14);
//15-misol
// let n15 = 345;
// let birlik15 = n15 % 10;
// let onlik15 = Math.floor(n15 / 10) % 10;
// let yuzlik15 = Math.floor(n15 / 100);
// let natija15 = yuzlik15 * 100 + birlik15 * 10 + onlik15;
// console.log("15:", natija15);
//2.1-misol
// const prompt = require("prompt-sync")();
// let m = prompt("m : ");
// let n = prompt("n : ");
// if(m % n == 0){
//     console.log(m/n);
// }else{
//     console.log("m soni n soniga qoldiqsiz bo'linmaydi");
// }
//2.2-misol
// const prompt = require("prompt-sync")();
// let a = prompt("a : ");
// let b = prompt("b : ");
// if(a % b == 0){
//     console.log(`${b} soni ${a} sonining bo'luvchisi`);
// }else{
//     console.log(`${b} soni ${a} sonining bo'luvchisi emas`);
// }
//2.3-misol a-shart
// const prompt = require("prompt-sync")();
// let a = prompt("a : ");
// // if(a % 2 == 0){
// //     console.log(`${a} soni juft son`);
// // }else{
// //     console.log(`${a} soni toq son`);
// // } b-shart
// if(a % 10 == 7){
//     console.log(`${a} soni 7 bilan tugaydi`);
// }else{
//     console.log(`${a} soni 7 bilan tugamaydi`);
// }
//2.4-misol
// const prompt = require("prompt-sync")();
// let a = prompt("ikki xonali son kiriting : ");
//shart a
// if(a >= 10 && a <= 99){
//     if(Math.trunc(a / 10) > a % 10){
//         console.log("Birinchi raqam ikkinchi raqamdan katta");
//     }else if(Math.trunc(a / 10) < a % 10){
//         console.log("Ikkinchi raqam birinchi raqamdan katta");
//     }else{
//         console.log("Raqamlar teng");
//     }
// }else{
//     console.log("Iltimos ikki xonali son kiriting");
// }
//2.5-misol
// const prompt = require("prompt-sync")();
// let a = prompt("ikki xonali son kiriting : ");
// if(a >= 10 && a <= 99){
//     if(Math.pow(a,2) == 4*(Math.pow(Math.trunc(a / 10),3) + Math.pow(a % 10,3))){
//         console.log("ijobiy javob");
//     }else{
//         console.log("salbiy javob");
//     }
    
// }else{
//     console.log("Iltimos ikki xonali son kiriting");
// }
// console.log("\n--- 6-masala ---");
// const prompt = require("prompt-sync")();
// let n6 =prompt("Ikki xonali son kiriting: ");

 
// if (yig6 >= 10) {
//   console.log("a) Raqamlari yig'indisi ikki xonali son");
// } else {
//   console.log("a) Raqamlari yig'indisi ikki xonali son emas");
// }
// const prompt = require("prompt-sync")();
// let a6 = prompt("b) a sonini kiriting: ");
// let yig6 = Math.floor(a6 / 10) + (a6 % 10);
// if (yig6 > a6) {
//   console.log("b) Ha, raqamlari yig'indisi a dan katta");
// } else {
//   console.log("b) Yo'q, raqamlari yig'indisi a dan katta emas");
// }
// console.log("\n--- 7-masala ---");
// const prompt = require("prompt-sync")();
// let n7 = prompt("Ikki xonali son kiriting: ");
// let yig7 = (n7 - (n7 % 10)) / 10 + (n7 % 10);
 
// if (yig7 % 3 === 0) {
//   console.log("a) Yig'indi 3 ga karrali");
// } else {
//   console.log("a) Yig'indi 3 ga karrali emas");
// }
 
// let a7 = prompt("b) a sonini kiriting: ");
// if (yig7 % a7 === 0) {
//   console.log("b) Yig'indi a ga karrali");
// } else {
//   console.log("b) Yig'indi a ga karrali emas");
// }
// console.log("\n--- 8-masala ---");
// const prompt = require("prompt-sync")();
// let n8 = prompt("Uch xonali son kiriting: ");
// let birinchi8 = (n8 - (n8 % 100)) / 100;
// let oxirgi8 = n8 % 10;
// if (birinchi8 === oxirgi8) {
//   console.log("Bu son palindrom");
// } else {
//   console.log("Bu son palindrom emas");
// }
// console.log("\n--- 9-masala ---");
// const prompt = require("prompt-sync")();
// let n9 = Number(prompt("Uch xonali son kiriting: "));
// let birinchi9 = (n9 - (n9 % 100)) / 100;
// let ikkinchi9 = ((n9 % 100) - (n9 % 10)) / 10;
// let oxirgi9 = n9 % 10;
 
// if (birinchi9 > oxirgi9) {
//   console.log("a) Birinchi raqam kattaroq");
// } else if (birinchi9 < oxirgi9) {
//   console.log("a) Oxirgi raqam kattaroq");
// } else {
//   console.log("a) Birinchi va oxirgi raqamlar teng");
// }
 
// if (birinchi9 > ikkinchi9) {
//   console.log("b) Birinchi raqam kattaroq");
// } else if (birinchi9 < ikkinchi9) {
//   console.log("b) Ikkinchi raqam kattaroq");
// } else {
//   console.log("b) Birinchi va ikkinchi raqamlar teng");
// }
const prompt = require("prompt-sync")();
 
// console.log("\n--- 10-masala ---");
// let n10 = Number(prompt("Uch xonali son kiriting: "));
// let a10 = (n10 - (n10 % 100)) / 100;
// let b10 = ((n10 % 100) - (n10 % 10)) / 10;
// let c10 = n10 % 10;
// if (n10 * n10 === a10 ** 3 + b10 ** 3 + c10 ** 3) {
//   console.log("Son kvadrati raqamlari kublari yig'indisiga teng");
// } else {
//   console.log("Son kvadrati raqamlari kublari yig'indisiga teng emas");
// }
// console.log("\n--- 11-masala ---");
// let n11 = Number(prompt("Uch xonali son kiriting: "));
// let a11 = (n11 - (n11 % 100)) / 100;
// let b11 = ((n11 % 100) - (n11 % 10)) / 10;
// let c11 = n11 % 10;
// if (a11 === b11 && b11 === c11) {
//   console.log("a) Ha, barcha raqamlari bir xil");
// } else {
//   console.log("a) Yo'q, barcha raqamlari bir xil emas");
// }
// if (a11 === b11 || a11 === c11 || b11 === c11) {
//   console.log("b) Ha, bir xil raqamlar mavjud");
// } else {
//   console.log("b) Yo'q, bir xil raqamlar yo'q");
// }
// console.log("\n--- 12-masala ---");
// let n12 = Number(prompt("To'rt xonali son kiriting: "));
// let a12 = (n12 - (n12 % 1000)) / 1000;
// let b12 = ((n12 % 1000) - (n12 % 100)) / 100;
// let c12 = ((n12 % 100) - (n12 % 10)) / 10;
// let d12 = n12 % 10;
// if (a12 + b12 === c12 + d12) {
//   console.log("a) Dastlabki ikki raqam yig'indisi oxirgi ikki raqam yig'indisiga teng");
// } else {
//   console.log("a) Dastlabki ikki raqam yig'indisi oxirgi ikki raqam yig'indisiga teng emas");
// }
// if ((a12 + b12 + c12 + d12) % 3 === 0) {
//   console.log("b) Raqamlari yig'indisi 3 ga karrali");
// } else {
//   console.log("b) Raqamlari yig'indisi 3 ga karrali emas");
// }
// if ((a12 * b12 * c12 * d12) % 4 === 0) {
//   console.log("c) Raqamlari ko'paytmasi 4 ga karrali");
// } else {
//   console.log("c) Raqamlari ko'paytmasi 4 ga karrali emas");
// }
// let x12 = Number(prompt("d) a sonini kiriting: "));
// if ((a12 * b12 * c12 * d12) % x12 === 0) {
//   console.log("d) Raqamlari ko'paytmasi a ga karrali");
// } else {
//   console.log("d) Raqamlari ko'paytmasi a ga karrali emas");
// }
// console.log("\n--- 13-masala ---");
// let n13 = Number(prompt("Natural son kiriting: "));
// if (n13 % 2 === 0) {
//   console.log("a) Ha, juft raqam bilan tugaydi");
//   console.log("b) Yo'q, toq raqam bilan tugamaydi");
// } else {
//   console.log("a) Yo'q, juft raqam bilan tugamaydi");
//   console.log("b) Ha, toq raqam bilan tugaydi");
// }
 
 
// console.log("\n--- 14-masala ---");
// let a14 = Number(prompt("1-sonni kiriting: "));
// let b14 = Number(prompt("2-sonni kiriting: "));
// let c14 = Number(prompt("3-sonni kiriting: "));
// let max14;
// let min14;
// if (a14 > b14 && a14 > c14) {
//   max14 = a14;
// } else if (b14 > a14 && b14 > c14) {
//   max14 = b14;
// } else {
//   max14 = c14;
// }
// if (a14 < b14 && a14 < c14) {
//   min14 = a14;
// } else if (b14 < a14 && b14 < c14) {
//   min14 = b14;
// } else {
//   min14 = c14;
// }
// console.log("Maksimal: " + max14);
// console.log("Minimal: " + min14);
// console.log("\n--- 15-masala ---");
// let a15 = Number(prompt("1-sonni kiriting: "));
// let b15 = Number(prompt("2-sonni kiriting: "));
// let c15 = Number(prompt("3-sonni kiriting: "));
// let s15;
// if (a15 < b15 && a15 < c15) {
//   s15 = b15 + c15;
// } else if (b15 < a15 && b15 < c15) {
//   s15 = a15 + c15;
// } else {
//   s15 = a15 + b15;
// }
// console.log("Eng katta ikkitasining yig'indisi: " + s15);

// console.log("\n--- 16-masala ---");
// let a16 = Number(prompt("1-sonni kiriting: "));
// let b16 = Number(prompt("2-sonni kiriting: "));
// let c16 = Number(prompt("3-sonni kiriting: "));
// let p16;
// if (a16 > b16 && a16 > c16) {
//   p16 = b16 * c16;
// } else if (b16 > a16 && b16 > c16) {
//   p16 = a16 * c16;
// } else {
//   p16 = a16 * b16;
// }
// console.log("Eng kichik ikkitasining ko'paytmasi: " + p16);

// console.log("\n--- 17-masala ---");
// let a17 = Number(prompt("Birinchi sonni kiriting: "));
// let b17 = Number(prompt("Ikkinchi sonni kiriting: "));
// if (b17 ** 0.5 < a17) {
//   b17 = b17 * 5;
// }
// console.log("Birinchi son: " + a17);
// console.log("Ikkinchi son: " + b17);

// console.log("\n--- 18-masala ---");
// let a18 = Number(prompt("1-butun sonni kiriting: "));
// let b18 = Number(prompt("2-butun sonni kiriting: "));
// let c18 = Number(prompt("3-butun sonni kiriting: "));
// let bor18 = false;
// if (a18 % 2 === 0) {
//   console.log(a18);
//   bor18 = true;
// }
// if (b18 % 2 === 0) {
//   console.log(b18);
//   bor18 = true;
// }
// if (c18 % 2 === 0) {
//   console.log(c18);
//   bor18 = true;
// }
// if (bor18 === false) {
//   console.log("Juft son yo'q");
// }

// console.log("\n--- 19-masala ---");
// let a19 = Number(prompt("1-haqiqiy sonni kiriting: "));
// let b19 = Number(prompt("2-haqiqiy sonni kiriting: "));
// let c19 = Number(prompt("3-haqiqiy sonni kiriting: "));
// if (a19 >= 0) {
//   a19 = a19 * a19;
// }
// if (b19 >= 0) {
//   b19 = b19 * b19;
// }
// if (c19 >= 0) {
//   c19 = c19 * c19;
// }
// console.log(a19, b19, c19);