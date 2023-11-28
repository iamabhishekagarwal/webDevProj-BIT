import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Copy from "../icons/copy.svg";

function Compiler(props) {

const [text, setText] = useState("Enter code here..");

useEffect(() => {
props.setProgress(50);
setTimeout(() => {
    props.setProgress(100);
}, 500);
}, []);

const handleToReset=()=>{
    setText("Enter code here..")
}

document.body.style.background = "#242124";


const handleOnChange = (Event) => {
setText(Event.target.value);
};

const handle1=()=>{
    document.getElementById("button1").style.color="black"
}
const handleLeave1=()=>{
    document.getElementById("button1").style.color="white"
}
const handle2=()=>{
    document.getElementById("button2").style.color="white"
    document.getElementById("button2").style.backgroundColor="Red"
    document.getElementById("button2").style.borderColor="Red"
}
const handleLeave2=()=>{
    document.getElementById("button2").style.color="black"
    document.getElementById("button2").style.backgroundColor="white"
    document.getElementById("button2").style.borderColor="white"
}
const handle3=()=>{
    document.getElementById("button3").style.color="white"
    document.getElementById("button3").style.backgroundColor="#800080"
    document.getElementById("button3").style.borderColor="#800080"}
const handleLeave3=()=>{
    document.getElementById("button3").style.color="black"
    document.getElementById("button3").style.backgroundColor="white"
    document.getElementById("button3").style.borderColor="white"}

const handleCopy=()=>{
    let copyText=document.getElementById("textfield")
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
}

const handleButtonCopyEnter=()=>{
    document.getElementById("CopyButton").style.backgroundColor="#D3D3D3"
}
const handleButtonCopyLeave=()=>{
    document.getElementById("CopyButton").style.backgroundColor="grey"
}

return (
<div className="container ">
    <div className="row mb-3 my-3">
    <div className="col-sm-4" >
    <DropdownButton variant="light" id="dropdown-item-button" title="Language">
    <Dropdown.Item as="button">C</Dropdown.Item>
    <Dropdown.Item as="button">C++</Dropdown.Item>
    <Dropdown.Item as="button">Java</Dropdown.Item>
    <Dropdown.Item as="button">Javascript</Dropdown.Item>
    <Dropdown.Item as="button">Python</Dropdown.Item>
    </DropdownButton>
    </div>
    <div className="col" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', right: '14px', top: '1px', zIndex: '1' }}>
            <button id="CopyButton" onClick={handleCopy} className="btn btn-primary" onMouseEnter={handleButtonCopyEnter} onMouseLeave={handleButtonCopyLeave} style={{padding:"0.5px 2px", backgroundColor: "grey", color: "black", borderColor: "black" }}><img src={Copy}  alt="Copy"/></button>
        </div>
        <textarea
        name="code"
        className="form-control"
        id="textfield"
        rows="20"
        placeholder="Enter your text here "
        value={text}
        onChange={handleOnChange}
        style={{ background: "black", color: "white", paddingRight: '70px' }}
        ></textarea>
        <button id="button1" className="btn btn-primary  my-2 mx-2" onMouseLeave={handleLeave1} onMouseOver={handle1} style={{backgroundColor:"#228B22",borderColor:"green"}}>Run</button>

        <button id="button2" className="btn btn-primary my-2 mx-2" onMouseLeave={handleLeave2} onMouseOver={handle2} style={{backgroundColor:"white",color:"black",borderColor:"white"}} onClick={handleToReset}>Clear</button>

        <button id="button3" className="btn btn-primary my-2 mx-2" style={{backgroundColor:"white",color:"black",borderColor:"white"}} onMouseLeave={handleLeave3} onMouseOver={handle3} >Ask AI</button>
    </div>
    </div>
</div>
);
}

export default Compiler;
