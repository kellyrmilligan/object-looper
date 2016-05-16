import keys from './keys'
import isObject from './isObject'
import notObjectError from './notObjectError'

export default function reduceKeys(object, callback) {
  if (!isObject(object)) return notObjectError()
  return keys(object).reduce(function(prevKey, currKey, index) {
    return callback(prevKey, object[prevKey], currKey, object[currKey], index)
  })
}
