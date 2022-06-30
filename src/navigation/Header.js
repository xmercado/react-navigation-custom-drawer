import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = ({ navigation }) => {
  const profileImage = require("../../assets/user-profile.jpg");

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={30} style={styles.menuIcon} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Custom Drawer App</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={profileImage} style={styles.profileIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  menuIcon: {
    color: "purple",
  },
  headerText: {
    fontSize: 18,
  },
  profileIcon: {
    width: 35,
    height: 35,
    borderRadius: 25,
  },
});