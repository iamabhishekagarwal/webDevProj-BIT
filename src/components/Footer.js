import React, { useState } from "react";
import "../components/Footer.css";
import github from "../icons/github.svg";
import githubColor from "../icons/githubColor.svg";
import insta from "../icons/insta.svg";
import instacolor from "../icons/instagramColor.svg";
import linkedin from "../icons/linkedin.svg";
import linkedinColor from "../icons/linkedinColor.svg";
import youtube from "../icons/youtube.svg";
import youtubeColor from "../icons/youtubeColor.svg";

function Footer() {
const [icon1, seticon1] = useState(insta);
const [icon2, seticon2] = useState(github);
const [icon3, seticon3] = useState(youtube);
const [icon4, seticon4] = useState(linkedin);

const handleInstaIconEnter = () => {
seticon1(instacolor);
};
const handleInstaIconLeave = () => {
seticon1(insta);
};
const handleGitIconEnter = () => {
seticon2(githubColor);
};
const handleGitIconLeave = () => {
seticon2(github);
};
const handleYtIconEnter = () => {
seticon3(youtubeColor);
};
const handleYtIconLeave = () => {
seticon3(youtube);
};
const handleLinkedinIconEnter = () => {
seticon4(linkedinColor);
};
const handleLinkedinIconLeave = () => {
seticon4(linkedin);
};
return (
<>
    <footer
    style={{
        color: "whitesmoke",
        width: "95vw",
        height: "30vh",
        backgroundColor: "black",
    }}
    >
    <div className="container">
    <div className="container my-3"><strong className="footer-text" style={{fontSize:"20px"}}>codeVISTA</strong><br /><p className="footer-text text-muted" style={{fontSize:"15px"}}>Decoding Complexity Crafting Simplicity</p></div>
    <div className="container my-3">
        <p className="footer-text">Feedback : <a href="">link</a></p>
    </div>
    <div className="container " >
        <p className="footer-text">
        Contact Us :
        <a
            target="blank"
            href="#"
        >
            <img
            style={{padding:"0px 5px",marginRight:"5px"}}
            onMouseLeave={handleLinkedinIconLeave}
            onMouseEnter={handleLinkedinIconEnter}
            src={icon4}
            alt="Linkedin"
            />
        </a>
        <a href="" target="blank">
            <img
            onMouseLeave={handleInstaIconLeave}
            onMouseEnter={handleInstaIconEnter}
            src={icon1}
            alt="Instagram"
            />
        </a>
        </p>
    </div>
    <div className="container">
        <p className="footer-text">
        Follow us :
        <a
            target="blank"
            href="https://github.com/iamabhishekagarwal/webDevProj-BIT.git"
        >
            <img
            style={{padding:"0px 5px"}}
            onMouseLeave={handleGitIconLeave}
            onMouseEnter={handleGitIconEnter}
            src={icon2}
            alt="Github"
            />
        </a>
        <a
            target="blank"
            href="#"
        >
            <img
            style={{paddingLeft:"5px"}}
            onMouseLeave={handleYtIconLeave}
            onMouseEnter={handleYtIconEnter}
            src={icon3}
            alt="Youtube"
            />
        </a>
        </p>
    </div>
    </div>
    </footer>
</>
);
}

export default Footer;
