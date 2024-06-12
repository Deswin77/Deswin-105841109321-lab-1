import React from "react"
import { View,Text } from "react-native"

const ButtonCustom = ({color, text}) => {
    return (
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
                fontSize: 30, color: color,
                textAlign: "center",
                fontWeight: "bold",
              }}>
                {text}
              </Text>
            </View>
        </View>
    )
}


export default ButtonCustom