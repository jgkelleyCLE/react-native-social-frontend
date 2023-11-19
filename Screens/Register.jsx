import { View, Text, Pressable, Image, KeyboardAvoidingView, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons, Feather, Entypo, Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/Colors'
import axios from 'axios'

const Register = () => {

  const navigation = useNavigation()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [image, setImage] = useState("")

  const registerHandler = () => {
    // if(name && email && password && image){
    //   console.log(name, email, password, image)

      const user = {
        name,
        email,
        password,
        image
      }

      // TOP ADDRESS IS USED FOR PHYSICAL DEVICE
      axios.post('http://10.0.0.3:3001/api/users/register', user)
      // axios.post('http://localhost:3001/api/users/register', user)
      .then(response => {
        console.log(response)
        Alert.alert('Registration successful', "You have been sucessfully registered")

        setName("")
        setEmail("")
        setPassword("")
        setImage("")
      }).catch((error) => {
        Alert.alert("Registration failed", "An error occurred while registering")
        console.log("Registration failed: ", error)
      })


    // } 



  }

  return (
    <View className="bg-gray-200 flex-1">
      <View className="pt-14 mx-4">

      <Image className="w-[150px] h-[100px] self-center" resizeMode='contain' source={require('../assets/LinkedIn_Logo.svg.png')} />

      <Text className="text-xl font-bold self-center">Create new account</Text>

      <KeyboardAvoidingView>

      <View className="bg-white flex-row items-center p-2 rounded-md mt-8">
        <Ionicons name="person" size={30} color={COLORS.gray500} />
          <TextInput 
            placeholder="name"
            className=" w-[90%] p-2 text-xl"
            value={name}
            onChangeText={setName}
          />
        </View>

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

        <View className="bg-white flex-row items-center p-2 rounded-md mt-8">
        <Entypo name="image-inverted" size={30} color={COLORS.gray500} />
          <TextInput 
            placeholder="Image"
            className=" w-[90%] p-2 text-xl"
            value={image}
            onChangeText={setImage}
          />
        </View>

        {/* <View className="flex-row items-center justify-between mt-4">
          <Text className="text-gray-500">Keep me logged in</Text>
          <Text className="text-gray-500">Forgot password</Text>
        </View> */}

        

        <TouchableOpacity className="bg-[#0077b5] p-2 rounded-md mt-8 items-center" onPress={registerHandler}>
          <Text className="text-white text-2xl">Register</Text>
        </TouchableOpacity>

        <Pressable className="self-center mt-8" onPress={()=> navigation.navigate("Login")}>
          <Text>Already have an account? Sign in</Text>
        </Pressable>

        
      </KeyboardAvoidingView>
        


        

      </View>
    </View>
  )
}

export default Register