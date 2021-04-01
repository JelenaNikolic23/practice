import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.scss";

const Card = ({ flight }) => {

    return (
    <Link to={`/about/${flight.id}`} className={style.card}>
        <div className={style.left}>
            <h1>{flight.number}</h1>
        </div>
        <div className={style.right}>
            <h2>{flight.title}</h2>
            <p>{flight.details}</p>
        </div>
    </Link>
    )
};

export default Card;
