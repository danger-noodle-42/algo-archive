import React from 'react';
import { useState, useEffect } from 'react';
import TitleCard from './TitleCard.jsx';
import TagFilter from './TagFilter.jsx';
import TagList from './TagList.jsx';
import '../style.css';
import './QuestionsList.css';


const QuestionsList = (props) => {
  const { tag, title, titleCards, handleDeleteClick, handleAccessDataClick } = props;

  /*
  Takes in the following props from its parent App:
  title: this will be the individual title for each TitleCard. it's not used in QuestionsList
  titleCards: an object with one property, titles, with value of an array of titles
  handleDeleteClick: the click handler function for the Delete button on each TitleCard. defined in App.jsx
  handleAccessDataClick: the click handler function for each TitleCard, which pulls the data for that card when it is clicked. defined in App.jsx
  */

  //FUNCTION THAT FETCHES ALL TITLE??
  // returns a div with the titleCards.titles array destructured into each TitleCard, with the needed props passed down
  return (
    <div className='questionList'>
      {titleCards.titles.map((title) => (
        <TitleCard
          key={title} 
          title={title}
          tag={tag}
          handleAccessDataClick={handleAccessDataClick}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </div>
  );
};

export default QuestionsList;