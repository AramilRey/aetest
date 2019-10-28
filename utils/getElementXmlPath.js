const fs = require('fs');
const $ = require('cheerio');
const GetUniqueSelector = require('cheerio-get-css-selector');
 
module.exports = (filePath, elem) => {
    const file = fs.readFileSync(filePath);
    GetUniqueSelector.init($);

    const $elem = $(elem);
    const xmlPath = $elem.getUniqueSelector();
    
    return xmlPath;
}