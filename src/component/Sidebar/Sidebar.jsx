import './sidebar.css';
import React from 'react';
import TocIcon from '@mui/icons-material/Toc';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import PieChartIcon from '@mui/icons-material/PieChart';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import MailIcon from '@mui/icons-material/Mail';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

export  function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Sidebar Admin</h3>
                <ul className="sidebarLista">
                    <li className="sidebarItem activo">
                        < TocIcon className='sidebarIcon '/>
                        Home

                    </li>
                    <li className="sidebarItem ">
                        < LegendToggleIcon className='sidebarIcon'/>
                        Analitica

                    </li>
                    <li className="sidebarItem">
                        < MonetizationOnIcon className='sidebarIcon'/>
                        Sales

                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarLista">
                    <li className="sidebarItem activo">
                        <  PersonOutlineIcon className='sidebarIcon '/>
                        User

                    </li>
                    <li className="sidebarItem ">
                        <  ReceiptIcon className='sidebarIcon'/>
                        Productos

                    </li>
                    <li className="sidebarItem">
                        <AttachMoneyIcon className='sidebarIcon'/>
                        Trasacion

                    </li>
                    <li className="sidebarItem">
                        <EqualizerIcon className='sidebarIcon'/>
                        Reporte
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notificacion</h3>
                <ul className="sidebarLista">
                    <li className="sidebarItem activo">
                        <  MailIcon className='sidebarIcon '/>
                        Mail

                    </li>
                    <li className="sidebarItem ">
                        <  DynamicFeedIcon className='sidebarIcon'/>
                        Feedback

                    </li>
                    <li className="sidebarItem">
                        <InsertCommentIcon className='sidebarIcon'/>
                        Mensage

                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarLista">
                    <li className="sidebarItem activo">
                        <  CardTravelIcon  className='sidebarIcon '/>
                        Manage

                    </li>
                    <li className="sidebarItem ">
                        <PieChartIcon className='sidebarIcon'/>
                       Analytics

                    </li>
                    <li className="sidebarItem">
                        < GppMaybeIcon className='sidebarIcon'/>
                        Reports

                    </li>
                </ul>
            </div>
        </div>

   </div>);
}


