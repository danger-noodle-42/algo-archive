import React from 'react';
import { Button, Input, TextArea } from './Inputs.jsx';

// TODO Delete CSS and use styled-components instead
import '../style.css';
import './CodeViewer.css';





// this seems to be the code to handle the form in the middle of the page. We are passing the props(objects)
// from App.jsx here to be able to render the functionality

const CodeViewer = ((props) => {

  const {
    comments,
    description,
    handleClear,
    handleAddTitle,
    onChange,
    solution,
    title,    
  } = props;

  // rendering the handleAddTitle function on onSubmit handler passing the title of the question as the value
  // uptading the setTitle state when user clicks button

  return (
  // Unloaded Blank page
  <form onSubmit={handleAddTitle} className='codeViewer'>
    <label className='title'>
      Challenge Title
      <TextArea
        type='text'
        value={title}
        onChange={(e) => onChange('title', e.target.value)}
      />
    </label>

    <label className='question'>
      Challenge Question
      <TextArea
        value={description}
        onChange={(e) => onChange('description', e.target.value)}
      />
    </label>

    <label className='solution'>
      Challenge Solution
      <TextArea
        value={solution}
        onChange={(e) => onChange('solution', e.target.value)}
      />
    </label>

    <label className='comments'>
      Comments
      <TextArea
        value={comments}
        onChange={(e) => onChange('comments', e.target.value)}
      />
    </label>

    <div className='buttons'>
      <Button onClick={handleClear} variant="secondary">Clear</Button>
      <Button type='submit' variant="primary">Submit</Button>
    </div>
  </form>
  )
}
);

export default CodeViewer;