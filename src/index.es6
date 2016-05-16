
function keys(object) {
  return Object.keys(object)
}

export function forEachKeys(object, callback) {
  keys(object).forEach(function(key, index) {
    callback(key, object[key], index)
  })
}

export function filterKeys(object, callback) {
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
  return keys(object).reduce(function(prevKey, currKey, index) {
    return callback(prevKey, object[prevKey], currKey, object[currKey], index)
  })
}

export function everyKeys(object, callback) {
  return keys(object).every(function(key, index) {
    return callback(key, object[key], index)
  })
}

export function someKeys(object, callback) {
  return keys(object).some(function(key, index) {
    return callback(key, object[key], index)
  })
}
