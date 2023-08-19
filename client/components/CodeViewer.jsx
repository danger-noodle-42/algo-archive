import React from 'react';

const CodeViewer = ((props) => (

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [solution, setSolution] = useState('');
  const [notes, setNotes] = useState('');

  const {deleteProblemData, postProblemData, patchProblemData} = props;

  //Unloaded Blank page
  <div className='codeViewer'>
    <form onSubmit={patchProblemData}>
      <label>
        Challenge Title:
        <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />

      <label>
        Challenge Question:
        <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />

      <label>
        Challenge Solution:
        <input
        type='text'
        value={solution}
        onChange={(e) => setSolution(e.target.value)}
        />
      </label>
      <br />

      <label>
        Notes:
        <input
        type='text'
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        />
      </label>
      <br />
      <button type='?' className="discard" title ={'' onClick{deleteProblemData}}> Discard </button>
      <button type='submit'>Submit</button>
    </form>
  </div>
)
);

export default CodeViewer;