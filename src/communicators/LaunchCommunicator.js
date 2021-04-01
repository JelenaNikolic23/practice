import {http} from "../services/HttpService";
import Launch from "../entities/Launch";

const BASE_URL = 'https://api.spacexdata.com/v3/launches?flight_number=';

class Launches {

  fetchSingleLaunch(id) {
    return fetch(BASE_URL + id)
        .then(res => res.json())
        .then(res => new Launch(res[0]));
  }
}

export const LaunchCommunicator = new Launches();
