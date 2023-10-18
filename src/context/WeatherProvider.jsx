import { useState, createContext } from "react";
import axios from "axios";

const WeatherContext = createContext()

const WeatherProvider = ({children}) => {
    console.log(import.meta.env.VITE_API_KEY)

    const [ search, setSearch] = useState({
        city: '',
        country: ''
    })
    const [result, setResult] = useState({})
    const [load, setLoad] = useState(false)
    const [noResult, setNoResult] = useState(false)

    const dataSearch = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }
    const consultWeather = async datas => {
        setLoad(true)
        setNoResult(false)
        try {
            const { city, country } = datas

            const appId = import.meta.env.VITE_API_KEY

            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`
            //console.log(url)

            const {data} = await axios(url)
            const { lat, lon} = data[0]

            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const {data: weather } = await axios(urlWeather)
            setResult(weather) 

        } catch (error) {
            setNoResult('Error, No weather data')
        } finally {
            setLoad(false)
        }
        
    }
    return (
        <WeatherContext.Provider
        value={{
            search,
            dataSearch,
            consultWeather,
            result,
            load,
            noResult,
            setResult
        }}>
            {children}
        </WeatherContext.Provider>
    )
}
export {
    WeatherProvider
}

export default WeatherContext