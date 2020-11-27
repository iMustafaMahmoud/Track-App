import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Button } from "react-native-elements";
import Spacer from "../components/spacer";
import { Context as AuthContext } from "../context/authContext";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={styles.text}>Account Screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  tabBarIcon: <FontAwesome name="gear" size={24} color="black" />,
};

//import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
  text: {
    color: "black",
    alignSelf: "center",
    fontSize: 40,
  },
});

export default AccountScreen;
