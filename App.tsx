import React, { useEffect, useState } from 'react';
import { 
  Text,
  View,
  Image,
  Dimensions, 
  SafeAreaView,
  StyleSheet,
  Button
} from 'react-native';
import  {envConfig}  from './utils/configs';
const { width } = Dimensions.get('screen')
// import * as dotenv from 'dotenv'
// dotenv.config()

// import {API_URL, API_KEY} from '@env'

const App =  () =>  {
  // let area:string
  const {API_URL, API_KEY} = envConfig
  const [area, setArea] = useState('midrand')
  const [temperature, setTemperature] = useState()
  const [humidity, setHumidity] = useState()
  const [speed, setSpeed] = useState()
  const [windDirection, setWindDirection] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    (async () => {
      await fetchData()
    })()
  }, [] )


  const fetchData = async () => {
    setLoading(true)
    
    fetch(`${API_URL}?q=${area}&appid=${API_KEY}&units=metric`)
    .then(data => data.json())
    .then((results) => {
      const {main, wind} = results

      const {temp, humidity} = main
      const {speed, deg} = wind
      setTemperature(temp)
      setHumidity(humidity)
      setSpeed(speed)
      setWindDirection(deg)
      setLoading(false)
    })
    .catch((e)  =>{
      console.error('Error: ', e)
      setLoading(false)
    })
  }

  // fetchData()
  return (
    
    <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'center', padding:20, paddingVertical:50}} >
  
      <Text style={{fontSize:22, fontWeight:'bold', marginTop:20, marginBottom:10}}>Today's Weather</Text>
      <View style={{height:2, width:(width - 50) , backgroundColor:'#555555', marginHorizontal:10}} />
      <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'flex-start', padding:10}}>
        <Image
          style={{width:75, height:75, padding:10}}
          source={require('./src/asserts/cloudy.png')}/>
        
        <View>
        { loading ? 
          (<Text>Loading</Text>)
        : (
          <View style={{flexDirection:"row", padding:10}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>
              {temperature} 
            </Text>
            <Text style={{fontSize:10}}>
              o
            </Text>
            <Text style={{fontSize:14}}>
              C
            </Text>
          </View>)}
        </View>
        <View style={{margin:10}}>
          <View style={{width:1, height:5, backgroundColor:'#555555', flex:1, flexDirection:'column'}} />
        </View>
        <View style={{padding:10}}>
          {/* <Text>Precipitation: {precipitation}%</Text> */}
          <Text>Humidity: {humidity}%</Text>
          <Text>Wind Speed: {speed} km/h</Text>
          {/* <View style={{flexDirection:"row", padding:10}}>
            <Text style={{fontSize:14, }}>
              Wind Direction
            </Text>
            <Text style={{fontSize:14}}>
              {windDirection}
            </Text>
            <Text style={{fontSize:12}}>
              o
            </Text>
            
          </View> */}
        </View>
      </View>
      <View style={{flex:1}}>
        <Button title='Update' onPress={fetchData} />
      </View>
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  
});

export default App;
