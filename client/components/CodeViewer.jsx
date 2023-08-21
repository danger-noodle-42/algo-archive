import React from 'react';
import { useState } from 'react';
import '../style.css';

const CodeViewer = ((props) => {

  const { title, description, solution, notes, handleDeleteClick, handleAddTitle } = props;

  return (
  //Unloaded Blank page
  <div className='codeViewer'>
    <form onSubmit={handleAddTitle}>
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
      <button className="discard" title ={title} onClick={handleDeleteClick}> Discard </button>
      <button type='submit'>Submit</button>
    </form>
  </div>
  )
}
);

export default CodeViewer;