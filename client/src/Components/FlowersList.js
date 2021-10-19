import React from 'react';
import './FlowersList.css';

const FlowersList = (props) => {

    return(
        <div className={props.className}>
                <div className="wrapper" onMouseOver={() => props.changeBackground()} >
                  <div className="image" style={{backgroundImage: `url(/Images/${props.image}.jpg)`}}></div>
                  <h2 className="name" >{props.name}</h2>
                  <p className="description">{props.description} </p>
                </div>
        </div>
    )
}

export default FlowersList;