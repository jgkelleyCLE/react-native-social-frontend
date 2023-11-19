import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

  const navigation = useNavigation()

  return (
    <View className="bg-gray-200 flex-1">
      <View className="pt-14 mx-4">

      <Text>Home</Text>
      <Pressable onPress={()=> navigation.navigate("Login")}>
        <Text>Login screen</Text>
      </Pressable>

      </View>
      
    </View>
  )
}

export default Home