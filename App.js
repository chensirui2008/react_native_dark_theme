import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { Switch, Text, View, StyleSheet } from "react-native";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  console.log(colorScheme);
  return (
    <View className="flex-1 justify-center items-center dark:bg-neutral-900 space-y-6">
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <View className="flex-row justify-center items-center space-x-2">
        <Text
          className="text-xl"
          style={colorScheme === "dark" ? styles.whiteText : styles.blackText}
        >
          Toggle Theme
        </Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
      <Text
        className=" mx-4 text-justify"
        style={colorScheme === "dark" ? styles.whiteText : styles.blackText}
      >
        Open up App.js to start working on your app!
      </Text>
      <View className="h-48 w-full bg-sky-400 dark:bg-emerald-400" />
    </View>
  );
}

const styles = StyleSheet.create({
  whiteText: {
    color: "white",
  },
  blackText: {
    color: "black",
  },
});
