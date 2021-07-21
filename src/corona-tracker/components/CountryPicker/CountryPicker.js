import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import {fetchCountries} from "../../api";

import styles from './CountryPicker.module.css'

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchApi()
    }, [setFetchedCountries])

    return (
        <FormControl>
            <NativeSelect onChange={e => handleCountryChange(e.target.value)}>
                <option value="">全球数据</option>
                {
                    fetchedCountries.map((country, i) => (
                        <option value={country} key={i}>{country}</option>
                    ))
                }
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;