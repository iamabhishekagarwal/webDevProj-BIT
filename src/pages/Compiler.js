import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Cplusplus from "../icons/C++.svg";
import C from "../icons/C.svg";
import python from "../icons/Python.svg";
import reset from "../icons/Reset.svg";
import Copy from "../icons/copy.svg";
import java from "../icons/java.svg";
import javascript from "../icons/javascript.svg";
import AI from "../icons/openai.svg";
import play from "../icons/play.svg";
import "./Compiler.css";

//logo credits to icons website

function Compiler(props) {
const [text, setText] = useState("");
const [variant,setVariant]=useState("light");

useEffect(() => {
props.setProgress(50);
setTimeout(() => {
    props.setProgress(100);
}, 500);
}, [""]);

const handleToReset = () => {
setText("");
};

// document.body.style.background = "#242124";

const handleOnChange = (Event) => {
setText(Event.target.value);
};

const handle1 = () => {
document.getElementById("button1").style.color = "black";
};
const handleLeave1 = () => {
document.getElementById("button1").style.color = "white";
};
const handle2 = () => {
document.getElementById("button2").style.color = "white";
document.getElementById("button2").style.backgroundColor = "Red";
document.getElementById("button2").style.borderColor = "Red";
};
const handleLeave2 = () => {
document.getElementById("button2").style.color = "black";
document.getElementById("button2").style.backgroundColor = "white";
document.getElementById("button2").style.borderColor = "white";
};
const handle3 = () => {
document.getElementById("button3").style.color = "white";
document.getElementById("button3").style.backgroundColor = "#800080";
document.getElementById("button3").style.borderColor = "#800080";
};
const handleLeave3 = () => {
document.getElementById("button3").style.color = "black";
document.getElementById("button3").style.backgroundColor = "white";
document.getElementById("button3").style.borderColor = "white";
};

const handleCopy = () => {
let copyText = document.getElementById("textfield");
copyText.select();
navigator.clipboard.writeText(copyText.value);
};

const handleButtonCopyEnter = () => {
document.getElementById("CopyButton").style.backgroundColor = "#D3D3D3";
};
const handleButtonCopyLeave = () => {
document.getElementById("CopyButton").style.backgroundColor = "grey";
};

const handleDropdownMouseEnter=()=>{
    setVariant("info")
}
const handleDropdownMouseLeave=()=>{
    setVariant("light")
}


return (
<div className="container ">
    <div className="row mb-3 my-2">
    <div className="col" style={{ position: "relative",paddingLeft:"0px" }}>
        <div
        style={{
            position: "absolute",
            right: "14px",
            top: "1px",
            zIndex: "1",
        }}
        >
        <button
            id="CopyButton"
            onClick={handleCopy}
            className="btn btn-primary"
            onMouseEnter={handleButtonCopyEnter}
            onMouseLeave={handleButtonCopyLeave}
            style={{
            marginLeft:"2px",
            padding:"0px 2px",
            paddingBottom:"2px",
            backgroundColor: "grey",
            color: "black",
            borderColor: "black",
            }}
        >
            <img src={Copy} alt="Copy" />
        </button>
        </div>
        
        <textarea
        name="code"
        className="form-control white-placeholder"
        id="textfield"
        rows="20"
        autoFocus
        placeholder="Enter your code here "
        value={text}
        onChange={handleOnChange}
        style={{
            background: "black",
            color: "white",
        }}
        ></textarea>

        <button
        id="button1"
        className="btn btn-primary  my-2 mx-2"
        onMouseLeave={handleLeave1}
        onMouseOver={handle1}
        style={{ backgroundColor: "#228B22", borderColor: "green",}}
        >
        <img style={{ paddingBottom: "2px" }} src={play} alt="play icon" />
        Run
        </button>

        <button
        id="button2"
        className="btn btn-primary my-2 mx-2"
        onMouseLeave={handleLeave2}
        onMouseOver={handle2}
        style={{
            backgroundColor: "white",
            color: "black",
            borderColor: "white",
        }}
        onClick={handleToReset}
        >
        <img src={reset} alt="reset icon" />
        Clear
        </button>

        <button
        id="button3"
        className="btn btn-primary my-2 mx-2"
        style={{
            backgroundColor: "white",
            color: "black",
            borderColor: "white",
        }}
        onMouseLeave={handleLeave3}
        onMouseOver={handle3}
        >
        <img
            style={{ paddingRight: "2px", paddingBottom: "2px" }}
            src={AI}
            alt="AI icon"
        />
        Ask AI
        </button>
    </div>
    <div className="col">
        <DropdownButton
        variant={variant}
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
        id="dropdown-item-button"
        title="Select Language"
        menuVariant="dark"
        style={{width:"10vw"}}
        >
        <Dropdown.Item as="button">
            C
            <img
            className="align-bottom"
            src={C}
            style={{ width: "25px", marginLeft: "85px" }}
            alt="C icon"
            />
        </Dropdown.Item>

        <Dropdown.Item as="button">
            C++
            <img
            className="align-bottom"
            src={Cplusplus}
            style={{ width: "25px", marginLeft: "63px" }}
            alt="C++ icon"
            />
        </Dropdown.Item>

        <Dropdown.Item as="button">
            Java
            <img
            className="align-bottom"
            src={java}
            style={{ width: "25px", marginLeft: "65px" }}
            alt="java icon"
            />
        </Dropdown.Item>

        <Dropdown.Item as="button">
            Javascript
            <img
            className="align-bottom"
            src={javascript}
            style={{ width: "25px", marginLeft: "27px" }}
            alt="javascript icon"
            />
        </Dropdown.Item>

        <Dropdown.Item as="button">
            Python
            <img
            className="align-bottom"
            src={python}
            style={{ width: "25px", marginLeft: "46px" }}
            alt="python icon"
            />
        </Dropdown.Item>
        </DropdownButton>

        <textarea
        readOnly
        name="Output"
        className="form-control output my-2 white-placeholder"
        id="textfield-output"
        placeholder="Code-output"
        rows="10"
        style={{
            background: "black",
            color: "white",
        }}
        ></textarea>

        <textarea
        readOnly
        name="AI-output"
        rows="7"
        className="form-control output my-2 white-placeholder"
        id="textfield-output"
        placeholder="AI-output"
        style={{
            background: "black",
            color: "white",
        }}
        ></textarea>

    </div>
    </div>
</div>
);
}

export default Compiler;
