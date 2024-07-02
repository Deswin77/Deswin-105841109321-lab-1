// * Login

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

const Login = () => {
  const [fontLoaded] = useFonts ({
    'MetroBold' : require ('./assets/fonts/Metropolis-Bold.otf'),
    'MetroSemiBold' : require ('./assets/fonts/Metropolis-SemiBold.otf'),
    'MetroBlack' : require ('./assets/fonts/Metropolis-Black.otf'),
    'MetroMedium' : require ('./assets/fonts/Metropolis-Medium.otf'),
    'MetroLight' : require ('./assets/fonts/Metropolis-Light.otf'),
  })
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
          top:80
        }}>
          Login
        </Text>
      </View>

      <View style={{
        flex:1,
        width:343,
        height:64,
        alignSelf:'center',
        alignItems:'center',
        fontFamily:'MetroMedium'

      }}>
        <TextInputCustom name='Email' color='#666666' />
        <TextInputCustom name='Password' color='#666666' />
      </View>

      <View style={{
        alignSelf:'flex-end',
        bottom:30,
        right:17,
        fontFamily:'MetroMedium'
      }}>
        <Text style={{
          color:'#222222'
        }}>Forgot your password</Text>
      </View>

      <View style={{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        bottom:140,
        width:'100%'
      }}>
        <ButtonCustom color='red' text='LOGIN' />
      </View>

      <View style={{
        alignSelf:'center'
      }}>
        <Text style={{
          color:'#222222',
          fontSize:14,
          bottom:50,
          fontFamily: 'MetroMedium'

        }}>
          Or sign up with social account
        </Text>
      </View>

      <View style={{
        flexDirection:'row',
        columnGap:20,
        alignSelf:'center',
        bottom:35
      }}>

        <View style={{
          backgroundColor:'white',
          borderRadius:10,
          padding:10
        }}>
          <Image source={require ('./assets/google.png')} style={{
            height:30,
            width:50,
            resizeMode:'contain'
          }} />
        </View>

        <View style={{
          backgroundColor:'white',
          borderRadius:10,
          padding:10
        }}>
          <Image source={require ('./assets/fb.png')} style={{
            height:30,
            width:50,
            resizeMode:'contain'
          }} />
        </View>
      </View>
    </View>
  )
}

export default Login