import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

export default function AccountSettingsScreen() {
  const navigation = useNavigation()
  
  return (
    <View>
      <Text>AccountSettingsScreen</Text>
    </View>
  )
}