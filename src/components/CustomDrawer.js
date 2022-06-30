import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const CustomDrawer = (props) => {
  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerScrollContainer}
      >
        <ImageBackground
          source={require("../../assets/menu-bg.jpeg")}
          style={styles.profileContainer}
        >
          <Image
            source={require("../../assets/user-profile.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>John Doe</Text>
          <View style={styles.coinsContainer}>
            <Text style={styles.coinsText}>280 Coins</Text>
            <FontAwesome5 name="coins" size={14} color="#FFF" />
          </View>
        </ImageBackground>
        <View style={styles.drawerListContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={styles.drawerFooterContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.drawerFooterLink}>
          <Ionicons name="share-social-outline" size={22} />
          <Text style={styles.drawerFooterLinkText}>Tell a Friend</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.drawerFooterLink}>
          <Ionicons name="exit-outline" size={22} />
          <Text style={styles.drawerFooterLinkText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  drawerScrollContainer: {
    backgroundColor: "#8200d6",
  },
  profileContainer: {
    padding: 20,
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    color: "#FFF",
    fontSize: 18,
    marginBottom: 10,
  },
  coinsContainer: {
    flexDirection: "row",
  },
  coinsText: {
    color: "#FFF",
    marginRight: 5,
  },
  drawerListContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 10,
  },
  drawerFooterContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  drawerFooterLink: {
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  drawerFooterLinkText: {
    fontSize: 15,
    marginLeft: 5,
  },
});