'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const declaration = sourceString.split(';').map((array) => array.trim());

  declaration.forEach((declarationString) => {
    if (!declarationString) {
      return;
    }

    const [key, value] = declarationString.split(':');

    stylesObject[key.trim()] = value.trim();
  });

  return stylesObject;
}

module.exports = convertToObject;
