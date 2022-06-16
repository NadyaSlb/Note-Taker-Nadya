const router = require('express').Router();
const path = require('path');
var notes = require('../../db/db.json');
const fs = require('fs');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
 if(req.body) {
  const newNote = req.body;
  notes.push(newNote);
  fs.writeFileSync(path.join(__dirname + '../../../db/db.json'), JSON.stringify(notes));
  res.json(notes);
 }
});

module.exports = router;
