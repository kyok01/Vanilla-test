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

const myProfile = ["kyok", 26];
const message3 = `my name is ${myProfile[0]}, ${myProfile[1]} years old`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `my name is ${name}, ${age} years old`;
console.log(message4);
