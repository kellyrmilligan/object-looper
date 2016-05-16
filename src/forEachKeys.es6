import keys from './keys'
import isObject from './isObject'
import notObjectError from './notObjectError'

export default function forEachKeys(object, callback) {
  if (!isObject(object)) return notObjectError()
  keys(object).forEach(function(key, index) {
    callback(key, object[key], index)
  })
}
