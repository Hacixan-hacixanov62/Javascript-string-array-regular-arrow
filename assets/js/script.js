"use strict";
// document.querySelector("h1"),innerText = person.name

// let datas =[
//     {
//         name:"Fatime",
//         surname:"Qayxanova",
//         groups:[
//             "PB101",
//             "P314"
//         ],
//         teachers:[
//             "Cavid",
//             "Hemid"
//         ]
//     },
//     {
//         name:"Fexriyye",
//         surname:"Tagizade",
//         groups:[
//             "PB101",

//         ],
//         teachers:[
//             "Cavid",

//         ]
//     },
//     {
//         name:"Afide",
//         surname:"Veliyeva",
//         groups:[
//             "PB101",
//             "P312"
//         ],
//         teachers:[
//             "Cavid",
//             "Elcin"
//         ]
//     }
// ]

// console.log(datas)


//let fullName = "Tagizade Fexriyye";

//console.log(surname.length)

// console.log(surname.toLowerCase())

// console.log(surname.toUpperCase)

//console.log(surname.trim())

//console.log(surname.startsWith("T"))

// console.log(surname.indexOf("a"))

// console.log(surname.lastIndexOf("a"))

//console.log(surname.substring(0,2))

// for (let i = 0; i < array.length; i++) {
//     const element = surname[i];

//     console.log(element)
// }

// console.log(surname.includes("t").toUpperCase())

// let array =surname.split("")

// console.log(array)


// console.log(surname.charAt(0))

// console.log(surname.charAt("T"))

//console.log(surname.charAt("T"))

// let nums= [1,4,5,6,7,8,8];

// for (const item of nums) {

//     console.log(item)
// }



//  let person = {
//      name:"Nurlan",
//      surname:"Umudov",
//      age:22
//  }

// //  for (const key in object) {
// //     console.log(key)
// //  }


// for (const key in object) {
//     console.log(person[key])
//  }



//  let nums= [1,4,5,6,7,8,8];

// nums.forEach(element =>  {
//     console.log(element + " " +i)
// });

//let data = nums.toString();

//let data =nums.join("-");

//nums.pop();

//nums.push(100);   

// nums.shift();

// nums.unshift();

//console.log(data)

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);

// console.log(myChildren)

// let address= "Ehmedli";

// let result = [...address]

// console.log(result)

// let obj = {
//     name: "test",
//     surname:"testov"
// }
// let data = {...obj};

// console.log(data)


// let nums= [1,4,5,6,7,8,8];

// let datas = {...nums};

// console.log(datas)

// showText();

// function  showText() {
//     console.log("Hello world")

// }     



// showText();


// function  showText() {
//     let a =100;
//     if(a> 50){
//     console.log("Hello world")
//     }

// }     



// showText();


// function  showText(text) {
//    console.log(text)

// }     

// showText("salamlar");


// function sum (a,b){
//     let result = a+b
//     console.log(result)
// }

// sum(100,200);



// function sum (a,b){
//     let result = a+b;
//     return
//     console.log(result)
// }

// sum(100,200);


// function finddate(arr) {

//     for (const itemr of arr) {
//         if (item == 100) {
//             console.log("100 already found");
//             break;
//         }
//     }

//     console.log("Welcome to our site")
// }

// let datas = [1,2,100,5,600,9,90];
// findDate(datas)

// function sum(a,b){
//     return a+b;
// }

// let result = sum(4,5);
// console.log(result)

// function test() {
//     let datas = [1, 2, 100, 5, 600, 9, 90];
//     let newarr = ["salam", "sagol"];


//     datas = newArr;

//     newArr[0] = 100;

//     console.log(datas);

//     console.log(newArr);
// }

// test()

// function test(arr){
//     arr = newarr;
//     console.log(arr);
// }

// let elems1 = [1,2,34];

// let elem2 = [4,5,6];

// elems1 = elems2;

// elems2[0] = 100;

// console.log(elems1)
// console.log(elems2)



// test(datas);

// console.log(datas);

// let arr1 = [1,2,3];

// let arr2 = arr1;

// arr2[0] = 100;

// console.log(arr1);
// console.log(arr2);



// let b = 100;

// function test(a){
//     a = 20;
//     console.log(a);
// }

// test(b);

// console.log(b);


//  function test(a,...datas){
//     for (let i = 0; i < datas.length; i++) {
//         const element = datas[i];
//         console.log(element)
//     }
// datas.forEach(element => {
//     console.log(element)
// });
// }

//  test(1,2,3,4,5) 


// function test(){
    // for (let i = 0; i < arguments.length; i++) {
    //    const element = arguments[i];
    //    console.log(element)
    // }
// }

// test(1,2,3,4,5)


// console.log(this)

// function showNumber() {
//     console.log(this)
// }

// showNumber();

// const showText = () => {
//     console.log(this)
// }

