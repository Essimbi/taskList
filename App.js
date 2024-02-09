import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
import { NativeBaseProvider, } from "native-base";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
