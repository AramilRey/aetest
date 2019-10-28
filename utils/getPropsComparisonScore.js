module.exports = (props1, props2) => {
    const idScore = +(props1.id === props2.id);
    const textScore = +(props1.text === props2.text);
    const nodeTypeScore = +(props1.nodeType === props2.nodeType);
    const titleScore = +(props1.title === props2.title);
    const classesScore = props1.classes.filter(v => props2.classes.includes(v)).length

    return idScore + textScore + nodeTypeScore + titleScore + classesScore;
}