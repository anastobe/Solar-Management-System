import React, { useState } from "react"
import { ActivityIndicator, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

//components
import Icon from 'react-native-vector-icons/Ionicons'

//pic
import HomePic from "../assets/images/homepic.png"

//colors
import { blueColor, redColor } from "../Colors/Color"
import Button from "../components/Button"

//redux
import { connect, useDispatch } from "react-redux"
import { setValue  } from "../stores/actions/user.action.js"

const Start = ({navigation, ...props }) => {

     
    const [userName, setuserName] = useState(null)
    const [password, setPassword] = useState(null)

    const dispatch = useDispatch()


     const setuserNameData = () =>{

      props.setValue( 
        "userName", userName,
        )
      props.setValue( 
        "password", password          
        )

        navigation.navigate("Bulb")
        
      }


      

    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor="#aa2928" />
        <SafeAreaView style={styles.SafeAreaView2}>
  
          <View style={styles.outerWrapper}>


        <View>
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: redColor, margin: 20  }}>User Detail</Text>
        </View>

        <View>
            <Image style={{ width: 240, height: 170 }} resizeMode="contain" source={HomePic}></Image>
        </View>


        <View style={{ margin: 10, width: '90%'}} >
        <Text style={{ color: '#7C7C7D' }} >Costumer Name</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',borderColor: '#DDDDDF', borderWidth: 2,}}>
        <View style={{ marginLeft: 10 }} >
      <Icon name={'ios-people'} size={25} color="#7C7C7D" />
        </View>
    <TextInput
        style={{  flex: 1, paddingTop: 10, paddingRight: 10, paddingBottom: 10, paddingLeft: 10, backgroundColor: '#fff', color: '#424242', }}
        placeholder="Enter Costumer Name"
        onChangeText={setuserName}
        value={userName}
        underlineColorAndroid="transparent"/>
      </View>
        </View>

        <View style={{ margin: 10, width: '90%'}} >
        <Text style={{ color: '#7C7C7D' }} >Phone Number</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',borderColor: '#DDDDDF', borderWidth: 2,}}>
        <View style={{ marginLeft: 10 }} >
        <Icon name={'lock-closed-sharp'} size={25} color="#7C7C7D" />
        </View>
    <TextInput
    secureTextEntry={true}
    value={password}
    style={{  flex: 1, paddingTop: 10, paddingRight: 10, paddingBottom: 10, paddingLeft: 10, backgroundColor: '#fff', color: '#424242', }}
        placeholder=" Phone Number"
        onChangeText={setPassword}
        underlineColorAndroid="transparent"/>
      </View>
        </View>

        <TouchableOpacity style={{ width: 260, margin: 40 }} onPress={()=> setuserNameData() }>
            <Button  />
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



const mapStateToProps = state => {
  return {

    data: state.userReducer

  }

}
const mapDispatchToProps = {

  setValue
}


export default connect(mapStateToProps, mapDispatchToProps)(Start)
