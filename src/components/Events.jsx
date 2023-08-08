import React from 'react';


function Events({handleClick}) {
  return (
    <div className='event-box' onClick={handleClick}>
        <div className='mtile'></div>
        <div className='mtile'></div>
        <div className='mtile'></div>
        <div className='mtile'></div>
        <div className='mtile'></div>
        <div className='mtile'></div>
        <div className='mtile'></div>
        <div className='mtile'></div>
        <div className='mtile'></div>
    </div>
  );
}

export default Events;
