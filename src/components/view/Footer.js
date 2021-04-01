import React from 'react';
import style from "./Footer.module.scss";

import Pagination from "../Pagination/Pagination";

const Footer = () => {
  return (
    <footer>
      <div className={style.footer}>
        <Pagination/>
      </div>
    </footer>
  );
};

export default Footer;
