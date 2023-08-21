import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function TitleCard(props) {
  const { title, handleDeleteClick, handleAccessDataClick } = props;

  return (
    <div className='title-Card'>
    <button className='title-button' title={title} onClick={handleAccessDataClick}>
      {title}
    </button>
    <button className='delete-button' title={title} onClick={handleDeleteClick}>
      X
    </button>
  </div>
  );
  // {
  //   title: 'user input',
  //   icon: <DeleteIcon />
  //   // link: This needs to be a link back to the data
  // }
}
export default TitleCard;