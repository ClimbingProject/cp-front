import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { Video, Icon } from "expo";

export default class Post extends React.Component {
  render() {
    const { width } = Dimensions.get("window");
    console.log(this.props);
    return (
      <View style={styles.post}>
        <View style={styles.header}>
          <Image
            style={styles.icon}
            source={require("../../../assets/userIcon.png")}
          />
          <Text style={styles.userName}> Ryoji Park </Text>
          <Text style={styles.time}> 1hr ago</Text>
        </View>
        <Video
          source={{
            uri: this.props.uri
          }}
          shouldPlay
          resizeMode="cover"
          style={styles.video}
        />
        <Text style={styles.projectName}> Nature Nazi Arete</Text>
        <Text style={styles.place}> Castle Rock State Park</Text>
        <View style={styles.header}>
          <Text style={styles.likes}> 800 likes</Text>
          <Text style={styles.info}> More info</Text>
        </View>
      </View>
    );
  }
}
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  post: {
    backgroundColor: "#fff",
    width: width
  },
  header: {
    marginLeft: 6,
    marginRight: 6,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 2
  },
  userName: {
    lineHeight: 60
  },
  time: {
    position: "absolute",
    right: 0,
    fontSize: 12
  },
  video: {
    alignItems: "center",
    height: width,
    borderRadius: 8
  },
  projectName: {
    fontSize: 24,
    marginLeft: 6,
    marginRight: 6
  },
  place: {
    marginLeft: 6,
    marginRight: 6
  },
  info: {
    position: "absolute",
    right: 0
  }
});
