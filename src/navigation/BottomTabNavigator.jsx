import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/Profile'
import Feed from '../screens/Feed'
import { NavigationContainer } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';
import FeedCamera from '../screens/FeedCamera'
import ProfileStackNavigation from './ProfileStackNavigation'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name='Home'
        component={Feed}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <MaterialIcons name="home" size={24} color={focused ? 'blue' : 'grey'} />
              </View>
            )
          }
        }} />

      <Tab.Screen
        name='Camera'
        component={FeedCamera}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <MaterialIcons name="camera-enhance" size={36} color={focused ? 'blue' : 'grey'} />
              </View>
            )
          }
        }} />

      <Tab.Screen name='Perfil'
        component={ProfileStackNavigation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <MaterialIcons name="pets" size={24} color={focused ? 'blue' : 'grey'} />
              </View>
            )
          }
        }} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
  tabBar: {

  }
})