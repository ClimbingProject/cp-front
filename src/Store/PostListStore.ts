import { observable, action } from "mobx";
import axios from "axios";

interface Post {
  imageUri: String;
  userId: String;
}

export default class PostListStore {
  @observable postList: Post[] = [];
  viewableItemIndices: number = 0;

  // @action.bound
  // newUser(userId: String, email: String, password: String) {
  //   axios
  //     .post(`http://0.0.0.0:3001/signup`, {
  //       email: email,
  //       password: password
  //     })
  //     .then(response => {
  //       this.user = {
  //         userId: response.data.userId,
  //         email: response.data.email,
  //         password: response.data.password
  //       };
  //       console.log("sucess");
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }
}
