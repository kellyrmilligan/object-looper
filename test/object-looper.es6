'use strict'
const Assert = require('assert')
const Lab = require('lab')
const Code = require('code')
const lab = exports.lab = Lab.script()
const expect = Code.expect
import fs from 'fs'
import { forEachKeys, filterKeys, mapKeys, everyKeys, someKeys, reduceKeys, findKeys } from '../lib/index'


lab.experiment('object-looper', function() {
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
  lab.test('will find a key with find', function(done) {
    const obj = {
      key1: 1,
      key2: 11
    }
    const result = findKeys(obj, (key, value, index) => {
      return value === 1
    })
    expect(result).to.deep.equal({ key1: 1 })
    done()
  })
})
