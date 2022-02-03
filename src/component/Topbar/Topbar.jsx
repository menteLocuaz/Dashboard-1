import React from 'react';
import './topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import Avatar from '@mui/material/Avatar';


export  function Topbar() {
  return ( 
  <div className='topbar'>
      <div className="topbarwrapper">
          <div className="topleft">
          <span className='logo'>logo Admin</span>
          </div>
          <div className="toprigh">
           <div className="topbariconsContainer">
               <NotificationsNoneIcon/>
               <span className="topIconsBag">2</span>
           </div>
           <div className="topbariconsContainer">
               <LanguageIcon/>
               <span className="topIconsBag">2</span>
           </div>
           <div className="topbariconsContainer">
               <SettingsIcon/>
           </div>
           <Avatar alt="Remy Sharp"
            src="/static/images/avatar/1.jpg" 
            className='topAvatar'/>
          </div>
         
       </div> 
    </div>);
}


