/*
자바스크립트 객체 4:
prototype 기반의 상속, 오버라이딩(객체스크립트)
*/

var MyObject = function(name, age){
    this.name = name;
    this.age = age;
}

MyObject.prototype.school = 'bit';
MyObject.prototype.course = 'douzone';
MyObject.prototype.info = function(){
    console.log(
        this.name   + ":" + 
        this.age    + ":" + 
        this.school + ":" + 
        this.course);
}

console.log(typeof(Object.prototype))
console.log(typeof(Number.prototype))

// MyObject 객체 생성1
// var o1 = new MyObject("둘리",10);
// console.log(o1.school);
// console.log(o1.info);
// o1.school = 'multicampus';
// console.log(o1);
// console.log(o1.school + ":" + o1.name);

// var o2 = new MyObject("마이콜",20);
// o2.info();

// o2.info = function(){
//     console.log("비밀11");
// }
// o2.info();