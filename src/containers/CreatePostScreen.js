import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Video } from "expo";
import { Button } from "react-native-elements";
import SearchModal from "../components/SearchModal";

export default class CreatePostScreen extends React.Component {
  async componentWillMount() {
    this.setState({
      videoUri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
    });
  }

  render() {
    const { width } = Dimensions.get("window");
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* <Button onPress={() => this._pickImage()} title="change video" /> */}
        <Video
          source={{
            uri: this.state.videoUri
          }}
          resizeMode="cover"
          style={{
            height: 300,
            width: 300,
            justifyContent: "center",
            alignItems: "center"
          }}
        />
        <SearchModal />
      </View>
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
