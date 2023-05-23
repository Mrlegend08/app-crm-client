import React from 'react'
import { Segmented } from 'antd';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import "./index.scss"
function createData(id, name, phone, balance, date, kurs, holat, ustoz, boshlanganVaqt, tugashVaqti, kunlar, qoshilganSana, narx) {
    return {
        id, name, phone, balance, date, kurs, holat, ustoz, boshlanganVaqt, tugashVaqti, kunlar, qoshilganSana, narx
    };
}
const rows = [
    createData(1, 'Omadbek', "(97) 773-33-73", "412 500", "22/08/2002", "3D's MAX", "Harakatsiz (Sinov)", "Nafisa Ahmadaliyeva", "10/02/2023", "25/07/2023", "boshqa", "20/07/2023", "500 000 so'm"),
    createData(2, 'Sevara', "(97) 773-33-73", "300 500", "18/05/2005", "Web Dasturlash", "Harakatsiz (Sinov)", "Ahmad Shox", "10/02/2023", "25/07/2023", "boshqa", "20/07/2023", "500 000 so'm"),
    createData(3, 'Nodir', "(97) 773-33-73", "522 500", "24/05/2004", "Grafik Dizayn", "Harakatsiz (Sinov)", "Ahmad Shox", "10/02/2023", "25/07/2023", "boshqa", "20/07/2023", "500 000 so'm"),
    createData(4, 'Rozaliya', "(97) 773-33-73", "102 000", "27/03/1998", "Marketing", "Harakatsiz(Sinov)", "Jisgul Hikmatova", "10/02/2023", "25/07/2023", "boshqa", "20/07/2023", "500 000 so'm"),
    createData(5, 'Malika', "(97) 773-33-73", "500 000", "06/07/2006", "SMM", "Harakatsiz (Sinov)", "Fotima Sheraliyeva", "10/02/2023", "25/07/2023", "boshqa", "20/07/2023", "500 000 so'm"),
    createData(6, 'Baxrom', "(97) 773-33-73", "350 000", "04/09/2000", "English Beginner", "Harakatsiz (Sinov)", "Asal Ileysboyeva", "10/02/2023", "25/07/2023", "boshqa", "20/07/2023", "500 000 so'm"),
    createData(7, 'Venera', "(97) 773-33-73", "410 000", "21/12/2008", "Rus tili", "Harakatsiz (Sinov)", "Shaxzoda Abdullayeva", "10/02/2023", "25/07/2023", "boshqa", "20/07/2023", "500 000 so'm"),
    createData(8, 'Yupiter', "(97) 773-33-73", "210 000", "25/08/2009", "Web", "Harakatsiz (Sinov)", "Asal Ileysboyeva", "10/02/2023", "25/07/2023", "boshqa", "20/07/2023", "500 000 so'm")
];

