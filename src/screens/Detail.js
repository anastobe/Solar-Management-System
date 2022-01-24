import React, { useState } from "react"
import { ActivityIndicator, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

//colors
import { blueColor, redColor } from "../Colors/Color"
import Button from "../components/Button"

//redux
import { connect, useDispatch } from "react-redux"
import { setValue  } from "../stores/actions/user.action.js"

const Detail = ({navigation, ...props}) => {
    
  
  // console.log("==>",props.data)


  const saveData = () =>{

    props.setValue( 
      "resultValue", (props.data.AcValue * 1500) + (props.data.IronValue * 1000) + (props.data.MicroWaveValue * 800) + (props.data.MotorValue * 1000) + ( props.data.TvValue * 70) + (props.data.WashingMachineValue * 1200) + ( props.data.bulbValue * 30) + (props.data.fanValue * 100),
      )
    navigation.navigate("TotalCost")
  }
  

  const result = (props.data.AcValue * 1500) + (props.data.IronValue * 1000) + (props.data.MicroWaveValue * 800) + (props.data.MotorValue * 1000) + ( props.data.TvValue * 70) + (props.data.WashingMachineValue * 1200) + ( props.data.bulbValue * 30) + (props.data.fanValue * 100)
  console.log("result==>", result)


  //ac = 1500
  // iron= 1000
  // MicroWaveValue = 800
  // MotorValue= 1000
  // TvValue =70
  // WashingMachineValue = 1200
  // bulbValue = 30
  // fanValue = 100

    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor={blueColor} />
        <SafeAreaView style={styles.SafeAreaView2}>
        <View style={{ width: '100%', marginBottom: 10 }} >

            <ScrollView>

            <View>
              <Text  style={{ fontSize: 30, textAlign: "center", marginTop: 20 ,fontWeight: "bold", color: redColor }}  >Costumer Information</Text>
            </View>

          <View style={{ marginLeft: 30  ,marginTop: 20 }} >
                <Text  style={{ fontWeight: 'bold', color: redColor }}  >Name:</Text>
            </View>
          <View style={{  backgroundColor: blueColor,marginLeft: 20, marginRight: 20, borderRadius: 20, height: 50 ,alignItems: 'center', justifyContent: 'center'  }} >
              <Text>{props.data.userName}</Text>
          </View> 

          <View style={{ marginLeft: 30  ,marginTop: 20 }} >
                <Text  style={{ fontWeight: 'bold', color: redColor }}  >Phone Number:</Text>
            </View>
          <View style={{ backgroundColor: blueColor, marginLeft: 20, marginRight: 20, borderRadius: 20, height: 50 ,alignItems: 'center', justifyContent: 'center'  }} >
              <Text>{props.data.password}</Text>
          </View> 

          <View style={{ marginLeft: 30  ,marginTop: 20 }} >
                <Text  style={{ fontWeight: 'bold', color: redColor }}  >Bulb:</Text>
            </View>
          <View style={{ backgroundColor: blueColor, marginLeft: 20, marginRight: 20, borderRadius: 20, height: 50 ,alignItems: 'center', justifyContent: 'center'  }} >
              <Text>{props.data.bulbValue}</Text>
          </View> 

          <View style={{ marginLeft: 30  ,marginTop: 20 }} >
                <Text  style={{ fontWeight: 'bold', color: redColor }}  >Fan:</Text>
            </View>
          <View style={{ backgroundColor: blueColor, marginLeft: 20, marginRight: 20, borderRadius: 20, height: 50 ,alignItems: 'center', justifyContent: 'center'  }} >
              <Text>{props.data.fanValue}</Text>
          </View> 

          <View style={{ marginLeft: 30  ,marginTop: 20 }} >
                <Text  style={{ fontWeight: 'bold', color: redColor }}  >Micro Wave:</Text>
            </View>
          <View style={{ backgroundColor: blueColor, marginLeft: 20, marginRight: 20, borderRadius: 20, height: 50 ,alignItems: 'center', justifyContent: 'center'  }} >
              <Text>{props.data.MicroWaveValue}</Text>
          </View> 

          <View style={{ marginLeft: 30  ,marginTop: 20 }} >
                <Text  style={{ fontWeight: 'bold', color: redColor }}  >Iron:</Text>
            </View>
          <View style={{ backgroundColor: blueColor, marginLeft: 20, marginRight: 20, borderRadius: 20, height: 50 ,alignItems: 'center', justifyContent: 'center'  }} >
              <Text>{props.data.IronValue}</Text>
          </View> 

          <View style={{ marginLeft: 30  ,marginTop: 20 }} >
                <Text  style={{ fontWeight: 'bold', color: redColor }}  >Motor:</Text>
            </View>
          <View style={{ backgroundColor: blueColor, marginLeft: 20, marginRight: 20, borderRadius: 20, height: 50 ,alignItems: 'center', justifyContent: 'center'  }} >
              <Text>{props.data.MotorValue}</Text>
          </View> 

          <View style={{ marginLeft: 30  ,marginTop: 20 }} >
                <Text  style={{ fontWeight: 'bold', color: redColor }}  >Tv:</Text>
            </View>
          <View style={{ backgroundColor: blueColor, marginLeft: 20, marginRight: 20, borderRadius: 20, height: 50 ,alignItems: 'center', justifyContent: 'center'  }} >
              <Text>{props.data.TvValue}</Text>
          </View> 

          <View style={{ marginLeft: 30  ,marginTop: 20 }} >
                <Text  style={{ fontWeight: 'bold', color: redColor }}  >Washing Machine:</Text>
            </View>
          <View style={{ backgroundColor: blueColor, marginLeft: 20, marginRight: 20, borderRadius: 20, height: 50 ,alignItems: 'center', justifyContent: 'center'  }} >
              <Text>{props.data.WashingMachineValue}</Text>
          </View> 

          <View style={{ marginLeft: 30  ,marginTop: 20 }} >
                <Text  style={{ fontWeight: 'bold', color: redColor }}  >Total Watts:</Text>
            </View>
          <View style={{ backgroundColor: blueColor, marginLeft: 20, marginRight: 20, borderRadius: 20, height: 50 ,alignItems: 'center', justifyContent: 'center'  }} >
              <Text>{result}</Text>
          </View> 
        
          <TouchableOpacity style={{ width: '90%', marginTop: 20, marginBottom: 10, marginLeft: 20}} onPress={()=> saveData()}>
           <View style={{ height: 50 ,backgroundColor: blueColor , borderRadius: 20}} >
            <Text  style={{ fontSize: 25, textAlign: "center", fontWeight: "bold", lineHeight: 50 ,color: "#aa2928"  }}  >Costing</Text>
           </View>
            </TouchableOpacity>

          </ScrollView>

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

export default connect(mapStateToProps, mapDispatchToProps)(Detail) 

