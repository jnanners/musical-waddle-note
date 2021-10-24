const fs = require("fs");
const path = require("path");

const createNewNote = (body, notesArr) => {
    const note = body;

    notesArr.push(note);

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({notes: notesArr}, null, 2)
    );

    return note;
}

const validateNote = (note) => {
    if(!note.title || typeof note.title !== "string"){
        return false;
    }
    if(!note.text || typeof note.text !== "string"){
        return false;
    }
    return true;
}

const deleteNote = notesArr => {
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({notes: notesArr}, null, 2)
    );
}

module.exports = {
    createNewNote,
    validateNote,
    deleteNote
}