const fs = require('fs');
const cheerio = require('cheerio');
const getElementProps = require('./getElementProps');
const getPropsComparisonScore = require('./getPropsComparisonScore');

module.exports = (filePath, originProps) => {
    const file = fs.readFileSync(filePath);
    const $ = cheerio.load(file);
    const parent = $(`.${originProps.parentClass}`);
    const childs = parent.children();

    const scores = [];
    childs.each(function() {
        const currentProps = getElementProps($(this));
        const score = getPropsComparisonScore(currentProps, originProps);
        scores.push(score);
    });

    const winnerIndex = scores.indexOf(Math.max(...scores));

    return $(childs[winnerIndex]);
}