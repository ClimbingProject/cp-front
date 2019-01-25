import React from "react";
import { StyleSheet, View, Dimensions, FlatList } from "react-native";
import { Video } from "expo";
import { Button, SearchBar } from "react-native-elements";
import { List, ListItem } from "react-native-elements";

const list = [
  {
    name: "Amy Farha",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  }
];

export default class SearchModal extends React.Component {
  renderRow({ item }) {
    return (
      <ListItem
        hideChevron
        title={item.name}
        // subtitle={item.subtitle}
        containerStyle={{
          backgroundColor: "rgba(0,0,0,0)",
          borderBottomColor: "transparent",
          borderTopColor: "transparent"
        }}
      />
    );
  }
  render() {
    const { width } = Dimensions.get("window");
    return (
      <View style={{ flex: 1, width: width }}>
        <SearchBar
          lightTheme
          round
          containerStyle={{
            backgroundColor: "rgba(0,0,0,0)",
            borderBottomColor: "transparent",
            borderTopColor: "transparent"
          }}
          inputStyle={{ backgroundColor: "#f2f2f2" }}
          icon={{ type: "font-awesome", name: "search" }}
          placeholder="Type project name..."
        />
        <List
          containerStyle={{ marginBottom: 10, borderTopColor: "transparent" }}
        >
          <FlatList
            data={list}
            renderItem={this.renderRow}
            keyExtractor={item => item.name}
          />
        </List>
      </View>
    );
  }
}
