
import { useParams, useHistory } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { Container, Clear, HeaderBox, NavBox, Button } from "../../styledComponents"
import Select from "react-select"
import { months, years } from "../../constants";
import DateBox from "../../components/dateBox"
import Modal from 'react-modal';
import CreateAppointment from "../../components/createAppointment"
import { useDispatch } from 'react-redux';
const getDataAction = () => {
    return { type: 'GET_DATA_FROM_STORE' }
  }
function Calender() {
    let { year } = useParams()
    let { month } = useParams()
    const [yearVal, setYearVal] = useState();
    const [monthVal, setMonthVal] = useState()
    const [calenderTable, setCalenderTable] = useState([])
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const dispatch = useDispatch();
    let history = useHistory()
    useEffect(() => {
        dispatch(getDataAction())
        let currentTime = new Date()
        if (year && month) {
            setYearVal(year);
            setMonthVal(month)
            createCalendar(year, month - 1)
        }
        else {
            let tempMonth = currentTime.getMonth()
            let tempYear = currentTime.getFullYear()
            setYearVal(tempYear);
            setMonthVal(tempMonth + 1)
            createCalendar(tempYear, tempMonth)
        }
        return () => { setCalenderTable([]) }
    }, [year, month])

    function createCalendar(year, month) {
        let d = new Date(year, month);
        let passmonth=month+1
        for (let i = 0; i < getDay(d); i++) {
            setCalenderTable(val => [...val, <DateBox />])
        }
        while (d.getMonth() == month) {
            let day = d.getDate()
            setCalenderTable(val => [...val, <DateBox dateIndex={year+""+passmonth+""+day}>{day}</DateBox>])
            if (getDay(d) % 7 == 6) {
                setCalenderTable(val => [...val, <Clear />])
            }
            d.setDate(d.getDate() + 1);
        }
        if (getDay(d) != 0) {
            for (let i = getDay(d); i < 7; i++) {
                setCalenderTable(val => [...val, <DateBox />])
            }
        }
    }
    function getDay(date) {
        let day = date.getDay();
        if (day == 0) day = 7;
        return day - 1;
    }
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Container>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <CreateAppointment closeModal={closeModal}/>
                <button onClick={closeModal}>close</button>
            </Modal>
            <div>
                <NavBox>
                    <div style={{ width: "30%" }}>
                        <Select
                            placeholder="Select Year"
                            options={years}
                            value={{ value: yearVal, label: yearVal + "" }}
                            onChange={(val => {
                                setYearVal(val.value);
                                history.push(`/year/${val.value}/month/${monthVal + 1}`)
                            })}
                        /></div>
                    <div style={{ width: "30%" }}>
                        <Select
                            placeholder="Select Month"
                            options={months}
                            value={{ value: monthVal, label: monthVal + "" }}
                            onChange={(val => {
                                setYearVal(val.value);
                                history.push(`/year/${yearVal}/month/${val.value}`)
                            })}
                        /></div>
                    <Button onClick={openModal}>Create Appointment</Button>
                </NavBox>
                <HeaderBox>Monday</HeaderBox>
                <HeaderBox>Tuesday</HeaderBox>
                <HeaderBox>Wednesday</HeaderBox>
                <HeaderBox>Thursday</HeaderBox>
                <HeaderBox>Friday</HeaderBox>
                <HeaderBox>Saturday</HeaderBox>
                <HeaderBox>Sunday</HeaderBox>
                <Clear />
                {calenderTable.map((val, index) => <React.Fragment key={index}>{val}</React.Fragment>)}
            </div>
        </Container>
    )
}
export default Calender