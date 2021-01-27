import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import axios from 'axios'
import { login, onRegister, getProduct } from "./Api";
export default function App() {
  const [token, setToken] = useState()

  useEffect(() => {
    async function getData() {
      const result = await getProduct()
      console.log('result', result)
    }
    getData()
  }, [])

  const onLogin = async () => {
    try {
      const result = await login({
        "email": "aaaaahello@gmail.com",
        "password": "123456"
      })
      console.log('result', result)
    } catch (error) {
      console.log('result', error)
    }
    // alert(JSON.stringify(result.data))
  }
  const onSignup = async () => {
    const result = await onRegister({
      "email": "hello11@gmail.com",
      "password": "123456",
      "userName": "hellogmail11"
    })
    console.log('resultzzz', result)
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <TouchableOpacity onPress={() => onLogin()}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSignup()}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  )
}
