import keys from './keys'
import isObject from './isObject'
import notObjectError from './notObjectError'

export default function findKeys(object, callback) {
  if (!isObject(object)) return notObjectError()
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
