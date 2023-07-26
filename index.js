//below line is to print on the console window
// console.log('Namaste Duniya version 2');
// let a = 'Vivek Sharma';
// console.log(a);
// let lastName = 3;
// // console.log(lastName);
// lastName = true;
// console.log(lastName);
// let names = ['vivek','sharma','hello'];
// console.log(names[2]);
// console.log(names[3]);
// let age = 24;
// let status = (age >= 18) ? 'Yes you can vote' : 'No you cannot vote';
// console.log(status);




    //   I F  E L S E  C O N D I T I O N

// let marks = 98;
// if (marks >= 90 || marks == 100)
//     console.log('A');
// else if (marks >= 80)
//     console.log('B');
// else if (marks >= 70)
//     console.log('C');
// else if (marks >= 60)
//     console.log('D');
// else
//     console.log('fail');




        //   S W I T C H  C A S E
        // Break use krna bhot jaruri hai 

// let num = 8;
// switch (num) {
//     case 1: console.log('A');
//         break;
//     case 2: console.log('B');
//         break;
//     default: console.log('Chutiya aadmi');
//         break;
// }




    //   F O R  L O O P

// let p = 8;
// for (let i = 1; i <=p; i++)
// {
//     console.log(i);
// }
       



    //  W H I L E  L O O P

// let p = 10;
// let i=0
// while (i < p)
// {
//     console.log(i);
//     i++;
// }




    //  D O  W H I L E  L O O P
// let i = 1;
// do {
//     console.log(i);
//     i++;
// }
// while (i <= 11);




            //  O B J E C T  C R E A T I O N

// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function () {
//         console.log('drawing in progress');
//     }
// };




// FACTORY FUNCTION
// function createRectangle(len,bre) {
    
//     return rectangle = {
//         length: len,
//         breadth: bre,

//         draw: function () {
//             console.log('drawing in progress');
//         }
//     };
// }

// let rectangleobj1 = createRectangle(5, 4);
// let rectangleobj2 = createRectangle(3, 4);
// let rectangleobj3 = createRectangle(8, 9);

// Used Camelcase Notation : reverseString

//CONSTRUCTOR FUNCTION
// Pascal Notation -> first letter of every word is capital -> Ex: NumberOfStrings 
// this refers to current object

// function Rectangle() {
//     this.length = 2;
//     this.breadth = 8;
//     this.draw=function(){
//         console.log('Hi Guyzz!!');
//     }
// }

// OR
// function Rectangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw=function(){
//         console.log('Hi Guyzz!!');
//     }
// }

// isme return nhi krna hota 


// OBJECT CREATION USING CONSTRUCTOR FUNCTION
// let rectangleObject = new Rectangle();
// rectangleObject.color = 'yellow';
// console.log(rectangleObject);
// delete rectangleObject.color;
// console.log('Rectangle');

//OR 
// let rectangleObject = new Rectangle(5,6);


// NOTE: you have to be careful while using "Back tick Character"
// let Rectangle1 = new Function('length', 'breadth',
//     `this.length = length;
//     this.breadth = breadth;
//     this.draw = function () {
//     console.log('Hi Guyzz!!');
// }`);




//PRIMITIVE VS REFERENCE TYPES
// let a = { value: 10 };                **object created hence it's reference type 
// let b = a;                              so, its address would pass
// a.value++;
// console.log(a.value);
// console.log(b.value);



//FOR IN & FOR OF LOOP
// let rectangle = {
//     length:6,
//     breadth:8
// };

// FOR-IN LOOP

// for (let key in rectangle) {
    //keys are reflected through key variable
    // values are reflected through rectangle key
//     console.log(key,rectangle[key])          //brackett notation used here
// }

// FOR-OF LOOP          *only for iterables
                         //ex: arrys,maps,etc.
// for (let key of rectangle) {                       **Give error while executing as
//     console.log(key);                                not applicable for object

// gives error as rectangle is not iterable
// }

// hack for operation on objects    
// for (let key of Object.keys(rectangle)) {                **array bn gya keys ka 
//     console.log(key);
//}

// for (let key of Object.entries(rectangle)) {                **key ki values print krne ke liye
//     console.log(key);
//}

//  TO CKECK WHETHER ANY PROP. PRENSENT IN OBJECT OR NOT
// if ('color' in rectangle) {
//     console.log('Present');
// }
// else {
//     console.log('Not Present');
// }


        //  IMPORTANT FOR MCQs

// OBJECT CLONING METHOD-1(ITERATION)
// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };
// let dest = {};
// for (let key in src) {
//     dest[key] = src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);


// OBJECT CLONING METHOD-2(ASSIGN)
// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };
// let src2 = { value: 25 };
// let dest = Object.assign({}, src,src2);       **Multiple object's data can be combined cum cloned
// console.log(dest);                              in one object
// src.a++;
// console.log(dest);



