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
