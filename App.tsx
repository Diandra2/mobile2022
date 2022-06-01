import "react-native-gesture-handler";
import Navigation from "./src/navigations";
import { AuthProvider } from "./scr/hook/auth";
export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}