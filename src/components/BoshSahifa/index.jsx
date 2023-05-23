import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
const BoshSahifa = () => {
    return (
        <>
            <div className="talabalar p-4">
                <div className="d-flex align-items-center gap-2">
                    <div style={{ width: "287px", height: "144px" }} className="d-flex flex-column shadow align-items-center p-4 gap-2 bg-white">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <PersonOutlineOutlinedIcon fontSize='large'/>
                            <small>Faol lidlar</small>
                        </div>
                        <span style={{fontSize: "24px"}}>345</span>
                    </div>
                    <div style={{ width: "287px", height: "144px" }} className="d-flex flex-column shadow align-items-center p-4 gap-2 bg-white">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <SchoolOutlinedIcon fontSize='large' />
                            <small>Faol talabalar</small>
                        </div>
                        <span style={{ fontSize: "24px" }}>236</span>
                    </div>
                    <div style={{ width: "287px", height: "144px" }} className="d-flex flex-column shadow align-items-center p-4 gap-2 bg-white">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <PeopleAltOutlinedIcon fontSize='large' />
                            <small>Guruhlar</small>
                        </div>
                        <span style={{ fontSize: "24px" }}>186</span>
                    </div>
                    <div style={{ width: "287px", height: "144px" }} className="d-flex flex-column shadow align-items-center p-4 gap-2 bg-white">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <GppMaybeOutlinedIcon fontSize='large' />
                            <small>Qarzdorlar</small>
                        </div>
                        <span style={{ fontSize: "24px" }}>155</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoshSahifa
