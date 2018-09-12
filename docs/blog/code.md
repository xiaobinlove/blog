# code

## 基本的格式化

### 1.1 缩进层级

* ```使用空格符进行缩进;```

* ```四个空格符表示一个缩进层级;```

```javascript
function demo() {
    console.log('hello world');
}
```

### 1.2 语句结尾

* ```使用分号结尾;```

```javascript
// 正确的代码
let name = 'Nicholas';
function sayName() {
    alert(name);
}
```

* 错误实例：因ASI的分号插入规则复杂难记，会造成与原代码不同的执行结果；

```javascript
// 原始代码
function getData() {
    return
    {
        title: '',
        author: ''
    }
}
// 分析器会理解成
function getData () {
    return;
    {
        title: '',
        author: ''
    };
}
```

### 1.3 行的长度

* ```指定一行代码长度限定在80个字符；```

### 1.4 换行

* ```当一行长度超过最大字符数限制（80个字符），需手动将一行代码拆成两行，且下一行增加两个层级的缩进；```

```javascript
// 正确做法： 在运算符后换行，第二行追加两个缩进层级
callAFunction(document, element, window, 'some string value', true, 123,
        navigator);

// 不好的做法：第二行只有一个缩进
callAFunction(document, element, window, 'some string value', true, 123,
    navigator);

// 不好的做法：在运算符之前换行了
callAFunction(document, element, window, 'some string value', true, 123
        , navigator);
```

* ```注意：逗号也算一个运算符，应当作为前一行当结尾;```

* ```变量赋值时，第二行的位置应当与赋值运算符的位置保持对齐;```

```javascript
// 正确的做法
let result = something + anotherThing + yetAnotherThing + somethingElse +
             anotherSomethingElse;
// 确保代码的可读性，并能一眼看清折行的上下文
```

### 1.5 空行

* ```在方法之间加入空行```

* ```在方法中的局部变量和第一条语句之间加入空行```

* ```在多行或单行注释之前加入空行```

* ```在方法内的逻辑片段之间插入空行，提高可读性```

* ```在方法之间加入空行```

```javascript
// 好的写法
function anther () {

    for (let i = 0; i < wl.length; i++) {

        // 内部逻辑
        p = wl[i];

        if (s.hasOwnProperty(p)) {

            if (merge && type === 'object') {
                y.min(r[p], s[p]);
            } else {
                r[p] = s[p];
            }
        }
    }
}

/*
*多行注释
*/
function bather() {}
```

### 1.6 **命名**

* ```驼峰式大小写：小写字母开始，后续每个单词首字母都大写;```

```javascript
// 好的写法
let thisIsMyName;
let anotherletiable;
let aVeryLongariableName;
```

### 1.6.1 **变量和函数**

* ```变量名需总是遵守驼峰式大小写命名法，且命名前缀为【名词】，以名词做前缀可以让变量与函数区分开来；函数名前缀为【动词】```

```javascript
// 变量: 好的写法
let count = 10;
let myName = 'Nicholas';
let found = true;

// 不好的写法：变量看起来像函数
let getCount = 10;
let isFound = true;

// 函数： 好的写法
function getName () {
    return myName;
}

// 不好的写法： 函数看起来像变量
function theName() {
    return myName;
}
```

* ```对于函数和方法命名，第一个单词应该式动词；常见的一些使用动词的约定```
  
|动词|含义|
|:-: | :-:|
|   can     |函数返回一个布尔值|  
|   has     |函数返回一个布尔值|  
|   is     |函数返回一个布尔值|  
|   get     |函数返回一个非布尔值|  
|   set     |函数用来保存一个值|

### 1.6.2 **常量**

* ```常量使用大写字母和下划线来命名，下划线用以分割单词```

```javascript
let MAX_COUNT = 10;
let URL = 'http://www.nczonline.net/';
```

### 1.6.3 **构造函数**

* ```构造函数以'驼峰式大小写'命名,首字母为大写，名词```

```javascript
// 好的做法
function Person(name) {
    this.name = name
}

Person.prototype.sayName = function() {
    alert(this.name);
};

let me = new Person('Nicholas')
```

### 1.7 直接量

### 1.7.1 字符串

