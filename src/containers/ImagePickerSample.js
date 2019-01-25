import { View, Text, Button, Image } from "react-native";
import { ImagePicker, Permissions, Camera, Video } from "expo";
import React from "react";
import { Actions } from "react-native-router-flux";

class ImagePickerSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      hasCameraRollPermission: null, // カメラ機能の許可
      image: null // 背面カメラを利用
    };
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      mediaTypes: ImagePicker.MediaTypeOptions.Videos
    });

    console.log(result);

    if (!result.cancelled) {
      // Actions.CreatePostScreen({ videoUri: result.uri });
      this.setState({ image: result.uri });
    } else {
      this.setState({
        image: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
      });
      // Actions.home();
    }
  };
  static onEnter() {
    Actions.refresh();
  }

  // カメラロールから選択

  // 初期起動時、カメラの使用の権限を取得する。
  async componentWillMount() {
    const { statusRoll } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    this.setState({
      hasCameraRollPermission: statusRoll === "granted"
    });
  }

  render() {
    let { image, hasCameraRollPermission } = this.state;
    console.log(image, hasCameraRollPermission);
    if (!image) this._pickImage();
    return (
      <View style={styles.containerStyle}>
        <Button onPress={() => this._pickImage()} title="change video" />

        {image && (
          // <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />
          <Video
            source={{
              uri: image
            }}
            resizeMode="cover"
            style={{ height: 300, width: 300 }}
          />
        )}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    marginHorizontal: 15
  }
};

export default ImagePickerSample;
