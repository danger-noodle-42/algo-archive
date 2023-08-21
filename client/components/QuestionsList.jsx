import React from 'react';
import { useState, useEffect } from 'react';
import TitleCard from './TitleCard.jsx';
import '../style.css';
import './QuestionsList.css';


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
};

export default QuestionsList;