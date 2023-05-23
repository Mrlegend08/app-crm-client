import React from 'react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { TextField } from '@mui/material';

const Lidlar = () => {
    const [formToggle, setFormToggle] = React.useState(false)
    const [formToggleTwo, setFormToggleTwo] = React.useState(false)
    const [formToggleThree, setFormToggleThree] = React.useState(false)
    return (
        <>
            <div className="talabalar p-4">
                <div style={{ width: "1174px" }} className="d-flex align-items-center bg-white p-3 justify-content-between">
                    <div style={{ border: "1px solid #EDEDED", width: "375px", height: "160px" }} className="d-flex flex-column p-1 ps-3 py-2">
                        <h6 style={{ fontSize: "23px", fontWeight: "medium" }} className='m-0  text-black p-1 mb-1'>So'rovlar</h6>
                        <div style={{ width: "100%" }} className="d-flex align-items-center justify-content-between">
                            <span className='position-relative'><button onClick={() => setFormToggle(!formToggle)} className="lidlar__btn d-flex gap-2 p-2">
                                <AddCircleOutlineOutlinedIcon fontSize='small' />
                                SO'ROV QO'SHISH
                            </button>
                                <form className={`lidlar__form p-2 ${formToggle ? "d-flex" : "d-none"} flex-column gap-2`}>
                                    <TextField id="outlined-basic" size="small" label="Ismi" variant="outlined" />
                                    <TextField id="outlined-basic" size="small" label="Telefon raqami" variant="outlined" />
                                    <TextField id="outlined-basic" size="small" label="Tavsif" variant="outlined" />
                                </form>
                            </span>
                            <button className='lidlar__burger'><ListOutlinedIcon /></button>
                        </div>
                    </div>
                    <div style={{ border: "1px solid #EDEDED", width: "375px", height: "160px" }} className="d-flex flex-column p-1 ps-3 py-2">
                        <h6 style={{ fontSize: "23px", fontWeight: "medium" }} className='m-0  text-black p-1 mb-1'>Kutish</h6>
                        <div style={{ width: "100%" }} className="d-flex align-items-center justify-content-between">
                            <span className='position-relative'><button onClick={() => setFormToggleTwo(!formToggleTwo)} className="lidlar__btn d-flex gap-2 p-2">
                                <AddCircleOutlineOutlinedIcon fontSize='small' />
                                SO'ROV QO'SHISH
                            </button>
                                <form className={`lidlar__form p-2 ${formToggleTwo ? "d-flex" : "d-none"} flex-column gap-2`}>
                                    <TextField id="outlined-basic" size="small" label="Ismi" variant="outlined" />
                                    <TextField id="outlined-basic" size="small" label="Telefon raqami" variant="outlined" />
                                    <TextField id="outlined-basic" size="small" label="Tavsif" variant="outlined" />
                                </form>
                            </span>
                            <button className='lidlar__burger'><ListOutlinedIcon /></button>
                        </div>
                    </div>
                    <div style={{ border: "1px solid #EDEDED", width: "375px", height: "160px" }} className="d-flex flex-column p-1 ps-3 py-2">
                        <h6 style={{ fontSize: "23px", fontWeight: "medium" }} className='m-0  text-black p-1 mb-1'>To`plam</h6>
                        <div style={{ width: "100%" }} className="d-flex align-items-center justify-content-between">
                            <span className='position-relative'><button onClick={() => setFormToggleThree(!formToggleThree)} className="lidlar__btn d-flex gap-2 p-2">
                                <AddCircleOutlineOutlinedIcon fontSize='small' />
                                SO'ROV QO'SHISH
                            </button>
                                <form className={`lidlar__form p-2 ${formToggleThree ? "d-flex" : "d-none"} flex-column gap-2`}>
                                    <TextField id="outlined-basic" size="small" label="Ismi" variant="outlined" />
                                    <TextField id="outlined-basic" size="small" label="Telefon raqami" variant="outlined" />
                                    <TextField id="outlined-basic" size="small" label="Tavsif" variant="outlined" />
                                </form>
                            </span>
                            <button className='lidlar__burger'><ListOutlinedIcon /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lidlar
