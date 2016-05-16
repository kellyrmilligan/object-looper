import keys from './keys'
import isObject from './isObject'
import notObjectError from './notObjectError'

export default function everyKeys(object, callback) {
  if (!isObject(object)) return notObjectError()
  return keys(object).every(function(key, index) {
    return callback(key, object[key], index)
  })
}
