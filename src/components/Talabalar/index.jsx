import React from 'react'
import "./index.scss"
import { Button } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeIcon from '@mui/icons-material/Mode';
import InfoIcon from '@mui/icons-material/Info';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import TextField from '@mui/material/TextField';
import CommonlyUsedComponents from '../date';
import { Link } from 'react-router-dom';

function createData(id, name, phone, balance, holat) {
    return { id, name, phone, balance, holat };
}

const rows = [
    createData(1, 'Omadbek', "(97) 773-33-73", "412 500"),
    createData(2, 'Sevara', "(97) 773-33-73", "300 500"),
    createData(3, 'Nodir', "(97) 773-33-73", "522 500"),
    createData(4, 'Rozaliya', "(97) 773-33-73", "102 000"),
    createData(5, 'Malika', "(97) 773-33-73", "500 000"),
    createData(6, 'Baxrom', "(97) 773-33-73", "350 000"),
    createData(7, 'Venera', "(97) 773-33-73", "410 000"),
    createData(8, 'Yupiter', "(97) 773-33-73", "210 000")
];

const Talabalar = () => {
    const studentMore = (index) => {
        localStorage.setItem("studentIndex", JSON.stringify(index))
    }

    return (
        <>
            <div className="talabalar">
                <div className="talabalar__wrapper">
                    <div className="talabalar__top">
                        <h2 className='talabalar__title'>Guruhlar</h2>
                        <Button style={{ borderRadius: "7px" }} variant="contained" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Yangisini Qo`shish</Button>
                    </div>
                    <TableContainer style={{ padding: "8px" }} component={Paper}>

                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: "50px" }}>ID</TableCell>
                                    <TableCell style={{ width: "120px" }} align="left">Nomi</TableCell>
                                    <TableCell style={{ width: "150px" }} align="left">Phone</TableCell>
                                    <TableCell style={{ width: "100px" }} align="left">Balance</TableCell>
                                    <TableCell align="left">Holat</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="left">{row.phone}</TableCell>
                                        <TableCell align="left">{row.balance}</TableCell>
                                        <TableCell onClick={() => studentMore(row.id - 1)} style={{ cursor: "pointer" }} align="left"><Link style={{color: "black"}} to="more"
                                        ><ModeIcon /></Link></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div className="talabalar__table-flex">
                            <p className='talabalar__table-desc'>Ma`lumotlar 15 dan 35 gacha, 234 ta dan</p>
                            <div className="talabalar__pagination-flex">
                                <button className='talabalar__pagination-btn'>1</button>
                                <button className='talabalar__pagination-btn'>2</button>
                                <button className='talabalar__pagination-btn'>3</button>
                                <span>...</span>
                                <button className='talabalar__pagination-btn'>15</button>
                                <button className='talabalar__pagination-btn'>16</button>
                            </div>
                        </div>
                    </TableContainer>
                </div>
            </div>
            <div style={{ width: "325px" }} className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 style={{ color: "#9E9E9E" }} className="offcanvas-title d-flex align-items-center gap-1" id="offcanvasRightLabel"><InfoIcon />Yangi kurs qo'shish</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form onSubmit={(evt) => handleSubmit(evt)}>
                        <div className="input-group mb-4">
                            <span className="input-group-text" id="basic-addon1">+998</span>
                            <input type="text" className="form-control" name='mobileNumber' placeholder="Mobile Number" aria-label="Mobile Number" aria-describedby="basic-addon1" />
                        </div>
                        <TextField
                            label="Ismi"
                            id="outlined-size-small"
                            size="small"
                            name='name'
                            style={{ width: '100%' }}
                        />
                        <div className="mb-4">
                            <CommonlyUsedComponents />
                        </div>
                        <div className="d-flex mb-4" style={{ paddingLeft: "10px" }}>
                            <div style={{ cursor: "pointer" }} className="form-check d-flex gap-2 align-items-center  form-check-inline" >
                                <input style={{ width: "20px", height: "20px" }} className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="option1" />
                                <label style={{ fontSize: "20px" }} className="form-check-label" htmlFor="inlineRadio1">Erkak</label>
                            </div>
                            <div style={{ cursor: "pointer" }} className="form-check d-flex gap-2 align-items-center form-check-inline">
                                <input style={{ width: "20px", height: "20px" }} className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="option2" />
                                <label style={{ fontSize: "20px" }} className="form-check-label" htmlFor="inlineRadio2">Ayol</label>
                            </div>
                        </div>
                        <TextField
                            id="outlined-multiline-static"
                            label="Tavsif"
                            multiline
                            rows={3}
                            style={{ width: "100%" }}
                            className='mb-4'
                            name="info"
                        />
                        <Button style={{ borderRadius: "7px" }} variant="contained" type='submit'>Yuborish</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Talabalar
