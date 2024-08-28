import React from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { HomeScreen } from './screens/HomeScreen'
import FullPostsScreen from './screens/FullPostsScreen'
import { Navigation } from './screens/ Navigation'

const App = () => {
  return (
    <>
      <Navigation/>
      <StatusBar theme="auto" backgroundColor='white' translucent={false} />
    </>
  )
}

export default App