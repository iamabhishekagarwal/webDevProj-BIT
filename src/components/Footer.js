import React, { useState } from "react";
import github from "../icons/github.svg";
import githubColor from "../icons/githubColor.svg";
import insta from "../icons/insta.svg";
import instacolor from "../images/instagram.png";

function Footer() {
const [icon1, seticon1] = useState(insta);
const [icon2, seticon2] = useState(github);

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
return (
<>
    <footer
    style={{
        color: "whitesmoke",
        width: "90vw",
        height: "14vh",
        backgroundColor: "black",
    }}
    >
    <div className="container text-center my-3 mx-2">
        <em>Feedback : </em>
        <a href="">link</a>
    </div>
    <div className="container text-center my-3">
        <p>
        Contact Us :
        <a href="" target="blank">
            <img
            style={{padding:"0px 5px"}}
            onMouseLeave={handleInstaIconLeave}
            onMouseEnter={handleInstaIconEnter}
            src={icon1}
            alt="Instagram"
            />
        </a>
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
        </p>
    </div>
    </footer>
</>
);
}

export default Footer;
