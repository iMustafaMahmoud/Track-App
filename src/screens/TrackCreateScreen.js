import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocations from "../hooks/useLocations";
import TrackForm from "../components/TrackForm";
import { FontAwesome } from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);

  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  //const [err] = useLocations((location) => addLocation(location)); or
  const [err] = useLocations(isFocused || state.recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2 style={styles.text}>Creata a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={24} color="black" />,
};

const styles = StyleSheet.create({
  text: {
    color: "black",
    alignSelf: "center",
    fontSize: 48,
    paddingBottom: 30
  },
});

export default withNavigationFocus(TrackCreateScreen);
