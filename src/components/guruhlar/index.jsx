import React from 'react'
import { Segmented } from 'antd';
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
import MenuItem from '@mui/material/MenuItem';
function createData(id, name, teacher, time, kunlar, holat) {
  return { id, name, teacher, time, kunlar, holat };
}


const rows = [
  createData(1, 'SMM', "Fotima Yuldasheva", "08:00", "Boshqa"),
  createData(2, 'Motion Grafika', "Ezoza Abdullayeva", "08: 00", "Boshqa"),
  createData(3, 'Arab tili', "Fotima Yuldasheva", "08:00", "Juft kunlar"),
  createData(4, "3D's MAX", "Fotima Yuldasheva", "08:00", "Boshqa")
];
const rowsTwo = [
  createData(1, 'Rus tili', "Ahmad shox", "08:00", "Boshqa"),
  createData(2, "3D's MAX", "Malika Elnazarova", "08: 00", "Boshqa"),
  createData(3, 'Motion Grafika', "Muhammadillo Xakimov", "08:00", "Boshqa"),
  createData(4, "3D's MAX", "Ahmad Shox", "08:00", "Boshqa")
];
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


const teachers = [
  {
    value: 'Fotima Yuldasheva',
    label: 'Fotima Yuldasheva',
  },
  {
    value: 'Muhammadillo Xakimov',
    label: 'Muhammadillo Xakimov',
  },
  {
    value: 'Asal Ileysboyeva',
    label: 'Asal Ileysboyeva',
  },
  {
    value: 'Ahmad shox',
    label: 'Ahmad shox',
  }
];

const vaqt = [
  {
    value: 'Juft kunlar',
    label: 'Juft kunlar',
  },
  {
    value: 'Toq kunlar',
    label: 'Toq kunlar',
  },
  {
    value: 'Dam olish kunlar',
    label: 'Dam olish kunlar',
  },
  {
    value: 'Har kuni',
    label: 'Har kuni',
  }
];
const xona = [
  {
    value: '1-xona',
    label: '1-xona',
  },
  {
    value: '2-xona',
    label: '2-xona',
  },
  {
    value: '3-xona',
    label: '3-xona',
  },
  {
    value: '4-xona',
    label: '4-xona  ',
  }
];
const Guruhlar = () => {
  const [rowSelect, setRowSelect] = React.useState(true)
  return (
    <>
      <div className="talabalar">
        <div className="talabalar__wrapper">
          <div className="talabalar__top">
            <h2 className='talabalar__title'>Guruhlar</h2>
            <Button style={{ borderRadius: "7px" }} variant="contained" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Yangisini Qo`shish</Button>
          </div>
          <TableContainer style={{ padding: "8px" }} component={Paper}>
            <Segmented onChange={() => setRowSelect(!rowSelect)} className='p-1' style={{ width: "1121px" }} options={[`Active`, 'Archive']} />
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: "100px" }}>ID</TableCell>
                  <TableCell style={{ width: "0px" }} align="left">Nomi</TableCell>
                  <TableCell style={{ width: "50px" }} align="left">O'qituvchi</TableCell>
                  <TableCell style={{ width: "50px" }} align="left">Vaqt</TableCell>
                  <TableCell style={{ width: "50px" }} align="left">Kunlar</TableCell>
                  <TableCell style={{ width: "50px" }} align="left">Holat</TableCell>
                  <TableCell style={{ width: "50px" }} align="left"></TableCell>
                  <TableCell style={{ width: "50px" }} align="left"></TableCell>
                  <TableCell style={{ width: "50px" }} align="left"></TableCell>
                  <TableCell style={{ width: "50px" }} align="left"></TableCell>
                  <TableCell style={{ width: "50px" }} align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowSelect ? rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>
                      {row.id}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.teacher}</TableCell>
                    <TableCell align="left">{row.time}</TableCell>
                    <TableCell align="left">{row.kunlar}</TableCell>
                    <TableCell style={{ cursor: "pointer" }} align="left"><ModeIcon /></TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
                  </TableRow>
                )) : rowsTwo.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>
                      {row.id}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.teacher}</TableCell>
                    <TableCell align="left">{row.time}</TableCell>
                    <TableCell align="left">{row.kunlar}</TableCell>
                    <TableCell style={{ cursor: "pointer" }} align="left"><ModeIcon /></TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
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
            <TextField
              label="Nomi"
              id="outlined-size-small"
              size="small"
              name='name'
              className='mb-4'
              style={{ width: '100%' }}
            />
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
              id="outlined-select-currency"
              select
              label="O`qituvchini tanlang"
              style={{ width: '100%' }}
              className='mb-4'
            >
              {teachers.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Kunlar"
              style={{ width: '100%' }}
              className='mb-4'
            >
              {vaqt.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Xonani tanlang"
              style={{ width: '100%' }}
              className='mb-4'
            >
              {xona.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div className="mb-4">
              <CommonlyUsedComponents />
            </div>
            <Button style={{ borderRadius: "7px" }} variant="contained" type='submit'>Yuborish</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Guruhlar
