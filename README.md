<!-- <h1 align="center"> Checkerz </h1> -->
# Checkerz
A package for validating JS objects.

## Usage

Importing the Validator Constructor

```js
// ES5 Syntax
const Validator = require("Checkerz");

// ES6 Syntax
import Validator from "Checkerz";
```

Once the constructor is imported you can create as many validator as you like and validate your objects.

## Examples

```js
// Rules validator should use.
const rules = {
    name: 'string|required',
    address: {
        city: 'string|required|len:3,8', 
        state: 'string|required|len:3,8'
    },
};

// Creating a new Validator.
const userValidator = new Validator(rules);

// Object to validate.
let user = {
    address: {
        city: "Albany",
        state: "NYK"
    }
}

// Validate the object using the check() function of validator.
let response = userValidator.check(user);

// Check if the validation passed using passed property of the response.
if(!response.passed) {
    // Response's error property contians an array of all the errors.
    console.log(err);
}

```
Ouput:
```html
[ 'name property was required but was not found.' ]
```
