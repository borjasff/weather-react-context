import React from 'react'
import useWeather from '../hooks/useWeather'

export default function Result() {
    const {result} = useWeather()
    const { name, main } = result

    //mod Kelvin
    const kelvin = 273.15
  return (
    <div className='conteiner weather'>
        <h2>Weather of {name} is: </h2>

        <p>
            {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
        </p>
        <div className='temp_min_max'>
            <p>
                Minimum: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>
            </p>
            <p>
                Maximum: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
            </p>
        </div>

    </div>
  )
}
