import React from "react";

const Cards = (props) => {
    return (

        <div className="cards">

            <div className="card">
                <img src={props.imgsrc} alt="pic is loading" className="card__img" />
                <div className="card__info">
                    <span className="card__category">{props.title}</span>
                    <h3 className="card__title">{props.sname}</h3>
                    <a href={props.links} target="_blank">
                        <button className="btn">Watch now</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Cards;