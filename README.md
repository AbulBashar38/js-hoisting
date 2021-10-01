# js-hoisting
```javascript
var a ='name'
console.log(a);
```
আমরা স্বাভাবিক ভাবে এই কোডের output দেখবো name.
```javascript
console.log(a);
var a ='name'
```
কিন্তু এই কোডের output দেখবো undefined. কিন্তু আমি যখন কোড প্রিন্ট করছি তার আগে তো a কে declare ই করি নাই এই ক্ষেত্রে তো error আসার কথা কিন্তু undefined আসছে কেন?
এইখানেই hoisting কাজ করেছে।
hoisting প্রথমে সকল variable কে তার scop এর উপরে তুলে দেয়। যেমনঃ
```javascript
// normal code
console.log(a);
var a ='name'
// hoisting code
var a = undefined;
console.log(a);
a = 'name';
```
কিন্তু let এর ক্ষেত্রে একটু ভিন্ন। let এর hoisting code :
```javascript
//normal code
console.log(a);
let a ='name'
//hoisting code
let a;
console.log(a);
let a = undefined;a = 'name';
```
let er ক্ষেত্রে variable উপরে declare করে কিন্তু undefined set করে না। undefine set করে যে লাইনে কোড লেখা হয়েছে ওই লাইনে।
তাই আমরা নিচের কোড লেখলে var এর মতো undefined পাই নাহ। error পাই।
```javascript
console.log(a);
let a ='name'
```
function এর ক্ষেত্রে আমরা যখন function লেখার আগে function কে call করি তখন ও কিন্তু function কাজ করে hoisting এর কারণে।
```javascript
newFunction();
function newFunction() {
    console.log('working')
}
```
var ও let এর কারনে hoisting এর output এর পার্থক্য দেখা যায়
```javascript
// with var
var LANGUAGE = 'java';
var language = 'javascript';

function getLanguage() {
    if (!language) {
        var language = LANGUAGE;
    }
    return language;
}
getLanguage() //output java

// with let
let LANGUAGE = 'java';
let language = 'javascript';

function getLanguage() {
    if (!language) {
        let language = LANGUAGE;
    }
    return language;
}
getLanguage() // out put javascript
```