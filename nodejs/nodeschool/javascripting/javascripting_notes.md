# Notes of Javascripting in nodeschool


This documents records the propose and code of challenge of the Javascripting project in nodeschool.

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
console.log(someString.length);
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

## Number 2 string
Call the toString() method of a variable

<b>Challenge:</b>

```
var n = 128;
console.log(n.toString());
```
## If statement
Will, you know!

<b>Challenge:</b>

```
var fruit = 'orange';
if(fruit.length > 5)
  console.log("The fruit name has more than five characters.");
else
  console.log("The fruit name has five characters or less.");
```

## For loop
Will, nothing to say!

<b>Challenge:</b>

```
var total = 0;
var limit = 10;
for(var i = 0 ; i < limit ;i ++){
  total += i;
}
console.log(total);
```

## Array
Will, you know!

<b>Challenge:</b>

```
pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni'];
console.log(pizzaToppings);
```

## Array filter
Filte elements in arrays by function!

<b>Challenge:</b>

```
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = numbers.filter(function (number) {
	return number % 2 === 0;  
});
console.log(filtered);
```

## Accessing array value
How to access the value of a specific element in array.

<b>Challenge:</b>

```
var food = ['apple', 'pizza', 'pear'];  
console.log(food[1]);
```

## Looping through arrays
Combine loop operation and value access in array.

<b>Challenge:</b>

```
var pets = ['cat', 'dog', 'rat'];  
for(var i = 0 ; i < pets.length ; i ++){
	pets[i] = pets[i] + 's';
}
console.log(pets);
```

## Object
Create objects in js.

<b>Challenge:</b>

```
var pizza = {  
    toppings: ['cheese', 'sauce', 'pepperoni'],  
    crust: 'deep dish',  
    serves: 2  
}; 
console.log(pizza);
```

## Object properties
Access the properties of object.

<b>Challenge:</b>

```
var food = {  
    types: 'only pizza'  
}; 
console.log(food[types]);
```

## Function
Define a function and use it.

<b>Challenge:</b>

```
function eat(food){
	return food + ' tasted really good.';
}
console.log(eat('bananas'));
```

## Function arguments
Define and call function with more than one arguments.

<b>Challenge:</b>

```
function math(a1, a2, a3){
	return a1 + a2 * a3;
}
console.log(math(53,61,67));
```

## Scope
The scope of variables.
In order to finish the challenge, you should know something about the IIFE.

<b>Challenge:</b>

```
var a = 1, b = 2, c = 3;  
(function firstFunction(){  
    var b = 5, c = 6;  
    (function secondFunction(){  
        var b = 8;  
        (function thirdFunction(){  
            var a = 7, c = 9;  
            (function fourthFunction(){  
                var a = 1, c = 8;  
            })();  
        })();
        console.log("a: "+a+", b: "+b+", c: "+c);
    })();  
})();  
```



#END.



