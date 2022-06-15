const router = require('express').Router();
const { getNotes, saveNote, deleteNote } = require('../../public/assets/js/index');
const { notes } = require('../../db/db');
const fs = require('fs');

router.get('/notes', (req, res) => {
  let results = notes;
  if (req.query) {
    results = getNotes(req.query, results);
  }
  res.json(results);
});

router.post('/notes', (req, res) => {
 
});

module.exports = router;
