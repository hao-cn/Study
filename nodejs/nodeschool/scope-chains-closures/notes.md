# Scope Chains & Closures

Learn the details of Scope, Scope Chains, Closures, and Garbage Collection.

## Scopes

The main type of scope in Javascript is Lexical Scoping. Present in the language
from the very beginning, this is the scope created within a function, and the
one most developers are familiar with.[1]

ES6 recently defined Block Scoping. This scope is created within curly braced
blocks.[2]

### Intializing Variables

The way a variable is initialized determines which scope type it is:

#### Lexical Scope

var is used to denote a variable which is Lexically Scoped to the current
function:

    function someFunc() {
      var aVariable;
    }

aVariable is lexically scoped within someFunc

#### Block Scope

let & const are used to denote variables which are Block Scoped to the
current curly braced block:

    if (true) {
      let aVariable;
    }

aVariable is block scoped within the if's curly braces

### Misssion
In an empty file, create a function foo which contains one variable lexically scoped named bar.

Once complete, execute scope-chains-closures verify <your-file.js> to verify your solution.

<b>my solution</b>

```
//0101-scope.js
function foo(){
	var bar;
}
```

## Scope chains

### Nesting

Scopes can be nested. Both Lexical and Block scopes can contain other scopes:

    function someFunc() {
      function inner() {
      }
    }

inner is a nested lexical scope inside the lexical scope of someFunc

-------------------------------------------------------------------------------

    if (true) {
      while (false) {
      }
    }

The while is a nested block scope inside the block scope of if

-------------------------------------------------------------------------------

    function someFunc() {
      if (true) {
      }
    }

The if is a nested block scope inside the lexical scope of someFunc

-------------------------------------------------------------------------------

### Scoped Variable Access

All nested scopes follow the same rule: Each nested inner scope has access to outer scope variables, but NOT vice-versa.

For example:

    function someFunc() {
      var outerVar = 1;
      function inner() {
        var innerVar = 2;
      }
    }

inner has access to both innerVar & outerVar, but someFunc only has access to outerVar

### Multiple Nested Scopes

Nesting isn't limited to a single inner scope, there can be multiple nested scopes, each of which adhere to the Scoped Variable Access rule above. With one addition: sibling scopes are also restricted from accessing each other's variables.

For example:

    function someFunc() {
      function inner() {
      }
      function inner2() {
      }
    }

inner & inner2 are both inner scopes of someFunc. Just as someFunc cannot access inner's variables, inner cannot access inner2's variables (and vice versa)

### Scope Tree

Looking at the nesting from top-down, a tree of scopes is formed.

This code

    function someFunc() {
      function inner() {
      }
      function inner2() {
        function foo() {
        }
      }
    }

Produces this tree

       someFunc()
           |
          / \
         /   \
        /     \
       ↓       ↓
    inner()  inner2()
               |
               ↓
             foo()

Remembering that inner scopes can access outer scope's variables, but not vice-versa (foo() can access inner2()'s variables, and inner2() can access someFunc()'s variables), then it makes more sense to look at the tree from bottom-up, which forms a chain, also known as...

### Scope Chains

Looking from most inner to most outer scope forms a Scope Chain.

       someFunc()
           ↑
            \
             \
              \
             inner2()
               ↑
               |
             foo()

-------------------------------------------------------------------------------

### Mission

Modify your solution from lesson 1 so foo contains a function zip which itself contains one variable lexically scoped called quux.

Once complete, execute scope-chains-closures verify <your-file.js> to verify your
solution.

<b>My solution</b>

```
//0201-scope-chains.js
function foo(){
	var bar;
	function zip(){
		var quux;
	}
}
```




## Global Scope & Shadowing

### Global Scope

Understanding where Scope Chains end is an important part of scoping. All Javascript runtimes must implicitly create a Global Scope object (window in
the browser, global in node), which sits at the top of every scope chain:

        (global)
           ↑
           |
       someFunc()
           ↑
          / \
         /   \
        /     \
    inner()  inner2()
               ↑
               |
             foo()

In Scopes we covered how usage of var or let dictates the scope of the variable being defined. When assigning a variable without using either of var, let, etc, the variable is assumed to exist in an outer scope.

The javascript runtime follows these steps to assign a variable:

	 1) Search within the current scope.
	 2) If not found, search in the immediately outer scope.
	 3) If found, go to 6.
	 4) If not found, repeat 2. Until the Global Scope is reached.
	 5) If not found in Global Scope, create it (on window / global objects).
	 6) Assign the value.

In this way, it is possible to accidentally define a global variable (step 5).

### Example Global Scope

Consider the following example:

    function someFunc() {
       var scopedVar = 1;
       function inner() {
          foo = 2;
       }
    }

Note the lack of var or let, etc for foo = 2. The Javascript runtime will follow the above algorithm, first checking the scope of inner(), then of someFunc(), then finally the Global Scope. Step 5 is then executed, so foo becomes a variable in the Global Scope (window.foo / global.foo).

Phrased another way: By accidentally forgetting to use var, the variable foo which otherwise would have been only within the lexical scope of inner() is now available to be modified by any scope. So, someFunc() now has access where the developer may have meant for it not to.

Remember: Only inner scopes can access variables of outer scopes. In this case the someFunc() scope is an inner scope of the Global Scope, allowing access of
foo to someFunc().

### Shadowing

A variable is created in a 'Step 0)' of the above algorithm: When var or let is used. The variable is assigned to the correct scope, then execution moves on,
and any assignments to that variable follow the above algorithm.

It is perfectly valid to define two different variables, in different scopes, with the same name:

    function someFunc() {
       var foo = 1;
    }
    function anotherFunc() {
       var foo = 2;
    }

It is also valid to do this in nested scopes:

    function someFunc() {
       var foo = 1;
       function inner() {
          var foo = 2;
       }
    }

This is called Shadowing. The foo inside inner() is said to Shadow the foo inside someFunc.

Shadowing means that the inner() scope only has access to its own foo. There is no way for it to access the foo defined in someFunc().

This can also be an accidental source of bugs, especially when there is deep nesting, or long functions.

-------------------------------------------------------------------------------

# Mission

Starting with your solution from the previous lesson, assign a value to quux inside foo() (don't use var or let). The value should be different to the value assigned when defining quux inside zip().

<b>My solution</b>

```
//0301-global-scope-shadow.js
function foo(){
	var bar;
	function zip(){
		var quux = 2;
	}
	quux = 1;
}
```