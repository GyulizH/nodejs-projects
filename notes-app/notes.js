const fs = require('fs');
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes..."
};

const addNote = function(title, body){
    const notes =  loadNotes();
    const duplicateNotes = notes.filter(note => {
        return note.title === title
    });
    const duplicateNote = notes.find(note => note.title === title)// we can use this instead of filter

    if(duplicateNotes.length === 0){
        notes.push(({
            title: title,
            body: body,
        }));
        saveNotes(notes);
    }else{
        console.log('title taken')
    }

}

// module.exports = getNotes // this is for when we only have one function to export

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
};

const loadNotes = function(){

    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch (e) {
        return [];
    };
};

const removeNote = function(title){
    const notes =  loadNotes();
    const notesToKeep = notes.filter(note => {
        return note.title !== title
    });

    if(notes.length>notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep);
    }else{
        console.log(chalk.red.inverse('No Note found!'));
    }

};

const listNotes = () => {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    const notes =  JSON.parse(dataJSON);
    const noteTitles = []
    for(let note of notes){
        noteTitles.push(note.title);
    }
    console.log(chalk.green.inverse('Your notes') + noteTitles );
}

const listNotesTutorialVersion = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const foundNote = notes.find(note => note.title === title);

    if(foundNote !== undefined){
        console.log(foundNote)
    }else{
        console.log('no notes here')
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
};

