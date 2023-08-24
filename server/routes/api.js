const express = require('express');
const allActions = require('../../database/allActions');

const router = express.Router();

router.post('/createProblem', allActions.createProblem, (req, res) => {
  const { successful } = res.locals;
  if (successful) {
    console.log('The API is sucessful')
    res.status(200).json({ successful });
  } else {
    console.log('The API is marking an error')
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

router.post('/listProblems', allActions.readProblemTitles, (req, res) => {
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


// post request to '/signup'
router.post('/signup', allActions.createUser, (req, res) => {
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
