import React, { useEffect } from 'react'
import Cards from '../components/Cards'
function TechNews(props) {
    useEffect(()=>{
        props.setProgress(50)
        setTimeout(()=>{
            props.setProgress(100)
        },500)
    },[])

    // document.body.style.background = "#242124";
return (
<>
<h2 style={{ color: "white" }} className="text-center my-2">
    Top-TechNews
    </h2>
    <div className="my-3">
    <div className="row mx-3">
        <div className="col-md-4">
        <Cards
            title="This is title1"
            text="this is card text"
            buttonText="This is button text"
            image="https://www.shutterstock.com/image-vector/hackathon-concept-icon-set-big-260nw-2019732209.jpg"
        />
        <Cards
            title="This is title4"
            text="this is card text"
            buttonText="This is button text"
            image="https://www.shutterstock.com/image-vector/hackathon-concept-icon-set-big-260nw-2019732209.jpg"
        />
        </div>
        <div className="col-md-4">
        <Cards
            title="This is title2"
            text="this is card text"
            buttonText="This is button text"
            image="https://www.shutterstock.com/image-vector/hackathon-concept-icon-set-big-260nw-2019732209.jpg"
        />
        <Cards
            title="This is title5"
            text="this is card text"
            buttonText="This is button text"
            image="https://www.shutterstock.com/image-vector/hackathon-concept-icon-set-big-260nw-2019732209.jpg"
        />
        </div>
        <div className="col-md-4">
        <Cards
            title="This is title3"
            text="this is card text"
            buttonText="This is button text"
            image="https://www.shutterstock.com/image-vector/hackathon-concept-icon-set-big-260nw-2019732209.jpg"
        />
        <Cards
            title="This is title6"
            text="this is card text"
            buttonText="This is button text"
            image="https://www.shutterstock.com/image-vector/hackathon-concept-icon-set-big-260nw-2019732209.jpg"
        />
        </div>
    </div>
    </div></>
)
}

export default TechNews
