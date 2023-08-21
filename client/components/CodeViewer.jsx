import React from 'react';
import { useState, useEffect } from 'react';
import '../style.css';
import './CodeViewer.css';

const CodeViewer = ((props) => {

  const { title, description, solution, comments, setTitle, setDescription, setSolution, setComments, handleClear, handleDeleteClick, handleAddTitle } = props;

  return (
  //Unloaded Blank page
  <form onSubmit={handleAddTitle} className='codeViewer'>
    <label className='title'>
      Challenge Title:
      <input
      type='text'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
    </label>
    <br />

    <label className='question'>
      Challenge Question:
      <textarea
      type='text'
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      />
    </label>
    <br />

    <label className='solution'>
      Challenge Solution:
      <textarea
      type='text'
      value={solution}
      onChange={(e) => setSolution(e.target.value)}
      />
    </label>
    <br />

    <label className='comments'>
      Comments:
      <textarea
      type='text'
      value={comments}
      onChange={(e) => setComments(e.target.value)}
      />
    </label>
    <br />
    <div className='buttons'>
      <button className="clear" title={title} onClick={handleClear}> Clear </button>
      <button type='submit'>Submit</button>
    </div>
  </form>
  )
}
);

export default CodeViewer;