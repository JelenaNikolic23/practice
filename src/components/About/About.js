import React from 'react';
import Header from "../view/Header";
import Footer from "../view/Footer";
import {LaunchCommunicator} from "../../communicators/LaunchCommunicator";

// class components
// state
// lifecycle methods
// react router params
// promise
// fetch
// false/truth vred.
// event listeners

/**
 *
 * function fetchData() {
 *     const test = ...
 *
 *     setTimeout(function() {
 *         console.log('Done');
 *     }, X);
 *
 *     each(data,...);
 *
 *     return data;
 * }
 *
 */

class About extends React.Component {
    constructor(props) {
        super(props);

        this.flightId = props.match.params.flight;

        this.state = {
            launch: null
        };
    }

    componentDidMount() {
      LaunchCommunicator.fetchSingleLaunch(this.flightId)
            .then((res) => {

                this.setState({
                    launch: res
                })
            })
    }

    render() {
        if (!this.state.launch) {
            return 'not set';
        }

        return (
            <div>
                   <Header/>
                   {this.state.launch.details}
                   {this.state.launch.missionName}
                  <Footer/>
            </div>
        );
    }
};

export default About;
