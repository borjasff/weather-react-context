import Form from "./Form"
import Result from "./Result"
import Loading from "./Loading"
import useWeather from "../hooks/useWeather"

export const AppWeather = () => {

  const { result, load, noResult} = useWeather()

  return (
    <>
    <main className='two-columns'>

        <Form/>
        { 
        load ? <Loading/> : 
        result?.name ? <Result/> : 
        noResult ? <p>{noResult}</p> : <p>The weather is now displayed</p> }
      
    </main>
    </>
  )
}
