import React, { useEffect, useState } from 'react';
import { 
  Text,
  View,
  Image,
  Dimensions, 
  SafeAreaView,
  StyleSheet
} from 'react-native';
const { width } = Dimensions.get('screen')

const App =  () =>  {
  // let area:string
 
  const [area, setArea] = useState('')
  const [temperature, setTemperature] = useState()
  const [humidity, setHumidity] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    // setInterval(() =>fetchData(), 30000)
    fetchData()
  })


  const fetchData = () => {
    setLoading(true)
    const API_KEY = '603dad55a0782039ed2b6a3dab823fb0'
    setArea("midrand")
    try{
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${API_KEY}&units=metric`)
      .then(data => data.json())
      .then((results) => {
        const {main} = results

        console.log('results', results)
        const {temp, humidity} = main
        setTemperature(temp)
        setHumidity(humidity)
        setLoading(false)
      })
    }
    catch(e)  {
      console.error('Error: ', e)
      setLoading(false)
    }
    
  }

  // fetchData()
  return (
    
    <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'center', padding:20, paddingVertical:50}} >
  
      <Text style={{fontSize:22, fontWeight:'bold', marginTop:20, marginBottom:10}}>Today's Weather</Text>
      <View style={{height:2, width:(width - 50) , backgroundColor:'#555555', marginHorizontal:10}} />
      <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'flex-start', padding:10}}>
        <Image
          style={{width:100, height:100, padding:10}}
          source={require('./src/asserts/cloudy.png')}/>
        
        <View>
        { loading ? 
          (<Text>Loading</Text>)
        : (
          <View style={{flexDirection:"row", padding:10}}>
            <Text style={{fontSize:22, fontWeight:'bold'}}>
              {temperature} 
            </Text>
            <Text style={{fontSize:12}}>
              o
            </Text>
            <Text style={{fontSize:16}}>
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
          <Text>Wind Speed: {18} km/h</Text>
          <Text>Wind Direction</Text>
          
        </View>
      </View>
      <View style={{flex:1}}>

      </View>
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  
});

export default App;
