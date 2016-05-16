import keys from './keys'
import isObject from './isObject'
import notObjectError from './notObjectError'

export default function mapKeys(object, callback) {
  if (!isObject(object)) return notObjectError()
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
