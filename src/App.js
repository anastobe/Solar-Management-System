import React, { useEffect, useState } from 'react';

//screens
import HomePage from './screens/HomePage';
import Start from './screens/Start';

//functions
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//items
import Form from './screens/Form';
import Bulb from './screens/Bulb';
import Ac from './screens/Ac';
import Fan from './screens/Fan'; 
import Motor from './screens/Motor';
import WashingMachine from './screens/WashingMachine';
import Iron from './screens/Iron';
import MicroWave from './screens/MicroWave';
import Tv from './screens/Tv';
import Detail from './screens/Detail';
import TotalCost from './screens/TotalCost';
import DataCheck from './screens/DataCheck';



// redux  
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from "react-redux"
import { store } from './stores'

const Stack = createStackNavigator()

const App = () => {


  return (
    <Provider store={store}>
    
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

<Stack.Screen
        name="HomePage"
        options={{ headerShown: false }}
        component={ HomePage }
    />
        <Stack.Screen
            name="Detail"
            options={{ headerShown: false }}
            component={ Detail }
            />
      <Stack.Screen
            name="TotalCost"
            options={{ headerShown: false }}
            component={ TotalCost }
          />
        <Stack.Screen
            name="Start"
            options={{ headerShown: false }}
            component={ Start }
          />
      <Stack.Screen
            name="Form"
            options={{ headerShown: false }}
            component={ Form }
          />
      <Stack.Screen
            name="DataCheck"
            options={{ headerShown: false }}
            component={ DataCheck }
          />        
        <Stack.Screen
              name="Iron"
              options={{ headerShown: false }}
              component={ Iron }
            />
      <Stack.Screen
        name="Tv"
              options={{ headerShown: false }}
              component={ Tv }
            />
        <Stack.Screen
              name="MicroWave"
              options={{ headerShown: false }}
              component={ MicroWave }
            />
        <Stack.Screen
        name="WashingMachine"
              options={{ headerShown: false }}
              component={ WashingMachine }
            />
      <Stack.Screen
            name="Bulb"
            options={{ headerShown: false }}
            component={ Bulb }
          />
        <Stack.Screen
            name="Motor"
            options={{ headerShown: false }}
            component={ Motor }
          />
      <Stack.Screen
            name="Fan"
            options={{ headerShown: false }}
            component={ Fan }
          />        
        <Stack.Screen
            name="Ac"
            options={{ headerShown: false }}
            component={ Ac }
          />

      
      </Stack.Navigator>
    </NavigationContainer>


    </Provider>
  )
}

export default App
























































// import React, { useEffect, useState } from 'react'
// import 'react-native-gesture-handler'
// import MainNavigation from './navigation/navigation'
// import { Provider } from 'react-redux'
// import { store } from './stores'
// import Loader from './screens/Loader/Loader'

// const App = () => {

//   const [Load, setLoad] = useState(true)


//   useEffect(() => {
    
//     setTimeout(() => {
        
//         setLoad(false)
  
//     }, 1000);
//   }, [])
     

//   return (
//     <>
    

//     {Load ? <Loader /> :
        
//         <Provider store={store}>
//            <MainNavigation />
//         </Provider>
//         }
//     </>
//   )
// }

// export default App