* ```静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。并从头到尾保持一种风格```

```javascript
// 不好的写法
const a = "foobar";
const b = 'foo' + a + 'bar';

// 可接受的写法
const c = `foobar`;

// 好的写法
const a = 'foobar';
const b = `foo${a}bar`;
const c = 'foobar';
```

### 1.7.2 数字

* ```在js中不可省略小数部分或者整数部分```

```javascript
// 整数
let count = 10;

// 小数
let price = 10.0;
let price = 10.00;

// 不推荐的小数写法：没有小数部分
let price = 10.;

//不推荐的小数写法： 没有整数部分
let price = .1;

//不推荐的写法： 八进制写法已经被弃用了
let num = 010;

// 十六进制写法
let num = 0xA2

// 科学计数法
let num = 1e23;
```

### 1.7.3 null

* ```null是个特殊值，切勿与undefind搞混;```
* ```null用来初始化一个变量，这个变量可能赋值为一个对象；```
* ```null用来和一个已经初始化的变量比较，这个变量有可能是也可能不是一个对象；```
* ```当函数的参数期望是对象时，用作参数传入；```
* ```当函数的返回值期望是对象时，用作返回值传出；```
* ```不要使用null来检测是否传入了某个参数；```
* ```不要用null来检测一个未初始化的变量```

```javascript
// 好的用法
let person = null;

// 好的用法
function getPerson() {
    if (condition) {
        return new Person('Nicholas')
    } else {
        return null;
    }
}

// 好的用法
let person = getPerson()
if (person !== null) {
    doSomething();
}

// 不好的写法： 用来和未初始化的变量比较
let person;
if (person !== null) {
    doSomething();
}

// 不好的写法： 检测是否传入了参数
function doSomething(arg1, agr2, arg3, arg4) {
    if (arg4 !== null) {
        doSomethingElse();
    }
}
```

* ```理解null最好的方式时将它当作对象的占位符；```

### 1.7.4 undefined

* ```未被初始化的变量都有一个初始值，即undefined;表示这个变量等待被赋值```

``` javascript
// 不好的写法
let person;
console.log(person === undefined); // true
```

* ```尽量避免在代码中使用undefined,这个值常常与返回'undefined'的typeof运算符混淆。```

```javascript
// foo未被声明
let person;
console.log(typeof person); // 'undefined'
console.log(typeof foo);    // 'undefined'
```

* ```通过禁止使用特殊值 undefined, 可以有效的保证只有一种情况下typeof才会返回'undefined'。如果使用了一个可能（或不可能）赋值为一个对象的变量时，则将其赋值为null。```

```javascript
// 好的做法
let person = null;
console.log(person === null);   // true
```

### 1.7.5 对象直接量

* ```对象直接量允许将所有的属性都括在一对花括号中；```

```javascript
// 好的写法
let book = {
    title: '',
    author: ''
}

// 不好的写法
let book = new Object();
book.title = '';
book.author = '';
```

* ```单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。```

```javascript
// bad
const a = { k1: v1, k2: v2, };
const b = {
  k1: v1,
  k2: v2
};

// good
const a = { k1: v1, k2: v2 };
const b = {
  k1: v1,
  k2: v2,
};
```

* ```对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。```

```javascript
// bad
const a = {};
a.x = 3;

// if reshape unavoidable
const a = {};
Object.assign(a, { x: 3 });

// good
const a = { x: null };
a.x = 3;
```

* ```如果对象的属性名是动态的，可以在创造对象的时候，使用属性表达式定义。```

```javascript
// bad
const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
```

* ```上面代码中，对象obj的最后一个属性名，需要计算得到。这时最好采用属性表达式，在新建obj的时候，将该属性与其他属性定义在一起。这样一来，所有属性就在一个地方定义了。```
* ```另外，对象的属性和方法，尽量采用简洁表达法，这样易于描述和书写。```

```javascript
var ref = 'some value';

// bad
const atom = {
  ref: ref,

  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// good
const atom = {
  ref,

  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};
```

### 1.7.6 数组直接量

* ```使用两个方括号将数组初始元素括起来，来替代Array的方式创建数组;```

