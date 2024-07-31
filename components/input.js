import Constants from "expo-constants";
import { TextInput, StyleSheet,TouchableOpacity, View } from "react-native";

export default function input() {
  if (Constants.platform.ios) {
    return (
      <TextInput style={styles.input} placeholder={"Write it here"}>
        <TouchableOpacity>
          <View>

          </View>
        </TouchableOpacity>
      </TextInput>
    );
  }
}

const styles = StyleSheet.create({});
