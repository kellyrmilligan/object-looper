'use strict'
const Assert = require('assert')
const Lab = require('lab')
const Code = require('code')
const lab = exports.lab = Lab.script()
const expect = Code.expect
import fs from 'fs'
import { forEachKeys, filterKeys, mapKeys, everyKeys, someKeys, reduceKeys, findKeys } from '../index'
import isObject from '../isObject'
import keys from '../keys'


lab.experiment('object-looper', function() {
  lab.test('will detect if the parameter is an object', function(done) {
    const obj = {
      key1: 'test',
      key2: 'test2'
    }
    expect(isObject(obj)).to.be.true()
    expect(isObject(null)).to.be.false()
    expect(isObject([])).to.be.false()
    done()
  })
  lab.test('will give keys with keys function', function(done) {
    const obj = {
      key1: 'test',
      key2: 'test2'
    }
    expect(keys(obj)[0]).to.equal('key1')
    done()
  })
  lab.test('will loop through an objects own keys', function(done) {
    const obj = {
      key1: 'test',
      key2: 'test2'
    }
    forEachKeys(obj, (key, value, index) => {
      if (index === 0) {
        expect(value).to.equal('test')
      }
      if (index === 1) {
        expect(value).to.equal('test2')
      }
    })
    done()
  })
  lab.test('will loop through an objects own keys and will throw an error if the first parameter is not an object', function(done) {
    function throws() {
      forEachKeys([], (key, value, index) => {
      })
    }
    expect(throws).to.throw(Error, 'first argument must be an object')
    done()
  })
  lab.test('will filter an object through its own keys', function(done) {
    const obj = {
      key1: 'test',
      key2: 'test2'
    }
    const filtered = filterKeys(obj, (key, value, index) => {
      return value === 'test'
    })
    expect(filtered['key1']).to.equal('test')
    done()
  })
  lab.test('will filter an object through its own keys and will throw an error if the first parameter is not an object', function(done) {
    function throws() {
      filterKeys([])
    }
    expect(throws).to.throw(Error, 'first argument must be an object')
    done()
  })
  lab.test('will create a new object through mapping', function(done) {
    const obj = {
      key1: 'test',
      key2: 'test2'
    }
    const mapped = mapKeys(obj, (key, value, index) => {
      return { [key]: value + 'map'}
    })
    expect(mapped['key1']).to.equal('testmap')
    done()
  })
  lab.test('will create a new object through mapping and will throw an error if the first parameter is not an object', function(done) {
    function throws() {
      mapKeys([])
    }
    expect(throws).to.throw(Error, 'first argument must be an object')
    done()
  })
  lab.test('will test every element for truthyness with every', function(done) {
    const obj = {
      key1: 1,
      key2: 2
    }
    const isSmallEnough = everyKeys(obj, (key, value, index) => {
      return value < 10
    })
    expect(isSmallEnough).to.equal(true)
    const isBigEnough = everyKeys(obj, (key, value, index) => {
      return value > 10
    })
    expect(isBigEnough).to.equal(false)
    done()
  })
  lab.test('will test every element for truthyness with every and will throw an error if the first parameter is not an object', function(done) {
    function throws() {
      everyKeys([])
    }
    expect(throws).to.throw(Error, 'first argument must be an object')
    done()
  })
  lab.test('will test every element for truthyness with some', function(done) {
    const obj = {
      key1: 1,
      key2: 11
    }
    const isSmallEnough = someKeys(obj, (key, value, index) => {
      return value < 10
    })
    expect(isSmallEnough).to.equal(true)
    const isBigEnough = someKeys(obj, (key, value, index) => {
      return value > 10
    })
    expect(isSmallEnough).to.equal(true)
    done()
  })
  lab.test('will test every element for truthyness with some and will throw an error if the first parameter is not an object', function(done) {
    function throws() {
      someKeys([])
    }
    expect(throws).to.throw(Error, 'first argument must be an object')
    done()
  })
  lab.test('will reduce the keys values with reduce', function(done) {
    const obj = {
      key1: 1,
      key2: 11
    }
    const result = reduceKeys(obj, (prevKey, prevValue, currKey, currValue, index) => {
      return prevValue + currValue
    })
    expect(result).to.equal(12)
    done()
  })
  lab.test('will reduce the keys values with reduce and will throw an error if the first parameter is not an object', function(done) {
    function throws() {
      reduceKeys([])
    }
    expect(throws).to.throw(Error, 'first argument must be an object')
    done()
  })
  lab.test('will find a key with find', function(done) {
    const obj = {
      key1: 1,
      key2: 11
    }
    const result = findKeys(obj, (key, value, index) => {
      return value === 1
    })
    expect(result.key1).to.equal(1)
    done()
  })
  lab.test('will find a key with find and will throw an error if the first parameter is not an object', function(done) {
    function throws() {
      findKeys([])
    }
    expect(throws).to.throw(Error, 'first argument must be an object')
    done()
  })
  lab.test('will return undefined when find a key with find fails', function(done) {
    const obj = {
      key1: 1,
      key2: 11
    }
    const result = findKeys(obj, (key, value, index) => {
      return value === 45
    })
    expect(result).to.equal(undefined)
    done()
  })
})
