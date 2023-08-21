import React from 'react';
import CodeViewer from './components/CodeViewer';
import QuestionsList from './components/QuestionsList';

const App = () => {
// STATE HOOKS
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [solution, setSolution] = useState('');
  const [notes, setNotes] = useState('');
  const [titleCards, setTitleCards] = useState([]);

    // FUNCTION THAT QUERIES DB AND UPDATES STATE
    const fetchAndUpdateTitles = async () => {
      try {
        const response = await fetch('api/findProblems'); //we need a router that gets us to the readProblemTitles middleware
        if (response.ok) {
          const titles = await response.json();
          setTitleCards(titles);
        } else {
          console.error('An error occured while fetching titles');
        }
      } catch (error) {
        console.error('Error fetching titles: ', error);
      }
    };
  
    //FUNCITON THAT ACCESSE DATA
  
    const handleAccessDataClick = async ()=> {
      const title = e.target.title;
      try {
        //readProblem sends title on req.body
        const response = await fetch(`api/readProblem/${title}`)
        const data = await response.json();
        const { title, description, solution, notes } = data;
        setTitle(title);
        setDescription(description);
        setSolution(solution);
        setNotes(notes);
      }
      catch (error) {
        console.log('There was an error accessing the data: ', error)
      }
    };
  
    //FUNCTION THAT DELETES A TITLE
    const handleDeleteClick = async () => {
      const title = e.target.title;
      try {
        const response = await fetch('api/deleteProblem', {
          method: 'DELETE',
          header: { 'Content-Type': 'application/json'},
          body: JSON.stringify(title)
        });
        fetchAndUpdateTitles();
      }
      catch (error) {
        console.log('There was an error deleting the title: ', error)
      }
    }

  
  const handleAddTitle = async (e) => {
    e.preventDefault();

    const newProblem = {
      title,
      description,
      solution,
      notes
    };

    if(titleCards.includes(title)){
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
  } else {
      try {
        await fetch('api/createProblem', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProblem),
        });
      } catch (err) {
        console.log('There was an error creating the title', err);
      }
  }
    fetchAndUpdateTitles();
  };
  
  // LOAD TITLES ON INITIAL PAGE RENDER
  useEffect(() => {
    fetchAndUpdateTitles();
  }, []);
  
  return (
    <div>
      <CodeViewer value="tbu" title={title} description={description} solution={solution} notes ={notes} handleDeleteClick={handleDeleteClick} handleAccessDataClick={handleAccessDataClick}/>
      <QuestionsList value="tbu" title={title} handleDeleteClick={handleDeleteClick} handleAccessDataClick={handleAccessDataClick}/>
    </div>
  )
}
//title, handleDeleteClick, handleaccessDataClick

export default App;

