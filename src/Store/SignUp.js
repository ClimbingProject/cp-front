import { observable, action } from "mobx";
import axios from "axios";

export default class SignUpStore {
  @observable userId = "";
  @observable email = "";
  @observable password = "";

  @action.bound
  setUserId(text) {
    this.userId = text;
  }
  @action.bound
  setEmail(text) {
    this.email = text;
  }
  @action.bound
  setPassword(text) {
    this.password = text;
  }
  @action.bound
  newUser() {
    console.log(this.userId, this.email, this.password);
    axios
      .post(`http://0.0.0.0:3001/signup`, {
        email: this.email,
        password: this.password
      })
      .then(response => {
        console.log("sucess");
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
}