//OBJECT CLONING METHOD-3(SPREAD)
// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };
// let dest = { ...src };
// console.log(dest);
// src.a++;
// console.log(dest);

                                         // LECTURE-3

// STRINGS
// let lastName = 'Sharma';
// // lastname. => object ( JS m primitive ke aage '.' lagane se automatically object bn jata h )

// let firstName = new String('Vivek');
// let message = "This is my \nfirst show \'in\' your \"city\"";
// console.log(message);

// Few functions for strings
// 1).toUpperCase
// 2).toLowerCase
// 3).length
// 4).lastName[0]
// 5).includes()
// 6).startsWith()
// 7).endsWith()
// 8).trim()
// 9).trimStart()
// 10).trimEnd()
// 11).indexOf()
// 12).replace(' ',' ')


//TEMPLATE LITERAL          **jaisa code m likhunga vaisa hi show krega tilda ka use krke
// let message =
//     `Hello Guys
// This is my "First" show
// in 'your city'
// `;
// console.log(message);

//  ALSO

// let message =
//     `Hello ${lastName},           **This will print the value present in lastName
// This is my "First" show
// in 'your city'
// `;
// console.log(message);


//DATE AND TIME
// let date = new Date();
// console.log(date);
// let date2 = new Date('November 12 2003 07:30');
// console.log(date2);
// let date3 = new Date(2003, 10, 12, 7,30);    **YEAR MONTH(with 0 indexing) DATE TIME
// console.log(date3);
// date3.setFullYear(2002);
// console.log(date3);


//ARRAYS
// let numbers = [2, 3, 5, 7, 8];
// console.log(numbers);
// end -> .push()
// starting -> .unshift()
// middle-> .splice()   --> (index, no. of deletes, want u eant ot add)

//SEARCHING
// console.log(numbers.indexOf(8));
//TO CHECK WHETHER THE NUMBER IS PRESENT OR NOT
// if (numbers.indexOf(1) != -1)         **Not a good method/approach
//     console.log("Present");

//ADVANCE METHOD (Using "incudes" which returns bool)
// console.log(numbers.includes(7));

// console.log(numbers.indexOf(2, 3));   **(value, start from index)


// let courses = [
//     { no: 1, naam: 'Vivek' },
//     { no: 2, naam: 'Sharma' }
// ];
// console.log(courses);
// console.log(courses.indexOf/includes({ no: 1, naam: 'Vivek' }));   ==>returns -1 as we can't use this for objects
// let course = courses.find(function (course) {                as they are refering diff. addresses unlike 
//     return course.naam === 'Sharma';                         primitives
// }); 
// console.log(course);

  

// let courses = [
//     { no: 1, naam: 'Vivek' },
//     { no: 2, naam: 'Sharma' }
// ];
// let course = courses.find(function (course) {
//     return course.naam === 'Vivek';
// });
// console.log(course);

// // ALTERNATIVE (using "arrow")
// let course = courses.find((course) => {        **Agar single parameter h to
//     return course.naam == 'Vivek';                Course wala () aur return bhi hatt jaenge
// });                                            **if no parameter then ()=> only else ()()()=>
// console.log(course);


//  REMOVING ELEMENTS:

// end->pop()
// start->shift()
// middle->splice(index, no of elements want to del)


// EMPTYING AN ARRAY:
// M-1
// let numbers = [1, 2, 3, 4, 5];                **have some issue
// numbers = [];
// console.log(numbers);

// M-2
// numbers.length =0;

// M3
// while (numbers.length > 0) {
//     numbers.pop();
// }

// COMBINING AND SLICING ARRAYS :
// M-1
// let first = [1, 2, 3];
// let second = [4, 5, 6,];
// let combined = first.concat(second);
// console.log(combined);

// M-2
// using spread operator
// let combined = [...First,'a', ...Second,true];

// Copy kaise karu
// let another = [...Combined]; 

// For slicing use slice method
// let marks = [10, 20, 30, 40, 50, 60, 70, 80];
// let sliced = marks.slice(2);
// let sliced = marks.slice(2,6);             ** (starting index, ending index)
// let sliced = marks.slice();                ** fully sliced ho jati , sb print ho jati


// ITERATING AN ARRAY:
// M-1 == using For-of loop
// let arr = [10, 20, 30, 40, 50];
// for (let value of arr) {
//     console.log(value);
// }

// M-2 == using For-each loop
// Array.forEach(function (number) {
//     console.log(number);
// });

// JOINING and SPLITING ARRAY :
// let message = 'This is my first message';
// let parts = message.split(' ');
// console.log(parts);
// let joined = parts.join('_');
// console.log(joined);


// SORTING ARRAY: (for primitives)      **ye string m covert krke sort krta h
// let numbers = [1, 3, 5, 2, 6];
// numbers.sort();
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

