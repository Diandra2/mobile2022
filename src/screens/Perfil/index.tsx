import React, {useEffect} from "react";
import { Text, Image, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ButtonComp, CardSocialComp } from "../../components";
import styles from "./style";
import { useAuth } from "../../hook/auth";
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from "../../services/data/Push";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,

  }),
});

export default function Perfil() {
  const { user } = useAuth();
  console.log(user?.profile_photo_url)

  useEffect(() => {
    async function fetchToken() {
      const token = await registerForPushNotificationsAsync()
      console.log(token)
    }
    fetchToken()
  }, []);
  return (
    <View style={styles.container}>
      <Image source={{ uri: user?.profile_photo_url }} style={styles.img} />
      <Text style={styles.title}>{user?.name}</Text>
      <CardSocialComp>
        <>
          <FontAwesome5 name="facebook" style={styles.icon} />
          <Text style={styles.link}>https://facebook.com</Text>
        </>
      </CardSocialComp>
      <CardSocialComp>
        <>
          <FontAwesome5 name="instagram" style={styles.icon} />
          <Text style={styles.link}>https://instagram.com</Text>
        </>
      </CardSocialComp>
      <CardSocialComp>
        <>
          <FontAwesome5 name="linkedin" style={styles.icon} />
          <Text style={styles.link}>https://linkedin.com</Text>
        </>
      </CardSocialComp>
      <ButtonComp
        title="Alterar Senha"
        type="primary"
        onPress={() => console.log("Alterar Senha")}
      />
      <ButtonComp
        title="Sair"
        type="primary"
        onPress={() => console.log("Sair")}
      />
    </View>
  );
}
