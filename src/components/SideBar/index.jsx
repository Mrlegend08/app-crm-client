import React from 'react'
import "./index.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { NavLink } from 'react-router-dom';
const SideBar = () => {
    return (
        <>
            <div className='side-bar'>
                <ul className="side-bar__list">
                    <NavLink to={"boshSahifa"} className='side-bar__item'>
                        <HomeOutlinedIcon fontSize='large' />
                        Bosh Sahifa
                    </NavLink>
                    <NavLink to={"talabalar"} className='side-bar__item'>
                        <SchoolOutlinedIcon fontSize='large' />
                        Talabalar
                    </NavLink>
                    <NavLink to={"oqituvchilar"} className='side-bar__item'>
                        <PeopleAltOutlinedIcon fontSize='large' />
                        O'qituvchilar
                    </NavLink>
                    <NavLink to={"kurslar"} className='side-bar__item'>
                        <MonitorOutlinedIcon fontSize='large' />
                        Kurslar
                    </NavLink>
                    <NavLink to={"guruhlar"} className='side-bar__item'>
                        <GroupsOutlinedIcon fontSize='large' />
                        Guruhlar
                    </NavLink>
                    <NavLink to={"lidlar"} className='side-bar__item'>
                        <FileDownloadOutlinedIcon fontSize='large' />
                        Lidlar
                    </NavLink>
                    <NavLink to="sozlamalar" className='side-bar__item'>
                        <span style={{ color: "#F44336" }}> <SettingsOutlinedIcon fontSize='large' /></span>
                        Sozlamalar
                    </NavLink>
                </ul>
            </div>
        </>
    )
}

export default SideBar
