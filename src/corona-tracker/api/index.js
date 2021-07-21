import axios from "axios";

const url = 'https://covid19.mathdro.id/api'

// 请求所有数据
export const fetchData = async (country) => {
    let changeableUrl = url
    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl)
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        }
    } catch (e) {
        console.log(e);
    }
}

// 请求每天数据
export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`)
        return data.map(dailyData => (
            {
                confirmed: dailyData.confirmed,
                recovered: dailyData.recovered,
                deaths: dailyData.deaths,
                date: dailyData.reportDate,
            }
        ))
    } catch (e) {
        console.log(e);
    }
}

// 请求国家数据
export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`)
        return countries.map(country => country.name)
    } catch (e) {
        console.log(e);
    }
}