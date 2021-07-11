import React from 'react';
import { Box,List } from "../styledComponents"
import { useSelector } from "react-redux"
import { useEffect } from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
export default function DateBox({children,dateIndex}){
    const tasks = useSelector(state => state[dateIndex]);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [info,setInfo]=useState({})
    useEffect(()=>{
        console.log(tasks)
    },[tasks])
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return(
        <Box>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                {info.name&&<div>{info.name}</div>}
                {info.age&&<div>{info.age}</div>}
                {info.gender&&<div>{info.gender}</div>}
                {info.time&&<div>{info.time}</div>}
                <button onClick={closeModal}>close</button>
            </Modal>
            {children}
            {tasks&&tasks.sort((a,b)=>{
                    let tempa=parseInt(a.time);
                    let tempb=parseInt(b.time);
                    return tempa<tempb
                }).map((val,index)=>
                <List key={index} onClick={()=>{setInfo(val);openModal()}}>
                    {val.name}
                </List>
            )}
        </Box>
    )
}