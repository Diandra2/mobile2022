import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
    backgroundColor: colors.rosa
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.black,
    marginBottom: 20,
  },
  icon: {
    fontSize: 24,
    padding: 5
  },
  link: {
    fontSize: 20
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
})

export default styles