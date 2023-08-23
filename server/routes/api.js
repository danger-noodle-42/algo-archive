const express = require('express');
const allActions = require('../../database/allActions');

const router = express.Router();

router.post('/createProblem', allActions.createProblem, allActions.verifyToken, (req, res) => {
  const { successful } = res.locals;
  if (successful) {
    res.status(200).json({ successful });
  } else {
    res.status(400).json({ error: 'Error creating problem' });
  }
});

router.post('/readProblem', allActions.readProblem, allActions.verifyToken, (req, res) => {
  const { problem } = res.locals;
  if (problem) {
    res.status(200).json(problem);
  } else {
    res.status(400).json({ error: 'Error reading problem' });
  }
});

router.get('/listProblems', allActions.readProblemTitles, allActions.verifyToken, (req, res) => {
  const { problemTitles } = res.locals;
  if (problemTitles) {
    res.status(200).json({ titles: problemTitles });
  } else {
    res.status(400).json({ error: 'Error reading problem' });
  }
});

router.patch('/updateProblem', allActions.updateProblem, allActions.verifyToken, (req, res) => {
  const { successful } = res.locals;
  if (successful) {
    res.status(200).json({ successful });
  } else {
    res.status(400).json({ error: 'Error updating problem' });
  }
});

router.delete('/deleteProblem', allActions.deleteProblem, allActions.verifyToken, (req, res) => {
  const { successful } = res.locals;
  if (successful) {
    res.status(200).json({ successful });
  } else {
    res.status(400).json({ error: 'Error deleting problem' });
  }
});


// post request to '/signup'
router.post('/signup', allActions.createUser, allActions.createToken, (req, res) => {
  const { successful } = res.locals;
  if (successful) {
    res.status(200).json({ successful });
  } else {
    res.status(400).json({ error: 'Error creating user' });
  }

})

// post request to '/login'
router.post('/login', allActions.verifyUser, allActions.createToken, allActions.verifyToken, (req, res) => {
  const { successful } = res.locals;
  if (successful) {
    res.status(200).json({ successful });
  } else {
    res.status(400).json({ error: 'Error verifying user' });
  }

})

// delete request to '/logout
router.delete('/logout', allActions.deleteToken, (req, res) => {
  const { successful } = res.locals;
  if (successful === true) {
    res.status(200).json({ successful });
  } else {
    res.status(400).json({ error: 'Error logging out' });
  }
})


module.exports = router;
