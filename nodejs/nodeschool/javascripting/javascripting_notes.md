# Notes of Javascripting in nodeschool

## Introduction
Will, a simply case about Hello World in JS
```
console.log("hello");
```

## Variables
<b>declare：</b> 
```
var example;
```

<b>definition：</b> 
```
var example = 'something';
```

<b>Challenge:</b>

```
var example;
example = 'some string';
console.log(example);
```

## Strings
A string is any value surrounded by quotes.  
```
'This is a String'
```

<b>Challenge:</b>

```
var someString = 'this is a string';
console.log(someString);
```

## String Length
use .length to acess the property of a string variable

<b>Challenge:</b>

```
var someString = 'this is a string';
console.log(someString);
```

## Revising String
Change the content of a string

<b>Challenge:</b>

```
var pizza = 'pizza is alright';
pizza = pizza.replace('alright','wonderful');
console.log(pizza);
```

## Numbers
Numbers can be integers (like 2, 14) or floats (3.14, 199.882)

<b>Challenge:</b>

```
var example = 123456789;
console.log(example);
```

## Rounding Numbers
Use the Math lib to deal with numbers

<b>Challenge:</b>

```
var roundUp = 1.5;
var rounded = Math.round(roundUp);
console.log(rounded);
```

