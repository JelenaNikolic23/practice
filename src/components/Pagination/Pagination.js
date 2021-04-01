import React, {useContext} from 'react';

import {FlightsContext} from "../HomePage/FlightsProvider";

import style from "./Pagination.module.scss";

const Pagination = () => {
    const {perPage, offset, setOffset, total} = useContext(FlightsContext); //veza sa onim u HomePage
//koristimo novi perPage i offset iz FlightsProvider
//     const total = flights.length;

    const prevDisabled = offset === perPage ? style.disabled : '';
    const nextDisabled = offset >= total ? style.disabled : '';

    const next = () => {
        const newVal = offset >= total ? offset : offset + perPage;

        setOffset(newVal);
    };

    const prev = () => {
        const newVal = offset === perPage ? offset : offset - perPage;

        setOffset(newVal);
    };

    return (
        <div>
            <span className={`${style.btn} ${prevDisabled}`} role="button" onClick={prev}> {'<Prev'} </span>
            <span className={`${style.btn} ${nextDisabled}`} role="button" onClick={next}> {'Next>'} </span>
        </div>
    );
};
export default Pagination;
