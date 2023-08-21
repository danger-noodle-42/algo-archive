const express = require('express');
const allActions = require('../../database/allActions');

const router = express.Router();

router.post('/createProblem', allActions.createProblem, (req, res) => {
  const { successful } = res.locals;
  if (successful) {
    res.status(200).json({ successful });
  } else {
    res.status(400).json({ error: 'Error creating problem' });
  }
});

router.post('/readProblem', allActions.readProblem, (req, res) => {
  const { problem } = res.locals;
  if (problem) {
    res.status(200).json(problem);
  } else {
    res.status(400).json({ error: 'Error reading problem' });
  }
});

router.get('/listProblems', allActions.readProblemTitles, (req, res) => {
  const { problemTitles } = res.locals;
  if (problemTitles) {
    res.status(200).json({ titles: problemTitles });
  } else {
    res.status(400).json({ error: 'Error reading problem' });
  }
});

router.patch('/updateProblem', allActions.updateProblem, (req, res) => {
  const { successful } = res.locals;
  if (successful) {
    res.status(200).json({ successful });
  } else {
    res.status(400).json({ error: 'Error updating problem' });
  }
});

router.delete('/deleteProblem', allActions.deleteProblem, (req, res) => {
  const { successful } = res.locals;
  if (successful) {
    res.status(200).json({ successful });
  } else {
    res.status(400).json({ error: 'Error deleting problem' });
  }
});

module.exports = router;
