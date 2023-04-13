// import { useState } from "react"
// // import {API_URL, API_KEY} from '@env'
// export type weather = {

//     temperature: number
//     humidity: number
//     windSpeed: number
//     windDirection: string

// }

// export const getWeather = async () => {
//     // const [apiData, setApiData] = useState()

//     // const res = await fetch(`${API_URL}?q=midrand&appid=${API_KEY}&units=metric`)
//     const data = await res.json()
//     if(data.cod === 404) return
//     if(res.ok){

//         const {main} = data

//         const info: weather = {
//             temperature: main.temp,
//             humidity: main.humidity,
//             windSpeed: main.sys.wind.speed,
//             windDirection: ''
//         }

//         return info
//     }   
// }