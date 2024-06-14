import { StyleSheet, Text, View, TextInput} from "react-native";
import React from "react";
import ButtonCustom from "./component/button/button";

const App = () => {

  const TextInputCustom = ({ name, color,}) => {
  return (
    <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          marginBottom: 20,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingLeft: 10,
          color: color,

        }}
        placeholder={`Masukkan ${name}`}
      />
      );
    }


  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <TextInputCustom name="Username" color="black"/>
      <TextInputCustom name="Email" color="blue"/>
      <TextInputCustom name="Password" color="red"/>
    </View>
      )
    }


export default App;
