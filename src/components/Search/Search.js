import React,{useContext} from 'react';

import style from "./Search.module.scss";
import search from "../../assets/image/search.svg";
import {FlightsContext} from "../HomePage/FlightsProvider";

const SearchBar = () => {
    const {handleChange, inputValue} = useContext(FlightsContext);

    const onChange = (e) => {
          handleChange(e.target.value)
         }

    return (
    <div className={style.search}>
        <img src={search}/>
        <input
            className={style.flight}
            id="search"
            type="text"
            placeholder="Search flights"
            value={inputValue}
            onChange={onChange}
        />
    </div>
    )
}

export default SearchBar;
