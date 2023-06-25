import React from 'react'
import Search from './search';
import ButtonList from './buttonlist';
import GroupChat from './groupchat';

function NavLeft() {
  return (
    <div className='dashboard__left'>
        <Search/>
        <ButtonList/>
        <GroupChat/>
    </div>
  )
}

export default NavLeft;