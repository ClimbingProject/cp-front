import React from "react";
import { Scene, Router, Tabs, Stack } from "react-native-router-flux";
import ImagePickerSample from "./containers/ImagePickerSample";
import SignUpScreen from "./containers/SignUp";
import HomeScreen from "./containers/HomeScreen";
import LoginScreen from "./containers/Login";
import SignUpStore from "./store/SignUp";
import CreatePostScreen from "./containers/CreatePostScreen";

const signUpStore = new SignUpStore();

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ flex: 1, backgroundColor: "#fff" }}>
      <Scene>
        <Scene
          key="Image"
          component={CreatePostScreen}
          title="Post"
          initial={true}
        />
        {/* <Scene
          key="signup"
          component={SignUpScreen}
          signUpStore={signUpStore}
          title="signup"
          // initial={true}
        /> */}
        <Scene
          key="login"
          signUpStore={signUpStore}
          component={LoginScreen}
          title="login"
        />
        <Scene hideNavBar>
          <Tabs
            key="main"
            swipeEnabled={true} // スワイプでタブを移せる
            animationEnabled={false} // スワイプ時にアニメーションを付ける。個人的にはあまり好きでないのでfalseにしてオフっている
          >
            {/* <Scene
              key="Image"
              component={CreatePostScreen}
              title="Post"
              initial={true}
            /> */}
            <Scene
              key="home"
              component={HomeScreen}
              title="Home"
              tabBarLabel="Home"
            />
          </Tabs>
        </Scene>
      </Scene>
    </Router>
  );
};
export default RouterComponent;
