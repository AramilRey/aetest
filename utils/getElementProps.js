module.exports = (elem) => {
    return {
        id: elem.attr('id'),
        text: elem.text().trim(),
        nodeType: elem[0].name,
        title: elem.attr('title'),
        classes: elem.attr('class').split(' '),
        parentClass: elem.parent().attr('class'),
    };
}