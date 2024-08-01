import Constants from "expo-constants";
import { useState } from "react";
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

export default function input() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])
  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null)
  };
  if (Constants.platform.ios) {
    return (
      <View style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Write it here"}
          onChangeText={(task) => setTask(task)}
          value={task}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  input: {
    paddingVertical: 15,
    width: "80%",
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: "1",
    height: 50,
  },
  addWrapper: {
    backgroundColor: "#FFF",
    width: 60,
    height: 50,
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    justifyContent: "center",
    alignContent: "items",
  },
  addText: {
    backgroundColor: "#FF0000",
  },
  writeTaskWrapper: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 1,
  },
});
