import React, { useState } from "react"
import { ActivityIndicator, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

//colors
import { blueColor, redColor } from "../Colors/Color"

//image
import Panel from "../assets/images/Panel.jpg"
import Battery from "../assets/images/Battery.jpg"
import Inverter from "../assets/images/Inverter.jpg"

//redux
import { connect, useDispatch } from "react-redux"
import { setValue  } from "../stores/actions/user.action.js"

//icons
import Icon from 'react-native-vector-icons/Ionicons'


const TotalCost = ({navigation, ...props}) => {
    
  console.log("==>",props.data.resultValue)

  var panel = 0;
  var battery = 0;
  var inverter = 0;
  var totalCost = 0;
  if (props.data.resultValue >= 0 && props.data.resultValue <1000 ) {
    panel = 1,  //8000
    battery = 1, //15000
    inverter = 15000,
    totalCost = 38000
  } 
  else if  (props.data.resultValue >= 1000 && props.data.resultValue < 2000 ) {
    panel = 2,  //16000
    battery = 1, //20000
    inverter =  20000,
    totalCost = 56000
  }
  else if  (props.data.resultValue >= 2000 && props.data.resultValue < 3000 ){
    panel = 3,  //24000
    battery = 2,  //40000
    inverter =  25000,
    totalCost = 74000
  }
  else if  (props.data.resultValue >= 3000 && props.data.resultValue < 4000 ){
    panel = 4,  //32000
    battery = 2,  //40000
    inverter = 28000,
    totalCost = 89000
  }
  else if  (props.data.resultValue >= 4000 && props.data.resultValue < 5000 ){
    panel = 5,  //40000
    battery = 3,  // 60000
    inverter = 34300,
    totalCost = 134300
  }
  else if  (props.data.resultValue >= 5000 && props.data.resultValue < 6000 ){
    panel = 6,  // 45000
    battery = 3,  //60000
    inverter = 38000,
    totalCost = 143000
  }
  else if  (props.data.resultValue >= 6000 && props.data.resultValue < 7000 ){
    panel = 7,   // 52000
    battery = 4,  //80000
    inverter = 42000,
    totalCost = 52122
  }
  else if  (props.data.resultValue >= 7000 && props.data.resultValue < 8000 ){
    panel = 8,   // 60000
    battery = 4,  //80000
    inverter = 45000,
    totalCost = 185000
  }
  else{
    panel = 9,   // 68000
    battery = 5,  //100000
    inverter = 50000,
    totalCost = 218000
  }
  


    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor={blueColor} />
        <SafeAreaView style={styles.SafeAreaView2}>
          <View style={{ margin: 10, width: 50, alignItems: "center" }} >
           <TouchableOpacity onPress={ ()=> navigation.navigate("HomePage")} >
            <Icon style={{ marginLeft: 7 }} name={'exit-sharp'} size={25} color="#000" />
            <Text>logout</Text>
           </TouchableOpacity>

          </View>
          <View style={[styles.outerWrapper,{ marginTop: 20}]}>

     
          <View>
              <Text style={{ textAlign: "center" ,fontSize: 25, fontWeight: "bold", color: redColor }} >No Of Panel: {panel}</Text>
              <Image style={{  width: window.screen, height: 110 }} resizeMode="contain" source={Panel}></Image>
          </View>

          <View>
              <Text style={{ textAlign: "center" ,fontSize: 25, fontWeight: "bold", color: redColor }} >No Of Battery: {battery}</Text>
              <Image style={{ width: window.screen, height: 120 }}resizeMode="contain" source={Battery}></Image>
          </View>

          <View>
              <Text style={{ textAlign: "center" ,fontSize: 25, fontWeight: "bold", color: redColor }} >Cost Of Inverter: {inverter}</Text>
              <Image style={{ width: window.screen, height: 110 }} resizeMode="contain" source={Inverter}></Image>
          </View>

          <View style={{ backgroundColor: blueColor, marginTop: 40, width: '90%', borderRadius: 20,height: 50  }} >
              <Text style={{ textAlign: "center" ,fontSize: 25, fontWeight: "bold", color: redColor, lineHeight: 50 }} >Total Watts: {props.data.resultValue}</Text>
          </View>

          <View style={{ backgroundColor: blueColor, marginTop: 20, width: '90%', borderRadius: 20,height: 50, marginBottom: 50  }} >
              <Text style={{ textAlign: "center" ,fontSize: 25, fontWeight: "bold", color: redColor, lineHeight: 50 }} >Total Cost: {totalCost}</Text>
          </View>


          
          
          
          </View>          
        </SafeAreaView>
    </>
    )
}


const styles = StyleSheet.create({
    container: {     
        flexGrow: 1,
        paddingTop: 10,
        paddingHorizontal: 10
      },
      SafeAreaView1: { backgroundColor: '#FFF', flex: 0 },
      SafeAreaView2: { flex: 1, backgroundColor: '#FFF' },
      outerWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
      },
      buttonStyle: {
        backgroundColor: '#EEE',
        paddingHorizontal: 40,
        paddingVertical: 30,
        borderWidth: 0.5,
        borderColor: '#F0F0F0',
        borderRadius: 10
      },
      text: { 
        fontSize: 18, color: '#808080', fontWeight: 'bold' 
      }, 
      LoveOneLogo: {
        height: 80,
        width: 230,
      },

})


//le k aoo
const mapStateToProps = state => {
  return {
    data: state.userReducer
  }
}

//for set value
const mapDispatchToProps = {
  setValue
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalCost) 

