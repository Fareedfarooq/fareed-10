
// ***************** Q1 ***************

// var date = new Date()
 
// document.write(date)

// ***************** Q2 ***************

// function userName(FirstName , LastName){
// console.log( FirstName + " " + LastName)
// }

// var FirstName =prompt("Enter Your First Name")
// var LastName =prompt("Enter Your Last Name")

// userName (FirstName , LastName)


// ***************** Q3 ***************


// function numb(num1 , num2 ){

//     return console.log(num1+ num2)

// }

// var num1 = +prompt("Enter Your First addition number")

// var num2 = +prompt("Enter Your Second addition number")

//   var result = numb(num1 , num2)


// ***************** Q4 ***************

// function calc (number1 , oprater ,number2){
  
//     if( oprater === "+" ){
//     return number1 + number2}

//     else if( oprater === "-"){
//         return number1 - number2
//     }
//     else if ( oprater === "*"){
//         return number1 * number2
//     }
//     else if ( oprater === "/"){
//         return number1 / number2
//     }
// }

// var number1 = +prompt("Enter a first number")

// var oprater = prompt("Enter a oprater")

// var number2 = +prompt("Enter a second number")

// var result1 = calc(number1 , oprater ,number2)

// console.log(result1)


// ***************** Q5 ***************


// function arg (f,d){
//     console.log(f + " " + d)

// }

// arg("Hello","Friends")



// ***************** Q6 ***************

// function fact (number3){
//     if(number3 === 0 || number3 === 1){
//         return 1 ;
//     }

//     return number3 * fact (number3 - 1)
// }

// var number3 = 5;

// var result2 =fact (number3)

// console.log("The Fact of "+ number3 + " is " + result2 )



// ***************** Q7 ***************


// function counting(last) {
//     for(var i = 1; i <= last; i++){
//         document.write(i + ",");
//     }
// }

// var Last = prompt("Enter a Last Value")

// counting(Last)


// ***************** Q8 ***************

// function calculateHypotenuse(base, perpendicular) {

//     function calculateSquare(number) {
//         return number * number;
//     }

//     var baseSquare = calculateSquare(base);

//     var perpendicularSquare = calculateSquare(perpendicular);

//     var hypotenuse = Math.floor(baseSquare + perpendicularSquare);

//     return hypotenuse;
// }


// var baseLength = 3;

// var perpendicularLength = 4;

// var hypotenuseLength = calculateHypotenuse(baseLength, perpendicularLength);

// console.log("The hypotenuse is " + hypotenuseLength);


// ****************** Q9 ***************************



// function rectanglarea (widthdefine , heightdefine){
//    var Area = widthdefine * heightdefine

//    return Area
// }

// var widthdefine = 5 

// var heightdefine = 10

// var areaByValue = rectanglarea (widthdefine , heightdefine)

// console.log( "The area of the ractangular is " + areaByValue)


// ****************** Q10 ***************************


// function palindrome (name1 , check){

//     for(var i = name1.length - 1 ; i >= 0; i--){
//         check += name1[i]
//     }
//     if(name === check){
//         console.log(name1  +" "+"Palindrome name ")
//     }else{
//         console.log(name1 + " "+ " not a Palindrome name")
//     }

// }

// var name1 = prompt("Enter a word")

// var check = ""

// palindrome(name1 , check)



// ****************** Q11 ***************************


// function findLongestWord(inputString) {
    
//     var words = inputString.split(' ');
  
//     var longestWord = '';

//     var longestLength = 0;
  
    
//     for (var word of words) {

//       var cleanedWord = word.replace(/[^A-Za-z0-9]/g, '');
  
//       if (cleanedWord.length > longestLength) {
//         longestWord = cleanedWord;
//         longestLength = cleanedWord.length;
//       }
//     }
  
//     return longestWord;
//   }
  
  
//   var inputString = 'this concept not a clear';

//   var longestWord = findLongestWord(inputString);

//   console.log("The longest word in the string is: " + longestWord);

  
// ****************** Q12 ***************************



// function count(inputString, letterString) {
//     var counter = 0;

//     for(var i = 0; i <= inputString.length; i++){
//         if (inputString[i] === letterString) {
//             counter++
//         }
//     }

//     return counter
// }

// var inputString = "JsResources.com"

// var letterString = "o"

// var result = count(inputString, letterString)

// console.log("The letter " + letterString + " appears " + result + " time in the string");



// ****************** Q13 ***************************


// function calcCircumference(radius) {
//     var Circumference = 2 * Math.PI * radius;

//     console.log("The Circumference is " + Circumference.toFixed(2));
// }

// function calcArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);

//     console.log("The area is " + area.toFixed(2));
// }

// var radius = 5;

// calcCircumference(radius)

// calcArea(radius)

