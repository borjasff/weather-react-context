import { useState } from "react"
import useWeather from "../hooks/useWeather"

export default function Form() {
    const [alert, setAlert] = useState('')
    const { search, dataSearch, consultWeather, setResult} = useWeather()
    const { city, country} = search
    const handleSubmit = e => {
        e.preventDefault()
        if(Object.values(search).includes('')){
            setAlert('All fields are required')

            setTimeout(() => {
                setAlert('')
            
            }, 4000);
            return
        }

        consultWeather(search)
        setResult({})
    }
  return (
    <div className='conteiner'>
        {alert && <p>{alert}</p>}
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="city">City</label>
                <input type="text" id='city' name='city' onChange={dataSearch} value={city}/>
            </div>
            <div className="field">
                <label htmlFor="country">Country</label>
                <select id='country' name='country' onChange={dataSearch} value={country}>
                    <option value="">--Select--</option>
                    <option value="US">United States</option>
                    <option value="MX">MÉXICO</option>
                    <option value="FR">FRANCE</option>
                    <option value="ES">SPAIN</option>
                    <option value="CN">CHINA</option>
                    <option value="RU">RUSSIA</option>
                </select>
            </div>
            <input type="submit" value='Get Weather' />
        </form>
    </div>
  )
}
