import React from 'react';
import { useState, useEffect } from 'react';
import CodeViewer from './components/CodeViewer.jsx';
import QuestionsList from './components/QuestionsList.jsx';
import TagList from './components/TagList.jsx';
import TagFilter from './components/TagFilter.jsx';
// import logo from './components/batfish.jpg';

const App = () => {
// STATE HOOKS
  const [title, setTitle] = useState(title);
  const [description, setDescription] = useState(description);
  const [solution, setSolution] = useState(solution);
  const [comments, setComments] = useState(comments);
  const [tag, setTag] = useState(tag);
  const [titleCards, setTitleCards] = useState({titles: []});
  const [expandFilters, setExpandFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(selectedFilter);

  // FUNCTION THAT QUERIES DB AND UPDATES STATE
  const fetchAndUpdateTitles = async () => {
    try {
      // add selected filter tag to req param
      const response = await fetch('api/listProblems/' + selectedFilter);
      const titles = await response.json();
      setTitleCards(titles);
    } catch (error) {
      console.error('Error fetching titles: ', error);
    }
  };

  const handleQuestionUpdate = (field, value) => {
    switch(field) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'solution':
        setSolution(value);
        break;
      case 'comments':
        setComments(value);
        break;
      case 'tag':
        setTag(value);
      default:
        break;
    }
  }
  
  //FUNCTION THAT ACCESSES DATA

  const handleAccessDataClick = async (e)=> {
    const clickedTitle = e.target.title;
    try {
      //readProblem sends title on req.body
      const response = await fetch(`/api/readProblem`, {
        //title
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title: clickedTitle})
      });
      const data = await response.json();
      const { title, description, solution, comments, tag } = data;
      setTitle(title);
      setDescription(description);
      setSolution(solution);
      setComments(comments);
      setTag(tag);
    }
    catch (error) {
      console.log('There was an error accessing the data: ', error)
    }
  };
  
  //FUNCTION THAT DELETES A TITLE
  const handleDeleteClick = async (e) => {
    const clickedTitle = e.target.title;
    try {
      console.log('Clicked Title for delete', clickedTitle);
      const response = await fetch('api/deleteProblem', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({title: 
          clickedTitle})
      });
      fetchAndUpdateTitles();
    }
    catch (error) {
      console.log('There was an error deleting the title: ', error)
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setTitle('');
    setDescription('');
    setSolution('');
    setComments('');
    setTag('');
  };

  //FUNCTION THAT ADDS A NEW PROBLEM
  const handleAddTitle = async (e) => {
    e.preventDefault();

    const newProblem = {
      title,
      description,
      solution,
      comments,
      tag
    };

    if(titleCards.titles.includes(title)){
      try {
        await fetch('api/updateProblem', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProblem),
        });
      } catch (err) {
        console.log('There was an error updating the title', err);
      }
    } 
    else {
      try {
        await fetch('api/createProblem', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProblem),
        });
      } 
      catch (err) {
        console.log('There was an error creating the title', err);
      }
    }
    fetchAndUpdateTitles();
    handleClear(e);
  };

  // FUNCTION THAT SENDS LOG OUT REQUEST
  const handleLogout = async () => {
    try {
      const response = await fetch('api/logout', {
        method: 'DELETE',
      });
      // TODO: does anything else need to happen on this in the front end? or is it all handled in the backend? redirect to login screen?

    } catch (error) {
      console.error('Error logging out: ', error);
    }
  }

  // FUNCTION THAT EXPANDS AND CONTRACTS FILTERS
  const handleFilterExpand = () => {
    setExpandFilters(!expandFilters);
  }

  // FUNCTION THAT TRACKS CURRENTLY SELECTED FILTER RADIO BUTTON
  const handleFilterSelection = (value) => {
    setSelectedFilter(value);
  }

  // FUNCTION THAT SUBMITS TAG FILTER CHOICE
  const handleFilterSubmit = async () => {
    fetchAndUpdateTitles();
  }

  // FUNCTION THAT CLEARS TAG FILTER CHOICE
  const handleFilterClear = () => {
    setSelectedFilter('');
  }


  
  // LOAD TITLES ON INITIAL PAGE RENDER
  useEffect(() => {
    fetchAndUpdateTitles();
  }, []);
  
  return (
    <div className='App'>
      <div className='left-panel'>
        <button className='add-challenge' onClick={(e) => handleClear(e)}>Add a Challenge</button>
        <TagFilter 
          expandFilters = {expandFilters} 
          selectedFilter = {selectedFilter}
          handleFilterExpand = {handleFilterExpand}
          handleFilterSubmit = {handleFilterSubmit}
          handleFilterReset = {handleFilterClear}
          onChange = {handleFilterSelection}
        />
        <QuestionsList value="tbu" title={title} handleDeleteClick={handleDeleteClick} handleAccessDataClick={handleAccessDataClick} titleCards={titleCards}/>
      </div>
      <CodeViewer
        title={title}
        description={description}
        solution={solution}
        comments ={comments}
        handleClear={handleClear}
        handleAccessDataClick={handleAccessDataClick}
        onChange={handleQuestionUpdate}        
        handleAddTitle={handleAddTitle}
      />
      <div className='right-panel'>
        <button className='logout' onClick={handleLogout}>Log out</button>
        <TagList 
          tag = {tag}
          onChange = {handleQuestionUpdate}
        />
      </div>
      {/* <img 
      // src={require('./components/batfish.jpg')}
      // src = {logo}
      src='https://lh3.googleusercontent.com/pw/AIL4fc9_XPgm2t69mbxbSNtL28o76AA0O_YmNp63gh3R_WGzAtpfcoH-7k854ZXx6ckPHbZsz70-uQ7dJldIooR8G5Xmci95NscJn5_br6LWRByY3Vc00mmV7xNAsE4WjLk1tqlQ6nU1KZJjO9KBWfy7yklLThCBkq_mvfZX2lhwpdG_mtKJT2C9iLQZoaIrfaPTvHtNaJCI8UwWmVWftzpGjEs2JTa2He30n3sHSOX16viqSg7UFTrWPiDEi1W2gV5CAU98CzqB-fft5SX3wp7JxNPh5vvHBKBWOJ2k94c8MQO_c1T7SY4S2CGJ9tDdjiLe8tt2S5K_nIdoL_5adZ3hDC517Z6Y9oYqDlnps5TfkO5DFbFT7rK76mN1GmRahKi5g8NUj7oTlyUoHc-GK1fWRxkqMqC1f2pHvNcZmPYxV4dXJkjpJ6waKuUSj4Q1DoqWcpbc5e7IXjHfJE1XIkTr_5-8eOgAdnHa4xduJs-FXGdFSugztKiXWApsQUXhTJNEoWEWXUAvpHqKCslj_LOtNqQ_hOzkoaF5o6shHZyI0Ul5jK7fYOJ1jtao8Ee4xLguoGkIIh-Lga2w2Hz54FzF0OxEMDvV4o80nn_A7cKYJ1ecReCbYjdbkBJNwQ3dxzQcZ1kHBvwsMns5dI0i9hzBruHoXA2igpxNyOdlFPoGGWig-isZOgakPAPRF9TAfkHzp7Dq6lF8HyUw4zDLwdEDy0NyOwzklFkYfI9jFdnI8qDPQzwNwuTGPOWnCi8qdRcM0bGWB5XUoCOrfxIGZ_O_XwtrVdPAxb7vwOwp0RJ31ShawUGYYXCzSRYknxatIvOW3Wv0_CF3Ce1tfZddHYNbUU4_SSSt8oAuWtsbmhoMIktO-OwgqG5lSTDRhzcmCsqrigBqFwW5y55Cvr7wVgqlFsxk_ab2hAOb7XoBo9OIPJz8wqTwFo-Z4U7c6p5lUaHmenyDF85aHRxqC7Vid3JkEt3OLSzhVek=w600-h600-s-no?authuser=1'
      alt="Batfish Logo"
      style={{height:"150px", width:"150px", alignSelf: 'flex-start'}}
      />  */}

    </div>
  )
}

export default App;
