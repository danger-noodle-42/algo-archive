import React from 'react';
import { useState } from 'react';
import '../style.css';
import TitleCard from './TitleCard.jsx';

const QuestionsList = (props) => {
const { title, handleDeleteClick, handleAccessDataClick } = props;

  //FUNCTION THAT FETCHES ALL TITLE??

  return (
    <div className='Sidebar'>
      {title.Cards.map((title) => (
        <TitleCard
          key={id} //should this be the unique key?
          title={title}
          handleAccessDataClick={handleAccessDataClick}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </div>
  );
}
export default QuestionsList;