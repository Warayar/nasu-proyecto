import React from 'react'
import './Sidebar.css'

const Sidebar = ({ isOpen }) => {
  return <div className={`${'sidebar'} ${isOpen && 'open'} `}>sidebar</div>
  
}

export default Sidebar;

