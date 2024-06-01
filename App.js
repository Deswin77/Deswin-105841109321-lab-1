import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

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
    <View style={{ flex: 1}}>
      <View style={{ flexDirection: "row", 
      flex: 1,
      alignItems: "flex-start", //baris
      justifyContent: "center", //kolom
      marginLeft: 8, //jarak dari kiri
      marginRight: 8, //jarak dari kanan
      marginBottom: 40, //jarak dari bawah
    }}>
      <View style={{
        backgroundColor: "red", width: 180, height: 80,
        justifyContent: "center",
        borderRadius: 10,
        
      }}>
        <Text style={{
          fontSize: 30, color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}>
          Email/Telepon
        </Text>
      </View>
      <View style={{
        backgroundColor: "blue", width: 180, height: 80,
        justifyContent: "center",
        borderRadius: 10,
        marginLeft: 8,
      }}>
         <Text style={{
          fontSize: 30, color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}>
          Password
        </Text>
      </View>
    </View>
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
