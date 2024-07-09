//* Forgot Password

import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

  const TextInputCustom =({name, color}) => {
  return (
    <TextInput placeholder={` ${name}`}
    style={{
      borderColor:'gray',
      width:355,
      height:64,
      marginBottom:10,
      paddingHorizontal:10,
      color:color,
      backgroundColor:'white',
      shadowRadius:1,
      shadowColor:'black',
      shadowOpacity:0.2
    }} 
    />
  )
}

const ButtonCustom = ({ color, text}) => {
  return (
    <View style={{
      backgroundColor:color,
      width:'90%',
      height:50,
      borderRadius:20,
      justifyContent:'center',

    }}>
      <Text style={{
        textAlign:'center',
        fontSize:17,
        color:'white',
        fontFamily:'MetroBlack',
      }}> {text}

      </Text>
    </View>
  )
}

const ForgotPasswordPage = () => {
//   const [fontLoaded] = useFonts ({
//     'MetroBold' : require ('./assets/fonts/Metropolis-Bold.otf'),
//     'MetroSemiBold' : require ('./assets/fonts/Metropolis-SemiBold.otf'),
//     'MetroBlack' : require ('./assets/fonts/Metropolis-Black.otf'),
//     'MetroMedium' : require ('./assets/fonts/Metropolis-Medium.otf'),
//     'MetroLight' : require ('./assets/fonts/Metropolis-Light.otf'),
//   })
  return (
    <View style={{
      flex:1,
      backgroundColor:'#F5F5F5'
    }}>

      <View style={{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        width:'100%',
        paddingLeft:14,
        top:26
      }}>
        <Text style={{
          fontSize:34,
          lineHeight:34,
          color:'#222222',
          fontFamily:'MetroBold',
        }}>
          Forgot Password
        </Text>
      </View>
      <View style={{
        fontFamily:'MetroMedium',
        bottom:10,
        paddingHorizontal:20
      }}>
        <Text style={{
          color:'#222222'
        }}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
      </View>

      <View style={{
        flex:1,
        width:343,
        height:64,
        alignSelf:'center',
        alignItems:'center',
        fontFamily:'MetroMedium',
        top:30

      }}>
        <TextInputCustom name='Email' color='#666666' />
      </View>

      <View style={{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        bottom:110,
        width:'100%'
      }}>
        <ButtonCustom color='red' text='SEND' />
      </View>
    </View>
  )
}

export default ForgotPasswordPage