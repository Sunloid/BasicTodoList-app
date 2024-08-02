import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";
import { KeyboardAvoidingView } from "react-native";
import Input from "./components/input";
import Constants from "expo-constants";
import { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])
  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null)}
  function Yes() {
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
  
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.item}>
          <Task text={"task1"} />
          <Task text={"Task 2"} />
          <Task text={"Task 3"} />
          <Task text={"Task 4"} />
          <Task text={"Task 5"} />
        </View>
      </View>
      <KeyboardAvoidingView style={styles.writeTaskWrapper}>
        {
          Yes()
        }
        <View>
          <Text>HEllo world</Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    paddingTop: 80,
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    marginTop: 10,
  },
  writeTaskWrapper: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: 60,
    backgroundColor:"#FF0000"
  },
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
})