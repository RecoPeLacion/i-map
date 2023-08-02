import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={style.headerWrap}>
      <Image source={require('./../../../assets/logo.png')} style={style.logo} />
      <View style={style.textInputWrap}>
        <TextInput placeholder='Search' style={style.search} />
      </View>
      <Image source={require('./../../../assets/user.jpg')} style={style.userImg} />
    </View>
  )
}

const style = StyleSheet.create({
    headerWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 20
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    textInputWrap: {
        flex: 1
    },
    search: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 15,
        borderRadius: 50,
        paddingLeft: 15,
    },
    userImg: {
        width: 50,
        height: 50,
        borderRadius: 50
    }
})