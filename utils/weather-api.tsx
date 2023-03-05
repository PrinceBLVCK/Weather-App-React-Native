import { useState } from "react"
export type weather = {

    temperature: number
    humidity: number
    windSpeed: number
    windDirection: string

}

export const getWeather = async () => {
    // const [apiData, setApiData] = useState()
    const API_KEY = '603dad55a0782039ed2b6a3dab823fb0'

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=midrand&appid=${API_KEY}&units=metric`)
    const data = await res.json()
    if(data.cod === 404) return
    if(res.ok){

        const {main} = data

        const info: weather = {
            temperature: main.temp,
            humidity: main.humidity,
            windSpeed: main.sys.wind.speed,
            windDirection: ''
        }

        return info
    }
    
    

    console.log('------data 1-----', data)
    return await data
    
    const fetchData = async () => {
        
        


        const a = {
            
            "clouds": {
                "all": 0
            }, 
            "cod": 200, 
            "coord": {
                "lat": -25.9636, 
                "lon": 28.1378
            }, 
            "main": {
                "feels_like": 294.69, 
                "grnd_level": 851, 
                "humidity": 78, 
                "pressure": 1014, 
                "sea_level": 1014, 
                "temp": 294.47, 
                "temp_max": 295.7, 
                "temp_min": 292.92}, 
                "name": "Midrand", 
                "sys": {
                    "country": "ZA", 
                    "id": 2037341, 
                    "sunrise": 1677989002, 
                    "sunset": 1678034104, 
                    "type": 2}, 
                    "timezone": 7200, 
                    "visibility": 10000, 
                    "weather": [{
                            "description": 
                            "clear sky", 
                            "icon": "01d", 
                            "id": 800, 
                            "main": "Clear"
                        }], 
                    "wind": {
                        "deg": 340, 
                        "gust": 4.36, 
                        "speed": 3.85
                    }
                }

    }
                 

}