const StudentsMore = () => {
    const [selecetedBolim, setSelecetedBolim] = React.useState("Profil")
    const handleChange = (evt) => {
        console.log(evt)
        setSelecetedBolim(evt)
    }
    React.useEffect(() => {
        const timer = setTimeout(() => {
            const elLabel = document.querySelectorAll(".ant-segmented-item-label")
            elLabel.forEach((item) => {
                item.classList.add("important-width")
            })
        }, 1);
        return () => clearTimeout(timer);
    }, []);
    const choosedIndex = localStorage.getItem("studentIndex")
    return (
        <>
            <div className="talabalar student-more">
                <div className="stundent-more__wrapper p-3 d-flex flex-column gap-3">
                    <h2 className='h3'>{rows[choosedIndex].name}</h2>
                    <div className="student-more__flex d-flex align-items-start gap-3">
                        <div style={{ width: "302px", height: "220px" }} className="position-relative student-more__flex-start flex-column  bg-white d-flex p-4 gap-3">
                            <button style={{ width: "40px", height: "40px" }} className='student-more__btn'>
                                <FlagOutlinedIcon fontSize='small' />
                                <span className='student-more__btn-text'>title</span>
                            </button>
                            <button style={{ top: "70px" }} className='student-more__btn'>
                                <CreateOutlinedIcon fontSize='small' />
                                <span className='student-more__btn-text'>O'zgartirish kiritish</span>
                            </button>
                            <button style={{ top: "116px" }} className='student-more__btn'>
                                <SmsOutlinedIcon fontSize='small' />
                                <span className='student-more__btn-text'>Xabar jo`natish</span>
                            </button>
                            <button style={{ top: "156px" }} className='student-more__btn'>
                                <DeleteOutlineOutlinedIcon fontSize='small' />
                                <span className='student-more__btn-text'>O'chirish</span>
                            </button>
                            <h6 className='student-more__flex-start-title'>
                                <b> {rows[choosedIndex].name}</b>
                            </h6>
                            <div style={{ fontSize: "15px" }} className="d-flex flex-column align-items-start ">
                                <span>Balans:&nbsp;<b>{rows[choosedIndex].balance} so'm</b></span>
                                <span>Telefon:&nbsp;<b>{rows[choosedIndex].phone} so'm</b></span>
                            </div>
                            <div style={{ fontSize: "15px" }} className="d-flex flex-column align-items-start text-sm">
                                <span>Tug'ilgan kuni:&nbsp;<b>{rows[choosedIndex].date}</b></span>
                            </div>
                            <div className="d-flex gap-1 align-items-center">
                                <button className='student-more__btn-flex'>
                                    <WebAssetOutlinedIcon fontSize='small' />
                                    <span className='student-more__btn-flex-text'>title</span>
                                </button>
                                <button className='student-more__btn-flex'>
                                    <ChangeCircleOutlinedIcon fontSize='small' />
                                    <span className='student-more__btn-flex-text'>title</span>
                                </button>
                                <button className='student-more__btn-flex'>
                                    <PaymentsOutlinedIcon fontSize='small' />
                                    <span className='student-more__btn-flex-text'>To'lov qilish</span>
                                </button>
                                <button className='student-more__btn-flex'>
                                    <ReplyRoundedIcon fontSize='small' />
                                    <span className='student-more__btn-flex-text'>title</span>
                                </button>
                                <button className='student-more__btn-flex'>
                                    <CalculateOutlinedIcon fontSize='small' />
                                    <span className='student-more__btn-flex-text'>Kalkulyator</span>
                                </button>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-start">
                            <Segmented onChange={(evt) => handleChange(evt)} style={{ width: "827px", backgroundColor: "transparent" }} size='large' options={[`Profil`, "Qo'ng'iroqlar tarixi", "Tarix"]} />
                            {selecetedBolim === "Profil" ? <div className='d-flex flex-column align-items-start gap-3 pt-4 ps-3' style={{ color: "#616161" }}
                            >
                                <div style={{ width: "795px", borderLeft: "5px solid #3949AB", fontSize: "20px", fontWeight: "500" }} className="d-flex p-3 shadow  bg-white justify-content-between rounded align-items-center">
                                    3D's MAX
                                    <FlagOutlinedIcon />
                                </div>
                                <h3 className='m-0 h4'>Guruhlar</h3>
                                <div style={{ width: '397px' }} className="d-flex bg-white p-3 shadow flex-column align-items-start">
                                    <div style={{ borderBottom: "2px solid #EDEDED", height: "fit-content", width: "100%" }} className="d-flex justify-content-between  pb-3">
                                        <div className="d-flex flex-column fw-bold">
                                            <span>{rows[choosedIndex].kurs}</span>
                                            <span>{rows[choosedIndex].ustoz}</span>
                                        </div>
                                        <div className="d-flex flex-column ">
                                            <span style={{ fontSize: "14px" }}>{rows[choosedIndex].boshlanganVaqt} - <br /> {rows[choosedIndex].tugashVaqti}</span>
                                            <span style={{ fontSize: "14px", textTransform: "capitalize" }}>{rows[choosedIndex].kunlar} * 08:00</span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-start pt-3">
                                        <span>Holat: <b className='fw-bold'>{rows[choosedIndex].holat}</b></span>
                                        <span>Talaba qo'shilgan sana: <b className='fw-bold'>{rows[choosedIndex].qoshilganSana}</b></span>
                                        <span>Bu talaba uchun narx: <b className='fw-bold'>{rows[choosedIndex].narx}</b></span>
                                    </div>
                                </div>
                                <h3 className='m-0 h4'>To'lovlar</h3>
                                <div style={{ width: "100%" }} className="d-flex flex-column align-items-center shadow p-3 bg-white">
                                    Ma`lumotlar topilmadi
                                    <div style={{ width: "100%" }} className="mt-2 d-flex justify-content-between align-items-center">
                                        <p className='talabalar__table-desc m-0'>Ma`lumotlar 15 dan 35 gacha, 234 ta dan</p>
                                        <div className="talabalar__pagination-flex">
                                            <button className='talabalar__pagination-btn'>1</button>
                                            <button className='talabalar__pagination-btn'>2</button>
                                            <button className='talabalar__pagination-btn'>3</button>
                                            <span>...</span>
                                            <button className='talabalar__pagination-btn'>15</button>
                                            <button className='talabalar__pagination-btn'>16</button>
                                        </div>
                                    </div>
                                </div>
                            </div> : selecetedBolim === "Qo'ng'iroqlar tarixi" ? <div style={{ width: "100%" }} className="d-flex  mt-4 flex-column align-items-center shadow p-3 bg-white">
                                Ma`lumotlar topilmadi
                                <div style={{ width: "100%" }} className="mt-2 d-flex justify-content-between align-items-center">
                                    <p className='talabalar__table-desc m-0'>Ma`lumotlar 15 dan 35 gacha, 234 ta dan</p>
                                    <div className="talabalar__pagination-flex">
                                        <button className='talabalar__pagination-btn'>1</button>
                                        <button className='talabalar__pagination-btn'>2</button>
                                        <button className='talabalar__pagination-btn'>3</button>
                                        <span>...</span>
                                        <button className='talabalar__pagination-btn'>15</button>
                                        <button className='talabalar__pagination-btn'>16</button>
                                    </div>
                                </div>
                            </div> : <div className='p-4'>Student History</div>}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default StudentsMore
