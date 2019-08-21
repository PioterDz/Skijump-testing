// styleNotes needs to be array

const calculateStylePoints = (styleNotes) => {

    function checkArr(val) {
        return val < 0 || val > 20;
    }
    
    if (styleNotes.filter(checkArr).length !== 0) {
        return 'Note should be value between 0 and 20';
    } else if (styleNotes.length !== 5) {
        return 'Notes should contain 5 values'; 
    } else {

        function getNote(notes, func) {
            return notes.reduce((prv, crr) => func(prv, crr));
        }

        const maxNote = getNote(styleNotes, Math.max);
        const minNote = getNote(styleNotes, Math.min);
        const sum = getNote(styleNotes, (a, b) => a + b);
        const style = sum - maxNote - minNote;

        return style;
    }

};

module.exports = calculateStylePoints;
  