import React from 'react';
import '../style.css';
import TitleCard from './TitleCard.jsx';

function QuestionsList() {
  // STATE HOOKS
  //titleCards is an array
  [titleCards, setTitleCards] = useState([]);

  // FUNCTION THAT QUERIES DB AND UPDATES STATE
  const fetchAndUpdateTitles = async () => {
    const data = await fetch("the router 'get' uri");
    const titles = await data.json();
    setTitleCards(titles);
  };
  return <div className='Sidebar'>Example side bar</div>;
}

export default QuestionsList;

/*
titleCards = ["twoSum", "memoization", "addOne"]

return (
  {titleCards.map(
    title => {
      return (
        <TitleCard 
        title={title}
        handleDeleteClick={handleDeleteClick}
        />
      )
    }
  )}
)


*/
