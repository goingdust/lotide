# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @goingdust/lotide`

**Require it:**

`const _ = require('@goingdust/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(...)`: Asserts whether or not two values are equal.
* `eqArrays(...)`: Returns true/false depending on if two arrays are equal.
* `eqObjects(...)`: Returns true/false depending on if two objects are equal.
* `assertArraysEqual(...)`: Asserts whether or not two arrays are equal.
* `assertObjectsEqual(...)`: Asserts whether or not two objects are equal.
* `head(...)`: Returns the first element of an array.
* `tail(...)`: Returns all elements of an array, excluding the first.
* `middle(...)`: Returns the middle element(s) of an array.
* `countLetters(...)`: Returns how many times a letter character appears in a string.
* `letterPositions(...)`: Returns the index(es) of where a letter character appears in a string.
* `countOnly(...)`: Returns the number of times an item that is true appears in an object. If not found, or is false, returns undefined.
* `findKey(...)`: Returns the key that corresponds with the value of its nested object's key.
* `findKeyByValue(...)`: Returns the key that corresponds with the given value.
* `map(...)`: Mimics the .map() method.
* `takeUntil(...)`: Returns the sequential elements of an array until an element's value equals true according to the passed function.
* `without(...)`: Returns an array with all elements of the first passed array that do not equal the elements of the second passed array.