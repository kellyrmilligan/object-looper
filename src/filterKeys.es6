import keys from './keys'
import isObject from './isObject'
import notObjectError from './notObjectError'

export default function filterKeys(object, callback) {
  if (!isObject(object)) return notObjectError()
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
