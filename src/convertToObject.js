'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const clean = sourceString.split(';').map((array) => array.trim());

  clean.forEach((string) => {
    if (!string) {
      return;
    }

    const [key, value] = string.split(':');

    stylesObject[key.trim()] = value.trim();
  });

  return stylesObject;
}

module.exports = convertToObject;
