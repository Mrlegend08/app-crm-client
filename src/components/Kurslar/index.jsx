import React from 'react'
import "./index.scss"
import { Button } from '@mui/material'
import book from "../../assets/images/png-clipart-book-book.png"
import TextField from '@mui/material/TextField';
import InfoIcon from '@mui/icons-material/Info';
import MenuItem from '@mui/material/MenuItem';
function createData(id, name, cost) {
    return { id, name, cost };
}

const currencies = [
    {
        value: 'Targetolog',
        label: 'Targetolog',
    },
    {
        value: 'Web',
        label: 'Web',
    },
    {
        value: 'Web site qilish',
        label: 'Web site qilish',
    },
    {
        value: 'English beginner',
        label: 'English beginner',
    },
    {
        value: 'Rus tili',
        label: 'Rus tili',
    },
    {
        value: 'Smm',
        label: 'Smm',
    },
    {
        value: "3D's max",
        label: "3D's max",
    },
];
const rows = [
    createData(1, 'Targetolog', "900 000 UZS"),
    createData(2, 'Web', "100 000 UZS"),
    createData(3, 'Web site qilish', "400 000 UZS"),
    createData(4, 'English beginner', "500 000 UZS"),
    createData(5, 'Rus tili', "400 000 UZS"),
    createData(6, 'SMM', "200 000 UZS"),
    createData(7, "3D's MAX", "800 000 UZS"),
    createData(8, 'Web', "400 000 UZS")
];
const Kurslar = () => {
    return (
        <>
            <div className="talabalar">
                <div className="talabalar__wrapper">
                    <div className="talabalar__top">
                        <h3 className='talabalar__title'>Kurslar</h3>
                        <Button style={{ borderRadius: "7px" }} variant="contained" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Yangisini Qo`shish</Button>
                    </div>
                    <ul className='kurslar__list d-flex align-items-center gap-3 flex-wrap'>
                        {rows.map((row) => (
                            <li key={row.id} className='kurslar__item'>
                                <div className="kurslar__img-block">
                                    <img src={book} alt="Book png" width={150} height={150} />
                                </div>
                                <div className="d-flex p-3 flex-column align-items-start">
                                    <strong>{row.name}</strong>
                                    <span>{row.cost}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div style={{ width: "340px" }} className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 style={{ color: "#9E9E9E" }} className="offcanvas-title d-flex align-items-center gap-1" id="offcanvasRightLabel"><InfoIcon />Yangi kurs qo'shish</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form onSubmit={(evt) => handleSubmit(evt)}>
                        <TextField
                            label="Nomi"
                            id="outlined-size-small"
                            size="small"
                            name='name'
                            style={{ width: '100%' }}
                            className='mb-4'
                        />
                        <div className="d-flex mb-4" style={{ paddingLeft: "10px" }}>
                            <div style={{ cursor: "pointer" }} className="form-check d-flex gap-2 align-items-center  form-check-inline" >
                                <input style={{ width: "20px", height: "20px" }} className="form-check-input" type="radio" name="type" id="inlineRadio1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Online</label>
                            </div>
                            <div style={{ cursor: "pointer" }} className="form-check d-flex gap-2 align-items-center form-check-inline">
                                <input style={{ width: "20px", height: "20px" }} className="form-check-input" type="radio" name="type" id="inlineRadio2" value="option2" />
                                <label className="form-check-label" htmlFor="inlineRadio2">Ofline</label>
                            </div>
                            <div style={{ cursor: "pointer" }} className="form-check d-flex gap-2 align-items-center form-check-inline">
                                <input style={{ width: "20px", height: "20px" }} className="form-check-input" type="radio" name="type" id="inlineRadio3" value="option2" />
                                <label className="form-check-label" htmlFor="inlineRadio3">Video Kurs</label>
                            </div>
                        </div>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Kursni tanlang"
                            style={{ width: '100%' }}
                            className='mb-4'
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
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

export default Kurslar
