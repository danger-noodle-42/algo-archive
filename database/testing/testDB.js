const allActions = require('../allActions');


const req = {
  body: {
    title: 'Third Title',
    description: 'New Description',
    solution: 'Solved the problem better',
    comments: 'Thoughts on the process'
  }
}
const res = {
  locals: {}
}
const next = ()=>{};

// allActions.createProblem(req, res, next);
// allActions.deleteProblem(req, res, next);
// allActions.readProblem(req, res, next);
// allActions.updateProblem(req, res, next);
// allActions.readProblemTitles(req, res, next);s
const f = async ()=>{
  await allActions.readProblemTitles(req, res, next);

  console.log(res.locals);
  return;
};
f();
