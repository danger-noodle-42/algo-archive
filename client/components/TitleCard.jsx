import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function TitleCard(props) {
  const { title } = props;
  return (
    <button>
      <button className='delete-button'></button>
    </button>
  );

  // {
  //   title: 'user input',
  //   icon: <DeleteIcon />
  //   // link: This needs to be a link back to the data
  // }
}

export default TitleCard;
