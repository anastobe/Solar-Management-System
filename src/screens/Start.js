import React from "react"
import { ActivityIndicator, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

//pic
import MenThinking from "../assets/images/MenThinking.jpg"

//colors
import { blueColor, redColor } from "../Colors/Color"
import Button from "../components/Button"

const Start = ({navigation}) => {
    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor="#aa2928" />
        <SafeAreaView style={styles.SafeAreaView2}>
  
          <View style={styles.outerWrapper}>

            <View>
              <Text  style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", color: redColor }}  >Confused?</Text>
            </View>

            <View>
              <Image style={{ width: 280, height: 250 }} resizeMode="contain" source={MenThinking}></Image>
            </View>


            <View style={{ margin: 40 }} >
              <Text  style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", color:  redColor  }}  >Click Here To Fill Form</Text>              
            </View>

            <TouchableOpacity style={{ width: 220 }} onPress={()=> navigation.navigate("Form")}>
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

export default Start
