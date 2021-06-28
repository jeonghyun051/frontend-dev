/* null vs undefined */

var myVar1;
// var myVar1 = undefined; 명시적으로 undefined

var myVar2 = null;

console.log(myVar1 + ":" + myVar2);
console.log(typeof(myVar1))
console.log(typeof(myVar2))

console.log(myVar1 == myVar2); // 값비교 true
console.log(myVar1 === myVar2); // 타입비교 false

console.log("=================")

// == : equality, 값의 등치성, 형변환o
console.log(4 == "4");  // true
console.log(true == 1); // true
console.log("abc" == new String("abc")); // true

console.log( true + 10 ); // 11 형변환 해준다
console.log(1 + "1"); // 11
console.log("1" + 1); // 11

console.log("===================")
// === identity, 
// 1. 타입의 동일성
// 2. 값의 동일성 또는 객체의 동일성
// 3. 형변환 x 
console.log("2" === 2); // false
console.log(true === 1); // false
console.log("2" == 2); // true
console.log(2 === 4); // false
console.log(new Number(4) === new Number(4)); // false

console.log("==================")
// 추천
// 엄격하게 형변환을 해서 두 피연산자의 타입을 맞춰준다.
var str = "5";
console.log(parseInt(str) == 5); // true 


