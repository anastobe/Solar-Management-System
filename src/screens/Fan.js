import React, { useState } from "react"
import { ActivityIndicator, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

//pic
import fanPic from "../assets/images/fan.jpg"

//colors
import { blueColor, redColor } from "../Colors/Color"
import Button from "../components/Button"

//redux
import { connect, useDispatch } from "react-redux"
import { setValue  } from "../stores/actions/user.action.js"

const Fan = ({navigation, ...props}) => {
    
    const [fanVal, setfanVal] = useState("")

    const saveData = () =>{
      props.setValue( 
        "fanValue", fanVal,
        )
      navigation.navigate("Motor")
    }

    
    
    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor={blueColor} />
        <SafeAreaView style={styles.SafeAreaView2}>
  
          <View style={styles.outerWrapper}>

            <View>
              <Text  style={{ fontSize: 35, textAlign: "center", fontWeight: "bold", color: redColor }}  >Number of Fans</Text>
            </View>

            <View>
              <Image style={{ width: 280, height: 250 }} resizeMode="contain" source={fanPic}></Image>
            </View>

            
        <View style={{ margin: 10, width: '90%', borderWidth: 1, borderRadius: 10, borderColor: redColor}} >
    <TextInput
        placeholder="   Number of Fans at your Home"
        onChangeText={setfanVal}
        value={fanVal}
        underlineColorAndroid="transparent"/>
      </View>


            <TouchableOpacity style={{ width: 220 }} onPress={()=> saveData("Motor")}>
             <Button names="Fanr"  />
            </TouchableOpacity>
        


            
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

export default connect(mapStateToProps, mapDispatchToProps)(Fan) 
