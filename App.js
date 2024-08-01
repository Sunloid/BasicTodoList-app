import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";
import { KeyboardAvoidingView } from "react-native";
import Input from "./components/input";

export default function App() {
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
        <Input></Input>
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
    zIndex: 1,
    bottom: 60,
  },
});
