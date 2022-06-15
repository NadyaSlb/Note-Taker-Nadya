const router = require('express').Router();
// const { getNotes, saveNote, deleteNote } = require('../../public/assets/js/index');
const notes = require('../../db/db.json');
const fs = require('fs');

router.get('/notes', (req, res) => {
    let notes= fs.readFile("../../db/db.json",
    )
    res.json(notes)
});

// router.post('/notes', (req, res) => {
  fs.appendFile
// });

module.exports = router;
