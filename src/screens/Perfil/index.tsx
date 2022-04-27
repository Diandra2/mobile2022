import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import CardSocial from "../../components/CardSocial";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./style";
import Button from "../../components/Button";

export default function Perfil() {
  return (
    <View style={styles.container}>
        <Image source={require("../../assets/diandra.png")} />
        <Text style={styles.title}>Diandra E. Amaral Rodrigues</Text>
      <CardSocial>
        <>
          <FontAwesome5 name="facebook" style={styles.icon} />
          <Text style={styles.link}>https://facebook.com</Text>
        </>
      </CardSocial>
      <CardSocial>
        <>
          <FontAwesome5 name="instagram" style={styles.icon} />
          <Text style={styles.link}>https://instagram.com</Text>
        </>
      </CardSocial>
      <CardSocial>
        <>
          <FontAwesome5 name="linkedin" style={styles.icon} />
          <Text style={styles.link}>https://linkedin.com</Text>
        </>
       </CardSocial>
       <Button
         title="Alterar Senha"
         type="secondary"
         onPress={() => console.log("Alterar Senha")}
       />
       <Button title="Sair" type="secondary" onPress={() => console.log("Sair")} />
    </View>
  );
}