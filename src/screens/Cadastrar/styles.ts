import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.rosa,

  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.secundaryLight,
    marginBottom: 20,
  },
  formRow: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.secundaryLight,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    color: colors.secundaryLight,
    padding: 5
  },
  input: {
    fontSize: 18,
    padding: 5,
    width: "80%"
  },
  icon: {
    fontSize: 24,
    color: colors.secundaryLight,
    padding: 10
  }
})

export default styles;