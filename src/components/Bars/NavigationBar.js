import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { Video, Icon } from "expo";

export default class NavigationBar extends React.Component {
  render() {
    const { width } = Dimensions.get("window");
    return (
      <View style={styles.header}>
        <Text style={styles.title}> Climbing Project </Text>
      </View>
    );
  }
}
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  header: {
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: 82,
    borderBottomWidth: 0.5
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 30
  }
});
