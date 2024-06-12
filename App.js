import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ButtonCustom from "./component/button/button";


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{
          backgroundColor: "white",
          top:0,
          bottom:0,
          height:60,
          justifyContent:'center'
      }}>
        <Text style={{
          fontSize: 30,
          textAlign: "center",
          fontWeight: "bold",
          color: "black",
        }}>
          WELCOME
        </Text>
      </View>
      
        <View style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          top: '5%',
        }}>
          <Image source={require("./assets/shopee.png")} style={{
            width: '80%',
            height: '100%',
            resizeMode: 'contain',
          }} />
        </View>
    <View style={{ flex: 1, flexDirection: 'row'}}>
      <ButtonCustom text="Email/Telepon" color="black" />
      <ButtonCustom text="Password" color="black" />
  </View>

  <View>
      <Text style={{
          fontSize: 30,
          textAlign: "center",
          fontWeight: "bold",
          color: "black",
          bottom: '60%',
          backgroundColor: "orange",
        }}>
          Login
        </Text>
    </View>
  </View>
      )
    }


export default App;
