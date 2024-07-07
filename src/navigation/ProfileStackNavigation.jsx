import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/Profile'
import DataPet from '../screens/DataPet'
import SetPetInfo from '../screens/SetPetInfo'

const Stack = createNativeStackNavigator()

const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator
    initialRouteName='Profile'
    screenOptions={{
        headerShown: false,
    }
    }>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='DataPet' component={DataPet}/>
        <Stack.Screen name='SetPetInfo' component={SetPetInfo}/>
    </Stack.Navigator>
    
  )
}

export default ProfileStackNavigation

const styles = StyleSheet.create({})