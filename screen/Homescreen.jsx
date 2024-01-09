import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Homescreen() {
  return (
    <View style={styles.Container}>
      <Text>Homescreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})
