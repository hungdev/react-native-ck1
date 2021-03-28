import React from 'react'
import { View, Text, ActivityIndicator, } from 'react-native'

export default function Spinner() {
  return (
    <View style={{ position: 'absolute', top: '50%', left: '45%', zIndex: 1 }}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  )
}
