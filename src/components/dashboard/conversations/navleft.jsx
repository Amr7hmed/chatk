import React from 'react'
import Search from './search';
import ButtonList from './buttonlist';

function NavLeft() {
  return (
    <div className='dashboard__left'>
        <Search/>
        <ButtonList/>
    </div>
  )
}

export default NavLeft;