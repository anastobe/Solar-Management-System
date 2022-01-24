import React from "react"
import { ActivityIndicator, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"

//pic
import HomePic from "../assets/images/HomePic.jpg"

//colors
import { redColor } from "../Colors/Color"

//component
import Button from "../components/Button"

const HomePage = ({navigation}) => {
    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor="#aa2928" />
        <SafeAreaView style={styles.SafeAreaView2}>
  
          <View style={styles.outerWrapper}>

            <View>
              <Text  style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", color: redColor  }}  >Welcome to My Project Solar System Price Calculator</Text>
            </View>

            <View>
              <Image style={{ width: 320, height: 270 }} resizeMode="contain" source={HomePic}></Image>
            </View>

            <TouchableOpacity style={{ width: 200 }} onPress={()=> navigation.navigate("Start")}>
             <Button  />
            </TouchableOpacity>

            <View>
              <Text  style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", color:  redColor  }}  >Group Member Name:</Text>
              <Text  style={{ fontSize: 22, textAlign: "center", fontWeight: "bold", color:  redColor  }}  >Anas Ahmed(Team Lead)</Text>
              <Text  style={{ fontSize: 22, textAlign: "center", fontWeight: "bold", color:  redColor  }}  >Rahim Khan</Text>
              <Text  style={{ fontSize: 22, textAlign: "center", fontWeight: "bold", color:  redColor  }}  >Bazif Khursheed</Text>
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

export default HomePage
