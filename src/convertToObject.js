'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objResult = {};
  const arrStr = sourceString.trim().split(';');
  const some = arrStr.map(classes => classes.split(':'));

  some.forEach(element => {
    if (element.length === 2) {
      objResult[element[0].trim()] = element[1].trim();
    }
  });

  return objResult;
}

module.exports = convertToObject;
