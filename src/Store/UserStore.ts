import { observable, action } from "mobx";
import axios from "axios";

interface User {
  userId: String;
  email: String;
  password: String;
}
export default class UserStore {
  @observable user: User = {
    userId: "",
    email: "",
    password: ""
  };

  @action.bound
  setUser(user: User) {
    this.user = user;
  }

  @action.bound
  newUser(userId: String, email: String, password: String) {
    axios
      .post(`http://0.0.0.0:3001/signup`, {
        email: email,
        password: password,
        userId: userId
      })
      .then(response => {
        this.user = {
          userId: response.data.userId,
          email: response.data.email,
          password: response.data.password
        };
        console.log("sucess");
      })
      .catch(e => {
        console.log(e);
      });
  }
}
