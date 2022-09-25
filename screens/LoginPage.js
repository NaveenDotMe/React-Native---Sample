import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function LoginPage() {
  return (
    <View>
      <TextInput style={styles.input1} placeholder='User Name' />
      <TextInput style={styles.input2} placeholder='Passward' />
      <TouchableOpacity
        style={styles.btn}
      >
        <Text style={{ color: 'black', fontSize: 15}}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input1: {
    marginTop: '40%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 100
  },
  input2: {
    marginTop: '5%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 100
  },
  btn: {
    marginTop: '5%',
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: '80%',
    borderRadius: 100
  }
})