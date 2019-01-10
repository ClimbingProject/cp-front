import React from "react";
import { StyleSheet, ScrollView, Text, Dimensions, Image } from "react-native";
import { Video, Icon } from "expo";
import Post from "./Post";

export default class PostList extends React.Component {
  render() {
    const { width } = Dimensions.get("window");
    return (
      <ScrollView>
        <Post />
        <Post />
        <Post />
      </ScrollView>
    );
  }
}
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  post: {
    backgroundColor: "#fff",
    width: width
  }
});
