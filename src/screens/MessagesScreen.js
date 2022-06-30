import { View, Text, StyleSheet } from "react-native";

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Messages Screen</Text>
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});