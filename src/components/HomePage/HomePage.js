import React from "react";

import Footer from "../view/Footer";
import Header from "../view/Header";
import Container from "../Container/Container";

import {FlightsProvider} from "./FlightsProvider";

 // export const FlightsContext = createContext({}); //kreiranje Context-a

const HomePage = () => {

//jer je isti naziv, pa nije potrebno dva puta offset: offset => offset

  return (
    <div>
        <FlightsProvider>
            <Header/>
            <Container/>
             {/*<FlightsContext.Provider value={}>*/}
            {/*dajemo Footer pristup podacima iz Context, i sve sto je Footer*/}
            <Footer />
        </FlightsProvider>
    </div>
  );
};

export default HomePage;
