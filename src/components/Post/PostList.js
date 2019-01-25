import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  Image,
  View,
  FlatList
} from "react-native";
import { Video, Icon } from "expo";
import Post from "./Post";

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        },
        {
          id: 2,
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        },
        {
          id: 3,
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        },
        {
          id: 4,
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        },
        {
          id: 5,
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        }
      ],
      viewableItemIndices: [0]
    };
  }
  _keyExtractor = item => item.id;

  onViewableItemsChanged = ({ viewableItems, changed }) => {
    if (viewableItems.length) {
      this.setState({
        viewableItemIndices: viewableItems.map(item => item.index)
      });
      console.log("onviewItem changed", this.state.viewableItemIndices);
    }
  };
  viewabilityConfig = {
    minimumViewTime: 1,
    viewAreaCoveragePercentThreshold: 0
  };
  render() {
    const { width } = Dimensions.get("window");
    return (
      // <FlatList
      //   data={this.state.data}
      //   renderItem={({ item, index }) => {
      //     console.log(this.state.viewableItemIndices);
      //     if (this.state.viewableItemIndices.indexOf(index) < 0)
      //       return <View style={{ height: width }} />;
      //     else return <Post uri={item.uri} />;
      //   }}
      //   keyExtractor={(item, index) => `data-${item.id}`}
      //   viewabilityConfig={this.viewabilityConfig}
      //   onViewableItemsChanged={this.onViewableItemsChanged.bind(this)}
      // />
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
