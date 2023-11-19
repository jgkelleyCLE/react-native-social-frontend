import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Register, Login } from '../Screens'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        {/* <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="Login" component={Login} /> */}
    </Tab.Navigator>
  )
}

export default BottomTabs