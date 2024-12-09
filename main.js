// task 1
// Создайте переменную num передайте в него число 123 используя циклы вывести пирамиду

// вывод:
// // 1
// // 12
// // 123

// let a = "";
// for (let i = 1; i <= 3; i++) {
//   a += i;
//   console.log(a);
// }
// task 2
// Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// let a = "";
// for (let i = 1; i <= 7; i++) {
//   a += "#";
//   console.log(a);
// }
// task 3
// Дан массив с объектами:
//!
// let arr = [
//     { name: "Jack", age: 15 },
//     { name: "Helen", age: 34 },
//     { name: "Tom", age: 20 },
//     { name: "Bob", age: 54 },
//     { name: "Jessica", age: 13 },
//   ];
//   for (let i in arr) {
//     if (arr[i].age > 18) {
      //   a.push(arr[i])
//       console.log(`Hello,${arr[i].name}  the grand sale has begun,
//               prices are reduced by 20%! `);
//     }
//   }
  // console.log(a);
  
  // let arr = [
  //   { name: "Jack", age: 15 },
  //   { name: "Helen", age: 34 },
  //   { name: "Tom", age: 20 },
  //   { name: "Bob", age: 54 },
  //   { name: "Jessica", age: 13 },
  // ];
  // for (let i in arr) {
  //   console.log(arr[i].age);
  // }
  
  // , задача: реализовать рассылку сообщений типа: 'Hello,
  // [Здесь должно быть имя клиента], the grand sale has begun,
  // prices are reduced by 20%!', игнорировать клиентов, которым нет 18-ти лет
  
  // task 4
  // Дан массив:
  // let arr = [
  //   1,
  //   10,
  //   true,
  //   "hello",
  //   "JS",
  //   null,
  //   false,
  //   0,
  //   { title: "Samsung", price: 1000 },
  // ];
  // let a = arr.filter((el) => typeof el === "string" || typeof el === "number");
  // console.log(a);
  
  //  задача, отфильтровать массив, оставив только строки и числа
  
  // task 5
  // Дана строка: 'Hello, I\'m Jack. I\'m 25 years old and I Frontend developer!',
  // вывести в консоль символы у которых четный индекс
  //?
  // let arr = "Hello, I'm Jack. I'm 25 years old and I Frontend developer!";
  // let a = [];
  // for (let i in arr) {
  //   if (i % 2 === 0) {
  //     a.push(arr[i]);
  //   }
  // }
  // console.log(a.join(""));
  
  // task 6
  // Дан многомерный массив состоящий из строк:
  //!
  // const names = [
  //   [
  //     ['Helen', 'Tom'],
  //     ['Jack', 'Peter']
  //   ],
  //   [
  //     ['Jessica', 'Bob'],
  //     ['Jimm', 'John']
  //   ],
  //   [
  //     ['Alexa', 'Jessy'],
  //     ['David', 'Paul']
  //   ]
  // ]
  // names=names.flat()
  // for ( let i of names){
  // if ( i > 4){
  //     console.log(i);
  
  // }
  // }
  //, задача: вывести в консоль только те имена, длинна которых больше 4-х символов
  
  // task 7
  // Проверьте все ли элементы в массиве number
  // let a = [1, "2", "3", 4, 5]; // --> true
  // let b = a.every((el) => typeof el === "number");
  // console.log(b);
  // [1, 2, 3, 4, 5];
  // [1,"2","3",4,5] --> false
  
  // task 8
  // найдите разницу в возрасте между самого старшего и самого младшего в семье
  // дан массив с возрастами, нужно возвращать новый массив
  // [возраст старшего,возраст младшего,разница]
  //
  // let arr = [12, 74, 44, 28, 59]; //--> [74,12,62]
  // let max = arr.reduce((acc, el) => (acc > el ? acc : el));
  // let min = arr.reduce((acc, el) => (acc < el ? acc : el));
  // let maxmin = max - min;
  // console.log([max, min, maxmin]);
  
  // task 9
  // Напишите цикл, который за 7 вызовов console.log выводит такой ромбик:
  
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  // ######
  // #####
  // ####
  // ###
  // ##
  // #
  //!
  // let a = "";
  // for (let i = 1; i <= 7; i++) {
  //   a += "#";
  //   console.log(a);
  // }
  // for ( )
  // task 10
  // Вам дан целое число n и строку str и возвращает строку, повторяющуюся ровно n раз.
  // let n = 3;
  // let str = "hello";
  // let a = "";
  // for (let i = 1; i < n; i++) {
  //   a += str;
  // }
  // console.log(a);
  // вывод:
  // "hellohellohello"
  
  // task 11
  // Вам дан целое число n и вывести следующий результат
  // let n = 10;
  // let a = [];
  // for (let i = 1; i <= n; i++) {
  //     a.push(i);
  // }
  // console.log(a.join("-"));
  // 1-2-3-4-5-6-7-8-9-10
  
  // task 12
  // Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла for
  // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // let a = [];
  // for (let i = 1; i <= arr.length; i++) {
  //   a.push(i);
  // }
  // console.log(a);
  
  // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // for (let i = 1; i <= arr.length; i++) {
  //   console.log(i);
  // }
  // task 13
  // Найдите самый длинный элемент массива и выведите в консоль
  //!
  // let arr = "Hello my name is John";
  // let a = []
  // for (let i of arr) {
  //   if (i < i.length) {
  //       a.push(i)
  //     }
  // }
  // console.log(a);
  
  // let a = arr.split().sort((a, b) => b.length - a.length)
  // console.log(a);
  
  // task 14
  // Так же найдите самый короткий элемент этого же массива
  