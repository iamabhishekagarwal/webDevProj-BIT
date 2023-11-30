import React from 'react'

function Cards(props) {
return (
<>
    <div className="card text-bg-dark my-3" style={{width: "20rem"}}>
        <img src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href="#" className="btn btn-primary">{props.buttonText}</a>
        </div>
    </div>
</>
)
}

export default Cards
