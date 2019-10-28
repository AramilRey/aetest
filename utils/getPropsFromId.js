const fs = require('fs');
const cheerio = require('cheerio');
const getElementProps = require('./getElementProps');

module.exports = (filePath, id) => {
    const file = fs.readFileSync(filePath);
    const $ = cheerio.load(file);

    const originButton = $(`#${id}`);

    return getElementProps(originButton);
}