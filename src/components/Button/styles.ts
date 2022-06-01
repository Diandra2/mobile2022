import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  buttonGreen: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    margin: 10
  },
  buttonPrimary: {
    backgroundColor: colors.secundary,
    borderRadius: 5,
    margin: 10
  },
  buttonSecundary: {
    backgroundColor: colors.secundary,
    borderRadius: 5,
    margin: 10
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    fontSize: 18
  }
});

export default styles;