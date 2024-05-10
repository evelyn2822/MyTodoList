import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import ToDoList from './components/TodoList';

const windowWidth = Dimensions.get('window').width;

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.headerBox}>
          <Text style={styles.header}>My ToDoList</Text>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileInfo}>
            <Image source={require('./assets/belin.png')} style={styles.idPicture} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>Name: Secuya, Evelyn Mag-aso</Text>
              <Text style={styles.id}>School ID: 20211476</Text>
              <Text style={styles.section}>Section Code: IT35 B</Text>
              <Text style={styles.sd}>Course Description: Application Development</Text>
              <Text style={styles.cm}>Course Name: BSIT</Text>
              <Text style={styles.ay}>Academic Year: 2024-2025</Text>
            </View>
          </View>
        </View>
        <ToDoList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E3FEF7",
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white",
  },
  headerBox: {
    backgroundColor: '#135D66',
    padding: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  profileContainer: {
    marginBottom: 20,
  },
  idPicture: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginRight: 20,
    marginBottom: 50,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "600",
  },
  id: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "600",
  },
  section: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "600",
  },
  sd: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "600",
  },
  cm: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "600",
  },
  ay: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "600",
  },
});

export default App;
