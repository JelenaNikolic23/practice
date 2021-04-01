import React, {useContext, useEffect} from 'react';

import Card from "../Card/Card";
import {FlightsContext} from "../HomePage/FlightsProvider";
import {FlightCommunicator} from "../../communicators/FlightCommunicator";

import style from "./Container.module.scss";


const Container = () => {
    const {flights, setFlights, offset, perPage, inputValue} = useContext(FlightsContext);

    const fetchData = async () => {
        const res = await FlightCommunicator.search();
        const filteredFligths = res.filter(flight => flight.number);
        setFlights(filteredFligths);
    };
    useEffect(() => {
        fetchData()
    }, []);

    const filteredFlights = flights
        .filter(flight => flight.title.toLowerCase().includes(inputValue.toLowerCase()))
        .filter((flight,index) => index < offset && index >= offset - perPage);

    return (
        <div><h3>History</h3>
            <div className={style.container}>
            {filteredFlights
                .map(flight => <Card key={flight.id} flight={flight} />)
            }
            </div>
        </div>
    )

}

export default Container;
