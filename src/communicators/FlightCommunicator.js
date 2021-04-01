import Flight from "../entities/Flight";
import {http} from "../services/HttpService";

const BASE_URL = 'https://api.spacexdata.com/v3/history';

class Flights {
  async search() {
    let res = [];

    try {
      res = await http.get(BASE_URL);
    } catch(e) {
      throw new Error(e);
    }

    return res.map(flight => new Flight(flight));
  }
}

export const FlightCommunicator = new Flights();