// showText("Nesir bey");


// let student = {
//     name: "Reshad",
//     surname: "Agayev",
//     age: 21,
//     address: "Neftciler",
//     getFullName:function(){
//         console.log(this)
//     },
//     getFullData:()=>{
//         console.log(this.name + " " + this.surname)
//     }
// }

// student.getFullData();
// student.getFullName();

// const test = () => {
//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         console.log(element)
        
//     }
// }

// test(1,2,3,4,5)

// function test() {
//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         console.log(element)
        
//     }
// }

// test(1,2,3,4,5)

// this.alert();

// document.querySelector("button").addEventListener("click",function(){
//     //console.log(this)
//     //this.style.backgroundColor = "red";
//     window.location.reload()
// })








// TASKS :

// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// function divide(n){
//         if(n%3==0 && n%7==0){
//             console.log("Divided");
    
//         }else{
//             console.log("Not divided");
//         }
//     }
//     divide(24);
    
    
//2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 
    
    // function Faktorial(n) {
    //     let result = 1;
    
    //     for (let i = n; i > 0; i--) {
    
    //         result *= i;
    
    //     }
    //     return result
    
    
    // }
    
    // console.log(Faktorial(5));
    
 // 3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.
    
    // let datas=[1,2,3,4,6,8,9]
    
    // function squareOffSum(arr)
    // {
    //     let sum=0;
    
    //     for (const item of datas) {
    //         if(item%2==0){
    //             sum+=item**2
    //         }
            
    //     }
    //     return sum
    
    // }
    
    // console.log(squareOffSum(datas));
    
    
// 4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e,
  // ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 
  
    // function Login(email,password){
    //     if(email=="cavid@code.edu.az" && password=="12345"){
    //         return "login success"
    //     }
    //     else{
    //         return "email or password wrong"
    //     }
    
    // }
    
    // console.log(Login("cavid@code.edu.az","1235"));
    
 //5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.
    // let datas=[1,2,3,4,5,6,8,9]
    
    // function sumOfAddNumbers(arr){
    //     let sum=0;
    //     for (const item of datas) {
    //         if(item%2==1){
    //             sum+=item
    //         }
            
    //     }
    //     return sum;
    // }
    
    // console.log(sumOfAddNumbers(datas));
    
    
 //6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.
    
    // let datas=[1,2,3,4,5,6,8,9]
    
    // function sumOfEvenNumbers(arr){
    //     let sum=0;
    //     for (const item of datas) {
    //         if(item%2==0){
    //             sum+=item
    //         }
            
    //     }
    //     return sum;
    // }
    
    // console.log(sumOfEvenNumbers(datas));
    
    
 // 9) Function yazacaqsiz, Functiona parametr olaraq string gelecek. Hemin function gelen parametrin ilk herfini boyuk herf edib geri qaytarsin.
    
    // function firstCharToUpper(str){
    //     return str.charAt(0).toUpperCase()+str.slice(1)
    // }
    
    // let str="hacixan";
    // console.log(firstCharToUpper(str));
    
// 8) Icerisinde name, surname, age, email olan bir nece student objectleriniz var. Ashagida elave etdiklerimi functionlar sekilinde yazin, functionlar objectlerden ibaret array qebul edecek.
        // 1) Yashi 18-25 araliginda olan telebelerin sayi.
        // 2) Emailinde "c" herfi olan studentlerin sayi.
    
    // let nums = [
    //     {
    //         name: "Behruz",
    //         surname: "Aliyev",
    //         age:37,
    //         email:"behruzz@code.edu.az"
    
    
    //     },
    //     {
    //         name: "Esgerxan",
    //         surname: "Bayramov",
    //         age:26,
    //         email:"esgerxan@gmail.com"
    //     },
    //     {
    //         name: "Ilqar",
    //         surname: "Shiriyev",
    //         age:25,
    //         email:"ilqar@mail.ru"
    //     },
    //     {
    //         name: "Amirastan",
    //         surname: "Mereyev",
    //         age:33,
    //         email:"amirastan@code.edu.az"
    //     },
    //     {
    //         name: "Ismayil",
    //         surname: "Ceferzade",
    //         age:26,
    //         email:"ismayil@mail.ru"
    //     }
    
    // ]
    
    
    // function countStudentAge(arr){
    //     let count=0;
    // for (const item of nums) {
     
    //     if(item.age>=18 && item.age<=25){
    //         count++;
    //     }
        
    //    }
    //     return count;
    // }
    
    // console.log(countStudentAge(nums));
    
    
    
    // function countStudentsForEmail(arr) {
    //     let count = 0;
    //     for (const item of nums) {
    //         if (item.email.includes("c")) {
    //             count++;
    //         }
    //     }
    //     return count;
    // }
    
    // console.log(countStudentsForEmail(nums));