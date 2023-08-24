import React from 'react';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import CodeViewer from './components/CodeViewer.jsx';
import QuestionsList from './components/QuestionsList.jsx';
import TagList from './components/TagList.jsx';
import TagFilter from './components/TagFilter.jsx';
import LoginSignUp from './LoginSignup.jsx';


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
  const [user, setUser] = useState();
  const [isLogin, setIsLogin] = useState(false)

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
    <Router>
        <div> 
          <Routes>
            <Route
              path="/"
              element={
                isLogin ? (
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
                      <QuestionsList title={title} handleDeleteClick={handleDeleteClick} handleAccessDataClick={handleAccessDataClick} titleCards={titleCards} />
                    </div>
                    <CodeViewer title={title}
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
                </div>
                ) : (
                  <Navigate replace to={'/login'}/>
                )
              }/>
            <Route
              path="/login"
              element={
                !isLogin ? (
                  < LoginSignUp onLogin={setIsLogin} />
                ) : (
                  <div className='App'>
                    <QuestionsList title={title} handleDeleteClick={handleDeleteClick} handleAccessDataClick={handleAccessDataClick} titleCards={titleCards} />
                    <CodeViewer  title={title}
                      description={description}
                      solution={solution}
                      comments ={comments}
                      handleClear={handleClear}
                      handleAccessDataClick={handleAccessDataClick}
                      onChange={handleQuestionUpdate}        
                      handleAddTitle={handleAddTitle}
                    /> 
                    </div>
                )
              }
              />
          </Routes>
        </div>
    </Router>
  )
}

export default App;
