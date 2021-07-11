import styled from "styled-components"
export const Container= styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background-color:#DDFFDD;
    overflow:auto
`
export const Box = styled.div`
    float:left;
    width:130px;
    height:100px;
    border-radius:8px;
    box-shadow:0 0 5px rgba(0,0,0,0.1);
    margin:5px;
    padding:10px;
    background-color:white;
    font-weight:bold;
    overflow-y: auto;
`
export const Clear = styled.div`
    clear:both
`
export const HeaderBox= styled.div`
    float:left;
    width:150px;
    height:50px;
    border-radius:8px;
    box-shadow:0 0 5px rgba(0,0,0,0.1);
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    font-size:20px;
    font-weight:bold;
    margin:5px;
    background-color:white
`
export const NavBox=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
    padding:5px;
    margin-bottom:20px
`
export const Button= styled.div`
    float:left;
    height:40px;
    border-radius:8px;
    box-shadow:0 0 5px rgba(0,0,0,0.1);
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    font-size:16px;
    font-weight:bold;
    background-color:white;
    cursor:pointer;
    text-transform:uppercase;
    padding:0 10px;
    box-sizing:border-box
`
export const List= styled.div`
    width:calc(100% - 10px);
    overflow:hidden;
    height:16px;
    padding:3px;
    border:1px solid red;
    cursor:pointer;
    border-radius:4px;
    font-size:14px;
    margin-top:5px;
`