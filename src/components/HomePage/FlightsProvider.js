import React, {createContext, Component} from 'react';

export const FlightsContext = createContext({});

class FlightsProvider extends Component {
    constructor(props) {
        super(props);

        this.setFLights = this.setFLights.bind(this); //vezuje se za trenutni objekat , da bih koristila setFlights
        this.setOffset = this.setOffset.bind(this);
        this.setInputValue = this.setInputValue.bind(this);

        this.state = {
            perPage: 6,
            offset: 6,
            flights: [],
            setFlights: this.setFLights,
            setOffset: this.setOffset,
            inputValue: "",
            handleChange: this.setInputValue,
            total: 0
        };
    }

    setFLights = (newFlights) => this.setState({flights: newFlights, total: newFlights.length});

    setOffset = (offset) => this.setState({ offset });

    setInputValue = (inputValue) => {
        const {flights, perPage} = this.state;
        const newTotal = flights.filter(flight => flight.title.toLowerCase().includes(inputValue.toLowerCase()));
        this.setState({inputValue, total: newTotal.length, offset: perPage});
        };
    render() {
        return (
            <FlightsContext.Provider value={this.state}>
                { this.props.children }
                {/*u Footer-u cu se nalaziti sve */}
            </FlightsContext.Provider>
        );
    }
}

export {FlightsProvider};
