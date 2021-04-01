import React from 'react';

import SearchBar from "../Search/Search";
import style from './Header.module.scss';
import rocket from "../../assets/image/rocket.svg";

const Header = () => {
    // const {inputValue, handleChange} = useContext(FlightsContext);
    // const Context = useContext(FlightsContext);
    //ovde cemo dobiti inicijalnu vrednost

    return (
        <nav className={style.header}>
            <div className={style.left}>
                <img src={rocket}/>
                <h4>eSpace</h4>
            </div>
            <div className={style.right}>
           <SearchBar/>
            </div>
        </nav>
    )
};

export default Header;
