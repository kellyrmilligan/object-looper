# utility methods for looping through objects

[![Dependency Status](https://david-dm.org/kellyrmilligan/object-looper.svg)](https://david-dm.org/kellyrmilligan/object-looper)
[![Build Status](https://travis-ci.org/kellyrmilligan/object-looper.svg?branch=master)](https://travis-ci.org/kellyrmilligan/object-looper)
[![Coverage Status](https://coveralls.io/repos/github/kellyrmilligan/object-looper/badge.svg?branch=master)](https://coveralls.io/github/kellyrmilligan/object-looper?branch=master)

### why?
I got tired of typing `Object.keys(object).forEach(function(key) { //do something with object[key] })`

### examples
```
import { forEachKeys, filterKeys, mapKeys, everyKeys, someKeys, reduceKeys } from 'object-looper'

forEachKeys(obj, (key, value, index) => {
  //do something
})

const obj = {
  key1: 'test',
  key2: 'test2'
}
const filtered = filterKeys(obj, (key, value, index) => {
  return value === 'test'
})

//filtered is { key1: 'test' }

const obj = {
  key1: 'test',
  key2: 'test2'
}
const mapped = mapKeys(obj, (key, value, index) => {
  return { [key]: value + 'map'}
})}

//mapped is now { key1: 'testmap', key2: 'test2map' }

const obj = {
  key1: 1,
  key2: 2
}
const isSmallEnough = everyKeys(obj, (key, value, index) => {
  return value < 10
})

//isSmallEnough is true

const obj = {
  key1: 1,
  key2: 11
}
const isSmallEnough = someKeys(obj, (key, value, index) => {
  return value < 10
})

//isSmallEnough is true

const obj = {
  key1: 1,
  key2: 11
}
const result = reduceKeys(obj, (prevKey, prevValue, currKey, currValue, index) => {
  return prevValue + currValue
})

//result is 11
```
