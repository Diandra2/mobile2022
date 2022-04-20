import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import styles from "./styles";

export default function Perfil() {
  return (
    <View style={styles.container}>
        <Image source={require("../../assets/diandra.png")} />
        <Text>Diandra Edwiges Amaral Rodrigues</Text>
    </View>
  );
}