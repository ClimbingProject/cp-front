import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from "react-native-elements";
import { observer, inject } from "mobx-react";
// import this.props.SignUpStore from "../store/SignUp";
import { Actions } from "react-native-router-flux";

// const this.props.signUpStore = new this.props.SignUpStore();
// @inject("this.props.signUpStore")
@observer
export default class SignUp extends React.Component {
  componentDidMount() {
    // this.props.signUpStore.setUserId("1112");
  }

  _signUp = () => {
    // this.props.signUpStore.newUser();
    // if (this.user)
    Actions.home();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, textAlign: "center", margin: 10 }}>
          Climbing Project
        </Text>
        <FormLabel>User Id</FormLabel>
        <FormInput
          onChangeText={text => this.props.signUpStore.setUserId(text)}
          value={this.props.signUpStore.userId}
        />
        <FormLabel>Email</FormLabel>
        <FormInput
          email-address
          onChangeText={text => signUpStore.setEmail(text)}
          value={this.props.signUpStore.email}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          secureTextEntry
          onChangeText={text => this.props.signUpStore.setPassword(text)}
          value={this.props.signUpStore.password}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          title="Sign Up"
          onPress={() => this._signUp()}
        />
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>if you already have account:</Text>
          <Button
            buttonStyle={{ padding: 0 }}
            backgroundColor="rgba(255, 255, 255, 0)"
            color="#2089dc"
            title="login"
            onPress={() => {
              Actions.login();
            }}
          />
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  buttonStyle: {
    marginTop: 15,
    borderRadius: 6,
    backgroundColor: "#2089dc"
  }
});
