import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from "react-native-elements";
import { observer } from "mobx-react";
import SignUpStore from "../Store/SignUp";

const signUpStore = new SignUpStore();
@observer
export default class SignUp extends React.Component {
  componentDidMount() {
    signUpStore.setUserId("1112");
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>User Id</FormLabel>
        <FormInput
          onChangeText={text => signUpStore.setUserId(text)}
          value={signUpStore.userId}
        />
        <FormLabel>Email</FormLabel>
        <FormInput
          email-address
          onChangeText={text => signUpStore.setEmail(text)}
          value={signUpStore.email}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          secureTextEntry
          onChangeText={text => signUpStore.setPassword(text)}
          value={signUpStore.password}
        />
        <Button
          style={{ marginTop: 15 }}
          title="Submit"
          onPress={() => signUpStore.newUser()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300
  }
});
