import { StyleSheet, Text, View } from "react-native";
import React from "react";

const App = () => {
  return (
    <View style={{ flex: 1}}>
      <View style={{ flexDirection: "row", 
      flex: 1,
      alignItems: "flex-end", //baris
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
          Login
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
          Register
        </Text>
      </View>
    </View>
  </View>
      )
    }


export default App;
