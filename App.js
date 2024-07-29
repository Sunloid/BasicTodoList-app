import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>Today's Task</Text>
            <View style={styles.items}>
                <Task text={'Task 1'}/>
                <Task text={'Task 2'}/>
                <Task text={'Task 3'}/>
                <Task text={'Task 4'}/>
                <Task text={'Task 5'}/>
            </View>
        </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingTop:80,
    paddingLeft:20,
  },
  tasksWrapper: {
  },
  sectionTitle: {
     fontSize: 24,
     fontWeight: 'bold',
     marginBottom:20, 
  }
});
