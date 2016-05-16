
function keys(object) {
  return Object.keys(object)
}

function isObject(object) {
  return typeof item === 'object' && !Array.isArray(item) && item !== null
}

function notObjectError() {
  throw new Error('first argument must be an object')
}

export function forEachKeys(object, callback) {
  if (!isObject) return notObjectError()
  keys(object).forEach(function(key, index) {
    callback(key, object[key], index)
  })
}

export function filterKeys(object, callback) {
  if (!isObject) return notObjectError()
  const filteredObject = {}
  keys(object).filter(function(key, index) {
    if (callback(key, object[key], index)) {
      filteredObject[key] = object[key]
      return true
    }
    return false
  })
  return filteredObject
}

export function mapKeys(object, callback) {
  if (!isObject) return notObjectError()
  let mappedObject = {}
  keys(object).map(function(key, index) {
    const add = callback(key, object[key], index)
    const addkeys = keys(add)
    if (typeof add === 'object' && addkeys.length) {
      addkeys.forEach(function(key) {
        mappedObject[key] = add[key]
      })
    }
  })
  return mappedObject
}

export function reduceKeys(object, callback) {
  if (!isObject) return notObjectError()
  return keys(object).reduce(function(prevKey, currKey, index) {
    return callback(prevKey, object[prevKey], currKey, object[currKey], index)
  })
}

export function everyKeys(object, callback) {
  if (!isObject) return notObjectError()
  return keys(object).every(function(key, index) {
    return callback(key, object[key], index)
  })
}

export function someKeys(object, callback) {
  if (!isObject) return notObjectError()
  return keys(object).some(function(key, index) {
    return callback(key, object[key], index)
  })
}

export function findKeys(object, callback) {
  if (!isObject) return notObjectError()
  let foundObject = undefined
  keys(object).find(function(key, index) {
    if (callback(key, object[key], index)) {
      foundObject = { [key]: object[key]}
      return true
    } else {
      return false
    }
  })
  return foundObject
}
