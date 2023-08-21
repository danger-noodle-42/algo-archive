import React from 'react';
import { useState, useEffect } from 'react';
import '../style.css';
import TitleCard from './TitleCard.jsx';

const QuestionsList = (props) => {
  const { title, titleCards, handleDeleteClick, handleAccessDataClick } = props;

  //FUNCTION THAT FETCHES ALL TITLE??

  return (
    <div className='questionList'>
      {titleCards.titles.map((title) => (
        <TitleCard
          key={title} 
          title={title}
          handleAccessDataClick={handleAccessDataClick}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </div>
  );
}
export default QuestionsList;