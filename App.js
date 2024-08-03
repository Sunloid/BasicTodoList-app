import { useState } from "react";
import Task from "./components/Task";
import {
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.item}>
          {taskItems.map((item, index) => {
            return <Task key={index} text={item} />;
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        style={styles.writeTaskWrapper}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <TouchableOpacity
          style={styles.addWrapper}
          onPress={() => handleAddTask()}
        >
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: 60,
    alignContent: "center",
    width: "100%",
  },
  input: {
    backgroundColor: "#FFF",
    width: "80%",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  addWrapper: {
    backgroundColor: "#FFF",
    width: 60,
    height: 50,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    justifyContent: "center",
    alignItems: "center",
  },
});
