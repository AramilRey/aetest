const getPropsFromId = require('./utils/getPropsFromId');
const getElementXmlPath = require('./utils/getElementXmlPath')
const getElementFromProps = require('./utils/getElementFromProps')

// Console input
const input = process.argv.slice(2);

// File paths and element id
const origin = input[0] || './samples/origin.html';
const compareTo = input[1] || './samples/sample-1-evil-gemini.html';
const elementId = input[2] || 'make-everything-ok-button';

// Get props from original element, compare it to elements on desired file and get xml path
const props = getPropsFromId(origin, elementId);
const matchingElement = getElementFromProps(compareTo, props);
const xmlPath = getElementXmlPath(compareTo, matchingElement);

// Log response out to console
console.log(`Path to element on ${compareTo} is ${xmlPath}`);