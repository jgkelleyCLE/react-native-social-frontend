import { View, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Pressable} from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons, Feather, Entypo } from '@expo/vector-icons';
import { COLORS } from '../constants/Colors'

import { useNavigation } from '@react-navigation/native'

const Login = () => {

  const navigation = useNavigation()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginHandler = () => {
    console.log(email, password)

    setEmail("")
    setPassword()
  }

  return (
    <View className="bg-gray-200 flex-1">
      <View className="pt-14 mx-4">
        {/* <Text className="text-2xl">Login</Text> */}
        <Image className="w-[150px] h-[100px] self-center" resizeMode='contain' source={require('../assets/LinkedIn_Logo.svg.png')} />

        
        <View className="items-center">
          <Text className="text-xl font-bold">Login to your account</Text>
        </View>

        <KeyboardAvoidingView>

        <View className="bg-white flex-row items-center p-2 rounded-md mt-8">
        <MaterialIcons name="email" size={30} color={COLORS.gray500} />
          <TextInput 
            placeholder="Email"
            className=" w-[90%] p-2 text-xl"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View className="bg-white flex-row items-center p-2 rounded-md mt-8">
        <Entypo name="lock" size={30} color={COLORS.gray500} />
          <TextInput 
            placeholder="password"
            className=" w-[90%] p-2 text-xl"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        

        <View className="flex-row items-center justify-between mt-4">
          <Text className="text-gray-500">Keep me logged in</Text>
          <Text className="text-gray-500">Forgot password</Text>
        </View>

        

        <TouchableOpacity className="bg-[#0077b5] p-2 rounded-md mt-8 items-center" onPress={loginHandler}>
          <Text className="text-white text-2xl">Login</Text>
        </TouchableOpacity>

        <Pressable className="self-center mt-8" onPress={()=> navigation.navigate("Register")}>
          <Text>Don't have an account? Register.</Text>
        </Pressable>

        
      </KeyboardAvoidingView>

      </View>
    </View>
  )
}

export default Login


{/* <View className="items-center">
          <View className="flex-row items-center gap-3 bg-white rounded-md mt-4 ">
          
          </View>

        </View> */}