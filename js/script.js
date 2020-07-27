// Написать функцию, которая принимает в виде параметров число и коэффициент, 
// в зависимости от значения первого параметра вы столько раз добавите числа в массив 
// с помощью пользовательского ввода.С помощью коэффициента увеличите или уменьшите значения в массиве.
// (Узнать у пользователя) В консоль вывести 2 массива, до и после применения коэффициента.
// Task #1

// let array = [1,2,3,4];

// function addToArray(num, factor) {
//   for(let i = 0; i < num ; i ++){
//     array.push(alert = +prompt(`Add to number`));
//   }
//   console.log(array);
//   alert = prompt('Введите "+" - что бы увеличить значения в массиве или "-" - что бы уменьшить значения в массиве ')
//   if(factor === '+') {
//     array.push(alert = +prompt(`Add to number`));
//   } else{
//     array.pop();
//   }

// }
// addToArray(3,"+");
// console.log(array);



// Написать функцию которая возвращает строку обрезанную в зависимости от переданных в нее значений 
// от и до, здесь Вам нужно почитать про работу slice() или substring() для строк
// Task #2
// let str = prompt('Enter word');
// let firstValue = +prompt('Введите номер символа с которого начинать обрезание');
// let secondValue = +prompt('Введите номер символа до которого обрезать');
// firstValue--;
// secondValue--;



// // function enterVariables() {
// //   firstValue = +prompt('Введите номер символа с которого начинать обрезание');
// //   secondValue = +prompt('Введите номер символа до которого обрезать');
// //   firstValue--;
// //   secondValue--;
// // }

// // enterVariables();

// // let stringLength = () => {

// //   firstValue--;
// //   secondValue--;

// //   while (str === '' || typeof str === null) {
// //     str = prompt('Enter word again');
// //   }
  
// //   while (firstValue === 0 || typeof firstValue === null) {
// //     alert('Не правильное значение')
// //     enterVariables();
// //   }

// //   while (secondValue === 0 || typeof secondValue === null) {
// //     alert('Не правильное значение')
// //     enterVariables();
// //   }

// //   while (firstValue > str.length) {
// //     alert('Значение больше длины введенной фразы');
// //     enterVariables();
// //   }

// //   while (secondValue > str.length) {
// //     alert('Значение больше длины введенной фразы');
// //     enterVariables();
// //   }
// // }

// let  cutСharacters = (firstValue, secondValue) => newStr = str.substring(firstValue, secondValue);
// // stringLength();

// console.log(cutСharacters(firstValue, secondValue));



// Создать функцию, при вызове которой, будет формироваться объект PERSON с помощью 
// пользовательского ввода, она должна запросить имя, фамилию, возраст, спросить есть ли супруг, 
// если да, то сформировать свойство "супруг (перевод посмотрите)", в котором будет лежать объект 
// с переданными от пользователя именем и возрастом.Далее мы спрашиваем у пользователя, есть ли дети, 
// если есть, то узнаем их количество, при наличии детей, создается свойство children в котором вызывается 
// функция, которая возвращает массив объектов с информацией о детях(имя, возраст), в конце узнать профессию и 
// вывести в консоль сформированный объект
// Task #3

// FIXME: // перенести в функцию
// let person = {};
// let childrenNumber;


// function userData(name, family, age) {
//   person.name = prompt(`Enter your name`);
//   person.family = prompt(`Enter your family`);
//   person.age = +prompt(`How old you`);
//   married = prompt(`You are married? Yes or No`);
//   if (married === 'yes' || married === 'Yes') {
//     userMarried();
//   }
//   console.log(person);
//   children = prompt(`You are children? Yes or No`);
//   if (children === 'yes' || children === 'Yes') {
//     userChild();
//   }
//   person.proffession = prompt(`What is your profession?`);
//   console.log(person);
// }

// function userMarried() {
//   person.married = {};
//   person.married.name = prompt(`Enter your name`);
//   person.married.age = +prompt(`How old you`);
// }
// T
// // TODO:-- доделать реализацию объекта детей в отдельный массив
// function userChild() {
//   person.children = [];
//   childrenNumber = +prompt('How many children?');
//   for (let i = 1; i <= childrenNumber; i++) {
//     children[i].name = prompt(`Enter your name`);
//     children[i].age = +prompt(`How old you`);
//     person.children.push({});
//   }
// }


// function addObject() {
//   person = userData();
//   console.log(person);
// }

// addObject();

// Есть массив данных
// Надо написать функцию, которая сортирует массив на другие в зависимости от типа данных.
// Для числового массива написать функцию, которая увеличит все числа в два раза.Для булиновского массива 
// написать функцию, которая значения поменяет на обратные.Для строкового, написать функцию, которая меняет все 
// буквы О на Л, посмотрите работу split() и join() для массивов.Функции должны быть универсальными.
// Task #4

var data = ['молоко', 34, 717, false, 'копы', true, 74, 108, 'погроммист', 'котик', 'мемчик', true, true, 666, false];

for(let i =0; i<data.length; i++){
  console.log(typeof data[i]);
  
}





// Написать метод для объекта family который вернёт самого старого члена семьи и добавит его в объект в качестве нового свойства.
// Task #5

// let family = {
//   amount: 5,
//   familyMembers: [
//     {name: 'Borya', age: 15},
//     {name: 'Tolya', age: 54},
//     {name: 'Anjela', age: 45},
//     {name: 'Snejana', age: 14},
//     {name: 'Gavriil', age: 24},
//   ],
// }


