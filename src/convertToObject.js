'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const clean = sourceString.split(';').map((array) => array.trim());

  clean.forEach((string) => {
    if (!string) {
      return;
    }

    const [key, value] = string.split(':');

    result[key.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
