# Minimalist Test Lib
A kata about a minimalist example to understand the fundaments of test libraries*. 
> *jest is taken as a reference

## Installation
```
npm install
```

## Tests
```
npm test
```

## Requirements
1-It is required to create a program that allows checking if the result of a method (sync and async) is the expected. The assertion should follow the following format:
```
expect(result).toBe(expected)
```
where `result` is the result of the method that is being tested and `expected` is the expected value.


2-The assertions should be able to be encapsulated with a description. It should follow the following format:
```
test(description, callback)
```
Where `description` is a string and `callback` is an anonymous function where the assertion/s will be. 

Another allowed alias for `test` is `it`.

3- The tests should be able to be grouped with a description by the following interface:
```
describe(description, callback)
```
Where `description` is a string and `callback` is an anonymous function where the test/s will be. 