```javascript
// 好的写法
let colors = ['red', 'green', 'blur'];
let numbers = [1,2,3,4];

// 不好的写法
let color = new Array('red', 'green', 'blur')
let numbers = new Array(1,2,3,4);
```

* ```使用扩展运算符（...）拷贝数组。```

```javascript
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```

* ```使用 Array.from 方法，将类似数组的对象转为数组。```

```javascript
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);
```

### 1.8 ES6解构赋值

* ```使用数组成员对变量赋值时，优先使用解构赋值。```

```javascript
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

* ```函数的参数如果是对象的成员，优先使用解构赋值。```

```javascript
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;
}

// good
function getFullName(obj) {
  const { firstName, lastName } = obj;
}

// best
function getFullName({ firstName, lastName }) {
}
```

* ```如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序。```

```javascript
// bad
function processInput(input) {
  return [left, right, top, bottom];
}

// good
function processInput(input) {
  return { left, right, top, bottom };
}

const { left, right } = processInput(input);
```

## 2. 注释

* ```代码晦涩难懂```
* ```可能被误认为错误的代码```
* ```必要但不明显的针对特定浏览器的代码```
* ```对于对象、方法或者属性，生成文档是有必要的（使用恰当的文档注释）```

### 2.1 单行注释

* ```独占一行，用来解释下一行代码，且缩进层级和下一行代码保持一致;```
* ```在代码行的尾部的注释，代码结束到注释之间至少有一个缩进，且不超过单行最大字符数限制，如果超过，则放置在代码行的上方；```

```javascript
// 好的写法
if (condition) {

    // 代码执行逻辑
    allowed();
}

// 不好的写法：注释之前没有空行
if (condition) {
    // 代码逻辑
    allowed();
}

// 不好的写法： 错误的缩进
if (condition) {
// 代码执行逻辑
    allowed();
}

// 好的写法
let result = something + somethingElse; // 代码执行逻辑

// 不好的写法: 代码和注释之间没有间隔；
let result = something + somethingElse;// 代码执行逻辑
```

### 2.2 多行注释

* ```多行注释之前应当有一个空行，且缩进层级和其描述的代码保持一致；```

```javascript
// 好的写法
if (condition) {

    /*
    * 代码执行逻辑
    * 代码执行逻辑
    */
    allowed();
}
```

### 2.3 使用注释

* ```当代码不够清晰时添加注释，当代码很明了时不应当添加注释；```
* ```添加注释的一般原则是：在需要让代码变的更清晰时添加注释;```

```javascript
// 不好的写法

// 初始化count
let count = 10;

// 好的写法

//改变这个值可能会让它变成青蛙
let count = 10;
```

## 3. 语句和表达式

* ```在JavaScript中，不论块语句包含多行代码还是单行代码，都应该使用花括号```

```javascript
// 好的写法
if (condition) {
    doSomething();
}

// 不好的写法
if(condition)
    doSomething();

// 不好的写法
if(condition) doSomething();

// 不好的写法
if (condition) { doSomething(); }
```

### 3.1 花括号的对齐方式

* ```推荐使用的花括号对齐风格是：将左花括号放置在块语句的第一句代码的末尾。```

```javascript
// 好的做法
if (condition) {
    doSomething();
} else {
    doSomethingElse();
}
```

### 3.2 块语句间隔

* ```推荐风格：在括左圆括号之前和括右圆括号之后各添加一个空格```

```javascript
// 好的做法
if (condition) {
    doSomething();
}
```

### 3.3 switch语句

* ```无论何时都不应该省略default```

```javascript
// 好的做法
switch (condithing) {
    case 'first'
        // 代码
        break;
    default:
        // default中没有逻辑
}
```

## 4.变量、函数、运算符、Class

### 4.1 变量声明

* ```ES6 提出了两个新的声明变量的命令：let和const。其中，let完全可以取代let，因为两者语义相同，而且let没有副作用。```

```javascript
'use strict';

