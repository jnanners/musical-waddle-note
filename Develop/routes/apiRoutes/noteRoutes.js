const router = require("express").Router();

const {createNewNote, validateNote, deleteNote} = require("../../lib/notes");
let {notes} = require("../../db/db.json");


router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
})

router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNote(req.body)){
        res.status(400).send("The note is not properly formatted")
    }
    else{
        const note = createNewNote(req.body, notes);
        res.json(req.body);
    }
})

router.delete("/notes/:id", (req, res) => {
    const foundNote = notes.some(note => note.id === req.params.id);

    if(!foundNote){
        res.status(400).send("No note with that id number");
    }
    else{
        notes = notes.filter(note => note.id !== req.params.id);
        deleteNote(notes);
        res.json(notes);
    }
})

module.exports = router;