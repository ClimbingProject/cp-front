import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from "react-native-elements";
import { observer } from "mobx-react";

@observer
export default class SignUp extends React.Component {
  componentDidMount() {
    this.props.signUpStore.setUserId("1112");
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Email</FormLabel>
        <FormInput
          email-address
          onChangeText={text => this.props.signUpStore.setEmail(text)}
          value={this.props.signUpStore.email}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          secureTextEntry
          onChangeText={text => this.props.signUpStore.setPassword(text)}
          value={this.props.signUpStore.password}
        />
        <Button
          style={{ marginTop: 15 }}
          title="Submit"
          onPress={() => this.props.signUpStore.newUser()}
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
