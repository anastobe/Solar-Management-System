import React from "react"
import { ActivityIndicator, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"


//colors
import { blueColor, redColor } from "../Colors/Color"


const Button = () => {
    return (
      <View style={{ height: 50 ,backgroundColor: blueColor , borderRadius: 20}} >
         <Text  style={{ fontSize: 25, textAlign: "center", fontWeight: "bold", lineHeight: 50 ,color: "#aa2928"  }}  >Start</Text>
      </View>
    )
}

export default Button