if (true) {
  let x = 'hello';
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

* ```建议不再使用var命令，而是使用let命令取代。```

```javascript
'use strict';

if (true) {
  console.log(x); // ReferenceError
  let x = 'hello';
}
```

* ```let命令存在变量提升效用，let命令没有这个问题```

* ```必须将所有的变量声明放在函数顶部，而不是散落在各个角落```

```javascript
// 好的做法
function doSomething(items) {
    let i, len;
    let value = 10;
    let result = value + 10;

    for (i = 0; len = items.length; i < len; i++) {
        doSomething();
    }
}
```

* ```合并let语句，可以让代码更短更快：每个变量的初始化独占一行，赋值运算符应当对齐，没有初始值的变量，应当出现在let语句的尾部；```

```javascript
// 好的做法
function doSomething() {
    let value = 10,
        result = value + 10,
        i, len;
    for (i = 0; len = items.length; i < len; i++) {
        doSomething();
    }
}
```

* ```在let和const之间，建议优先使用const，尤其是在全局环境，不应该设置变量，只应设置常量```

```javascript
// 不好的写法
var a = 1, b = 2, c = 3;

// 好的写法
const a = 1;
const b = 2;
const c = 3;

// 最好的写法
const [a, b, c] = [1, 2, 3];
```

* ```所有的函数都应该设置常量```

### 4.2 函数

* ```必须先声明javascript函数再使用函数```

```javascript
// 好的写法
function doSomething() {
    alert('');
}

doSomething();

// 不好的写法
doSomething();

function doSomething() {
    alert('');
}
```

* ```立即执行函数可以写成箭头函数的形式。```

```javascript
(() => {
  console.log('Welcome to the Internet.');
})();
```

* ```那些需要使用函数表达式的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了 this。```

```javascript
// bad
[1, 2, 3].map(function (x) {
  return x * x;
});

// good
[1, 2, 3].map((x) => {
  return x * x;
});

// best
[1, 2, 3].map(x => x * x);
```

* ```箭头函数取代Function.prototype.bind，不应再用 self/_this/that 绑定 this。```

```javascript
// bad
const self = this;
const boundMethod = function(...params) {
  return method.apply(self, params);
}

// acceptable
const boundMethod = method.bind(this);

// best
const boundMethod = (...params) => method.apply(this, params);
```

* ```简单的、单行的、不会复用的函数，建议采用箭头函数。如果函数体较为复杂，行数较多，还是应该采用传统的函数写法```
* ```所有配置项都应该集中在一个对象，放在最后一个参数，布尔值不可以直接作为参数。```

```javascript
// bad
function divide(a, b, option = false ) {
}

// good
function divide(a, b, { option = false } = {}) {
}
```

* ```不要在函数体内使用 arguments 变量，使用 rest 运算符（...）代替。因为 rest 运算符显式表明你想要获取参数，而且 arguments 是一个类似数组的对象，而 rest 运算符可以提供一个真正的数组。```

```javascript
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// good
function concatenateAll(...args) {
  return args.join('');
}
```

* ```使用默认值语法设置函数参数的默认值。```

```javascript
// bad
function handleThings(opts) {
  opts = opts || {};
}

// good
function handleThings(opts = {}) {
  // ...
}
```

### 4.3 严格模式

* ```不要在全局作用域中使用"use strict"```

```javascript
// 不好的写法
"use strict"
function doSomething() {
    // 代码
}

// 好的写法
function doSomething() {
    "use strict"
    // 代码
}
```

### 4.4 相等

* ```所有情景下都应当使用全等===和不全等!==```

### 4.5 原始包装类型

* ```尽量禁止使用原始包装类型（String、Number、Boolean）来创建新对象```

```javascript
// 不好的做法
let name = new String('Nicholas');
let author = new Boolean(true);
let count = new Number(10);
```

### 4.6 Map结构

* ```注意区分 Object 和 Map，只有模拟现实世界的实体对象时，才使用 Object。如果只是需要key: value的数据结构，使用 Map 结构。因为 Map 有内建的遍历机制。```

```javascript
let map = new Map(arr);

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}

```

### 4.7 Class

* ```总是用 Class，取代需要 prototype 的操作。因为 Class 的写法更简洁，更易于理解。```

```javascript
// bad
function Queue(contents = []) {
  this._queue = [...contents];
}
Queue.prototype.pop = function() {
  const value = this._queue[0];
  this._queue.splice(0, 1);
  return value;
}

// good
class Queue {
  constructor(contents = []) {
    this._queue = [...contents];
  }
  pop() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
}
```

* ```使用extends实现继承，因为这样更简单，不会有破坏instanceof运算的危险。```

```javascript
// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this._queue[0];
}

// good
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0];
  }
}
```

### 4.8 模块

* ```Module 语法是 JavaScript 模块的标准写法，坚持使用这种写法。使用import取代require。```

```javascript
// bad
const moduleA = require('moduleA');
const func1 = moduleA.func1;
const func2 = moduleA.func2;

// good
import { func1, func2 } from 'moduleA';
```

* ```使用export取代module.exports。```

```javascript
// commonJS的写法
var React = require('react');

var Breadcrumbs = React.createClass({
  render() {
    return <nav />;
  }
});

module.exports = Breadcrumbs;

// ES6的写法
import React from 'react';

class Breadcrumbs extends React.Component {
  render() {
    return <nav />;
  }
};

export default Breadcrumbs;
```

* ```如果模块只有一个输出值，就使用export default，如果模块有多个输出值，就不使用export default，export default与普通的export不要同时使用。```

* ```不要在模块输入中使用通配符。因为这样可以确保你的模块之中，有一个默认输出（export default）。```

```javascript
// bad
import * as myObject from './importModule';

// good
import myObject from './importModule';
```

* ```如果模块默认输出一个函数，函数名的首字母应该小写。```

```javascript
function makeStyleGuide() {
}

export default makeStyleGuide;
```

* ```如果模块默认输出一个对象，对象名的首字母应该大写。```

```javascript
const StyleGuide = {
  es6: {
  }
};

export default StyleGuide;
```

## 5. 避免使用全局变量

* ```在浏览器中，window对象往往重载并等同于全局对象，，因此任何在全局作用域中声明点变量和函数都是window对象的属性；```

## 6.事件处理

* ```最佳实践：将应用逻辑从所有事件处理程序中抽离出来```

* ```规则 1: 隔离应用逻辑;```

```javascript
// 好的写法
let myApplication = {
    handleClick: function(event) {
        this.showPopup(event)
    },
    showPopup: function(event) {
        let popup = document.getElementById('popup');
        popup.style.left = event.clientX + 'px';
        popup.style.top = event.clientY + 'px';
        popup.className = 'reveal'
    }
};

addListener(element, 'click', function(event) {
    MyApplication.handleClick(event);
});
```

* ```规则 2: 不要分发事件对象, 最佳点办法是让事件处理程序使用event对象来处理事件；然后拿到所需要的数据传给应用逻辑```

```javascript
// 好的写法
let myApplication = {
    handleClick: function(event) {
        this.showPopup(event.clientX, event.clientY)
    },
    showPopup: function(x,y) {
        let popup = document.getElementById('popup');
        popup.style.left = x + 'px';
        popup.style.top = y + 'px';
        popup.className = 'reveal'
    }
};

addListener(element, 'click', function(event) {
    MyApplication.handleClick(event);
});

```

## 7. 避免空比较

```javascript
let Controller = {
    process: function(items) {
        if (items !== null) {   // 不好的写法
            items.sort();
            items.forEach(function() {
                // 执行逻辑
            })
        }
    }
}
```

## 7.1 检测原始值

* ```javascript有五种原始类型：字符串、数字、布尔值、null、undefined```
* ```判断五种原始类型，最好使用typeo运算符；```
* ```typeof运算符会返回一个表示值的类型的字符串```

```javascript
// 检测字符串
if (typeof name === 'string') {
    anotherName = name.substring(3);
}

// 检测数字
if (typeof count === 'number') {
    updateCount(count);
}

// 检测布尔值
if (typeof found === 'boolean' && found) {
    message('Found');
}

// 检测undefined
if (typeof MyApp === 'undefined') {
    MyApp = {}
}
```

* ```未定义到变量和值为undefined的变量，通过typeof都将返回'undefined'```
* ```原始值 null ,一般不用于检测语句，如果需要检测null,最好使用===或!==```

```javascript
typeof null 返回 'object'
编程时需要杜绝使用typeof来检测null的类型
```

### 7.2 检测引用值

* ```检测某个引用值的类型的最好方法是使用instanceof运算符```

```javascript
value instanceof constructor

// 检测日期
if (value instanceof Date) {
    console.log(value.getFullYear());
}

// 检测正则表达式
if (value instanceof RegExp) {
    if (value.test(anotherValue)) {
        console.log('Mathces');
    }
}

// 检测Error
if (value instanceof Error) {
    throw value;
}
```

* ```instanceof运算符可用于检测自定义的类型```

```javascript
function Person(name) {
    this.name = name;
}
let me = new Person('Nicholas');

console.log(me instanceof Object); // true
console.log(me instanceof Person); // true
```

### 7.2.1 检测函数

* ```javascript中的函数都是引用类型，同样存在Function构造函数，每个函数都是其实例;```

```javascript
function myFunc() {};

// 不好的写法
console.log(myFunc instanceof Function); // true
// 然而这个方法不能跨帧(frame)使用，因为每个帧都有各自的Function构造函数。但是可以使用typeof运算符检测函数

// 好的写法
console.log(typeof myFunc === 'function')
```

### 7.3 检测属性

* ```判断属性是否存在的最好办法是使用in运算符```

* ```in运算符仅仅会简单的判断属性是否存在，而不会去读取属性到值```

```javascript
let object = {
    count: 0,
    related:null
}

// 好的写法
if ('count' in object) {
    // 这里的代码会执行
}

// 不好的写法: 检测假值
if (object['count']) {
    // 这里的代码不会执行
}

// 好的写法
if ('related' in object) {
    // 这里的代码会执行
}

// 不好的写法： 检测是否为null
if (object['related'] !== null) {
    // 这里的代码不会执行
}
```

* ```检测实例对象的某个属性是否存在，则使用hasOwnProperty()方法，如果实例存在这个属性则返回true(如果这个属性只存在于原型里，则返回false)```

```javascript
// 对于所有非dom对象，这是最好的办法
if (object.hasOwnProperty('related')) {
    // 执行这里的代码
}

// 如果不确定是否为dom对象，
if ('hasOwnProperty' in object && object.hasOwnProperty('related')) {
    // 执行这里的代码
}
```

## 8 将配置数据从代码中分离出来

### 8.1 什么是配置数据

* ```配置数据是应用中写死的值```

```javascript
function validate(value) {
    if (!value) {
        alert('Invalid value')  // 可能会修改替换
        location.href = '/errors/invalid.php';  // 可能会修改替换
    }
}

function toggleSelected(element) {
    if (hasClass(element, 'selected')) {    // 'selected' 可能会修改替换
        removeClass(element, 'selected');   // 'selected' 可能会修改替换
    } else {
        addClass(element, 'selected')   // 'selected' 可能会修改替换

    }
}
```

* ```URL```
* ```需要展现给用户的字符串```
* ```重复的值```
* ```设置（比如每页的配置项)```
* ```任何可能发生变更的值```

### 8.2 抽离配置数据

* ```将配置数据从代码中抽离出来的第一步是将配置数据拿到外部，即将数据从JavaScript代码之中拿掉```

```javascript
let config = {
    MSG_INVALID_VALUE: 'Invalid value',
    URL_INVALID: 'errors/invalid.php',
    CSS_SELECTED: 'selected'
}
function validate(value) {
    if (!value) {
        alert(config.MSG_INVALID_VALUE);
        location.href = config.URL_INVALID;
    }
}
function toggleSelected(element) {
    if (hasClass(element, config.CSS_SELECTED)) {    // 'selected' 可能会修改替换
        removeClass(element, config.CSS_SELECTED);   // 'selected' 可能会修改替换
    } else {
        addClass(element, config.CSS_SELECTED)   // 'selected' 可能会修改替换

    }
}
```

### 8.3 保存配置数据

* ```配置数据最好放在单独的文件中，以便清晰的分隔数据和应用逻辑```
* ```将配置文件置于单独的JavaScript文件中,是一个不错的开始。一旦配置数据存放于单独的文件中，就可以管理这些数据```

## 9. 抛出自定义错误

### 9.1 在JavaScript中抛出错误

* ```使用throw操作符，将提供的一个对象作为错误抛出。```
* ```任何类型的对象都可以作为错误抛出，Error对象是最常用的```

> throw new Error('something bad happend')

```javascript
  // 不好的写法
  throw 'message';
```

* ```如果没有通过try-catch语句捕获，抛出任何值将引发一个错误```
* ```唯一不出差错的显示自动移动错误消息的方式就是使用一个Error对象```

### 9.2 抛出错误的好处

* ```抛出自己的错误可以使用确切的文本供浏览器显示```
* ```在错误消息中包含函数名称以及函数失败的原因```

### 9.3 何时抛出错误

* ```一旦修复了一个很难调试的错误，尝试增加一两个自定义错误，当再次发生错误时，这将有帮助于更容易的解决问题```
* ```如果正在编写代码，思考一下：“我希望【某些事情】不会发生，如果发生，我的代码会一团糟糕”。这时，如果“某些事情”发生，就抛出一个错误```
* ```如果正在编写的代码别人也会使用，思考一下他们的使用方式，在特定的情况下抛出错误```

> 请牢记，我们多目的不是防止错误，而是在错误发生时能更加容易的调试

### 9.4 try-catch语句

* ```将可能引发错误的代码放在try块中，处理错误的的代码放在catch块中```

```javascript
try {
    somethingThatMighCauseAnError();
} catch (ex) {
    handleError(ex)
}
```

> 当try块中发生一个错误时，程序立即停止执行，然后跳到catch块，并传入一个错误对象。检测该对象可以确定从错误中恢复的最佳动作。

* ```可以增加finally块。finally块中的代码不管是否有错误发生，最后都会被执行。```

```javascript
try {
    somethingThatMighCauseAnError();
} catch (ex) {
    handleError(ex)
} finally {
    continue;
}
```

> 注意：如果try块中包含了一个return语句，实际上必须等到finally块中的代码执行后才能返回，因此，finally其实不太常用，但是如果处理错误必要，它仍是处理错误的一个强大工具；

* ```使用throw还是try-catch```
* ```千万不要将try-catch中的catch留空，需写点错误处理逻辑来处理错误。```

```javascript
// 不好的写法
try {
    somethingThatMighCauseAnError();
} catch (ex) {
    // 空
}
```

### 9.5 错误类型

* Error: 所有错误的基本类型;
  * EvalError: 通过eval()函数执行代码发生错误时抛出;
  * RangeError: 一个数字超出它的边界时抛出;
  * SyntaxError: 期望的对象不存在时抛出;
  * TypeError: 变量不是期望的类型时抛出;
  * URIError: 给encodeURL()、encodeURLComponent()、decodeURL()等函数传递格式非法的URL字符串时抛出;

* ```创建自己的错误类型，继承Error，这种做法允许你提供额外的信息，同时可区别与浏览器抛出的错误。```

```javascript
function MyError(message) {
    this.message = message;
}
MyError.prototype = new Error();

这段代码有两个重要的部分：message属性，浏览器必须要知道错误消息字符串；设置prototype为Error的一个实例，对JavaScript引擎就标识它是一个错误对象；
```

> throw new MyError('Hello world');

## 10. 文档化 JSDOC

* ```JSDoc是一个根据javascript文件中注释信息，生成JavaScript应用程序或库、模块的API文档 的工具```
* ```JSDoc注释一般应该放置在方法或函数声明之前，它必须以/ **开始，以便由JSDoc解析器识别。其他任何以/*，/***或者超过3个星号的注释，都将被JSDoc解析器忽略```

```javascript
/**
 * Book类，代表一个书本.
 * @constructor
 * @param {string} title - 书本的标题.
 * @param {string} author - 书本的作者.
 */
function Book(title, author) {
    this.title=title;
    this.author=author;
}
Book.prototype={
    /**
     * 获取书本的标题
     * @returns {string|*}
     */
    getTitle:function(){
        return this.title;
    },
    /**
     * 设置书本的页数
     * @param pageNum {number} 页数
     */
    setPageNum:function(pageNum){
        this.pageNum=pageNum;
    }
};
```

> 学习文档：[JSDoc中文文档](http://www.css88.com/doc/jsdoc/index.html)