// FOR Objects
// HW

// FILTERING ARRAY:
// let numbers = [2, 4, -1, -2];
// let filtered = numbers.filter(value => value >= 0);
// console.log(filtered);


// MAPPING ARRAYS:      **maps each element of arrays to smt else
// let numbers = [7, 8, 9, 10];
// let items = numbers.map(function (value) {
//     return 'student_No.' + value;
// });
// console.log(items);


// MAPPING WITH OBJECT:
// let numbers = [2, 4, -1, -2];
// let filtered = numbers.filter(value => value >= 0);
// let items = filtered.map(num => { value: num });

// OR (Chaining)
// let items = numbers
    // .filter(value => value >= 0)
    // .map(num => { value: num });

// console.log(items);


                          // L E C T U R E - 4

// FUNCTION: [why-> readablilty , less bulky, ]
// func provoke               **HOISTING technique used by JS Engine (ssare function upar leke run krta hua aagea)
// run();
// function run(){
//     console.log('running');
// } 
// run();
   
// stand(); --> nhi chalega, niche hi hona padega

// FUNCTION ASSIGNMENT
// let stand = function walk() {
//     console.log('Walking');
// };
// stand();
// walk(); --> show no assignment
// let jump = stand;
// jump();

// Anonymous function assignment
// let stand2 = function(){
//     console.log('Walking');
// };
// stand2();

// function sum(a, b) {
//     return a + b;
// };           // ';' may or mayn't be used

// console.log(sum(1, 2));        ==> 3 
// console.log(sum(1));           ==> NaN
// console.log(sum());            ==> NaN
// console.log(sum(1,2,3,4,5));   ==> 3

// ALTERBATIVE AND BEST METHOD TO AVOID ABOVE ISSUE  
// ARGUMENTS
// function sum() {                           //function sum(a,b)
//     let total = 0;
//     for (let value of arguments)
//         total = total + value;
//         return total;
// } 
// let ans = sum(1, 2, 3);
// console.log(ans);


// REST OPERATOR => (... args == rest parameters)       (spread operator is used to contagnate in "ARRAYS")

// function sum(num, value, ...args) {
//     console.log(args);
// }
// sum(1, 2, 3, 4, 5, 6);     //(num,value, other comes in rest as a array)



//DEFAULT PARAMETERS
// function interest(p, r=5, y=9) {            **take value as 5 if no value is passed
//     return p * y * r / 100;                 **ek baar default use kiya to uske baar valw sb m use krna h 
// }
// console.log(interest(1000, 10, 5));         **agar kisi ek value ko hata diya to NaN aaega


// GETTERS AND SETTERS
// let person = {
//     fName:'Vivek',
//     lName:'Sharma', 
//     get fullName(){
//         return `${person.fName} ${person.lName}`;
// },
//    set fullName(value){
//     let parts = value.split(' ');
//     this.fName = parts[0];
//     this.lName = parts[1];    
//    }
// };
// person.fullName = 'Shivam Sharma'; 
// console.log(person.fullName);




// TRY & CATCH  ==> error handly

// let person = {
//     fName:'Vivek',
//     lName:'Sharma', 
//     get fullName(){
//         return `${person.fName} ${person.lName}`;
// },
//    set fullName(value){
//        if (typeof value !== String) {
//            throw new Error('You have not sent a string');
//        }
//     let parts = value.split(' ');
//     this.fName = parts[0];
//     this.lName = parts[1];    
//    }
// };
// // person.fullName = 'Shivam Sharma';

// try {
//     person.fullName = true;
// }
// catch (e) {
//     alert(e);
// }
// console.log(person.fullName);


// SCOPE
// {                                 **'let' keyword ka scope codeBlocks ke ander 
//     var a = 5;                    **'var' keywords ka scope function ke ander hoga agar 
// }                                    function ke ander define nhi to to entire code m access hoga
// console.log(a);

// function walk() {
//     var a = 5;
// }
// console.log(a);      //nhi chale as function ke bhar h

// for (var i = 0; i < 10; i++){         **mast chalega and gives value=10
    
// }
// console.log(i);

// if (true) {                           **mast chalega and gives a = 5
//     var a = 5;
// }
// console.log(a);

// function a() {
//     const ab = 5;
// }                                          **mast chal rha h
// const ab = 5;
// function b() {
//     const ab = 5;
// }


// ARRAY REDUCUING
// let arr = [1, 2, 3, 4];
// let total = 0;
// for (let value of arr) {
//     total = total + value;
// }
// console.log(total);

// This can be fiund using reduced operator
// let arr = [1, 2, 3, 4];
// let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// // agar 0 nhi bhejte to accumulator m 1 aur currentvalue m 2 automatically pahuch jaega 
// console.log("PRINTING THE SUM:");
// console.log(totalSum);