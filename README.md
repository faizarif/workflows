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
// Creating a new Validator.
const userValidator = new Validator({
    name: 'string|required',
    address: {
        city: 'string|required|len:3,6',
        state: 'string|required|len:3,8',
        _name: "Address"
    },
    age: 'required|number|Age',
    dob: {
        date: 'string|gte:1|lte:31',
        month: 'string|gte:1|lte:12',
        year: 'gte:1990|lte:2015',
    },
});


```
