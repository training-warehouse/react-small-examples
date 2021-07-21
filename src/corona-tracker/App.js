import React, {Component} from 'react';

import Styles from './App.module.css'
import {Cards, Chart, CountryPicker} from './components'
import {fetchData} from "./api";

class App extends Component {
    state = {
        data: {
            confirmed: {value: 0, detail: ""},
            recovered: {value: 0, detail: ""},
            deaths: {value: 0, detail: ""},
            lastUpdate: 0,
        },
        country: ''
    }

    async componentDidMount() {
        const data = await fetchData()
        this.setState({data})
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country)
        this.setState({data, country})
    }

    render() {
        const {data,country} = this.state
        return (
            <div className={Styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        );
    }
}

export default App;