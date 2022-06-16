/**
 * const,let等の宣言
 */
// var vall = 'var変数';
// console.log(vall);

// /** var変数は上書き可能 */
// vall = '上書き';
// console.log(vall);

// // 再宣言
// var vall = "再宣言";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = 'let変数を上書き';
// console.log(val2);

// letは上書き不可能
// let val2 = '上書き';

// const val3 = '変数';
// console.log(val3);

// // val3 = '上書き';
// const val3 = '再宣言';

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "kyok",
//   age: 26,
// };
// val4.name = 'yoko';
// val4.address = 'kumamoto';
// console.log(val4);

// // constで定義したArrayはプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "kyok";
// const age = 28;
// const message1 = "My name is " + name + "," + age + "years old";
// console.log(message1);

// // template literal
// const message2 = `My name is ${name}, ${age} years old`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1 is here"));

// const func2 = (str) => str;
// console.log(func2("func2 is here"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 30));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "じゃけえ",
//   age: 28,
// };

// const message1 = `neme is ${myProfile.name}, ${myProfile.age} years old`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `name is ${name}, ${age} years old`;
// console.log(message2);

// const myProfile = ["kyok", 26];
// const message3 = `my name is ${myProfile[0]}, ${myProfile[1]} years old`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `my name is ${name}, ${age} years old`;
// console.log(message4);

/**
 * dafault
 */
// const sayHello = (name = 'guest') => console.log(`hello!${name}`);
// sayHello('rara');
// sayHello();

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// // const arr6 = [...arr4];
// // console.log(arr6);

// // arr4.push(30);
// // console.log(arr4);
// // console.log(arr6);

// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilter
 */
// const nameArr = ['john', 'yamada', 'taro'];
// // for (let index = 0; index < nameArr.length; index++) {
// //   console.log(`${index +1}:${nameArr[index]}`);
// // }

// // const nameArr2 = nameArr.map((name)=>{
// //   return name;
// // })
// // console.log(nameArr);

// // nameArr.map((name, index)=>console.log(`${index +1}:${name}`));

// // const numArr = [1,2,3,4,5];
// // const newNumArr = numArr.filter((num) => {
// //   return num % 2 === 1;
// // })
// // console.log(newNumArr);

// const newNameArr = nameArr.map((name) =>{
//   if(name === 'taro'){
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? 'true desu' : 'false desu';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : 'please enter number';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }
// console.log(checkSum(50, 70));

/**
 * 論理演算子の本当の意味を知ろう　&& ||
 */

//  const flag1 = true;
//  const flag2 = false;

//  if (flag1 || flag2) {
//    console.log('1 or 2 is true');
//  }

//  if (flag1 && flag2) {
//   console.log('1 and 2 are true');
// }

// ||の左側がfalseのとき右側を返す
// const num = 100;
// const fee = num || '金額未設定です';
// console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
