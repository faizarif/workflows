# Checkerz
A package for validating JS objects.

## Installation
```
npm install checkerz
```

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
## Creating Validator
- Rules for a value are seperated by `|`.

    ```js
    [key]: "[rule1] | [rule2] | [rule3]"
    ```

- If you want to change the name of the key when displaying error message you can pass the name you want as the last value when specifying rules.
    
    ```js
    [key]: "[rule1] | [rule2] | <b>[name]</b>"
    ```

## Available Rules
Type Checks:
- array
- boolean
- json
- string
- number

// Value Property Rules:
- email: <br />
    Checks if the value is a valid email.
- gt: 
- gte
- len
- lt
- lte
- required
