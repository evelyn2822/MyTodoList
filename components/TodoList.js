import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Modal, Dimensions, ScrollView } from 'react-native';
import { useStore } from './store';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ToDoList = () => {
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [editItemText, setEditItemText] = useState('');

  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);
  const deleteTodo = useStore((state) => state.deleteTodo);
  const editTodo = useStore((state) => state.editTodo);

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      addTodo({
        id: Math.random().toString(),
        text: text.trim(),
      });
      setText('');
    }
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const handleEditTodo = () => {
    if (editItemText.trim() !== '') {
      editTodo(editItemId, editItemText);
      setModalVisible(false);
      setEditItemText('');
    }  
  };

  const openEditModal = (id, currentText) => {
    setEditItemId(id);
    setEditItemText(currentText);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.text}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Delete"
          onPress={() => handleDeleteTodo(item.id)}
          color="#135D66"
        />
        <View style={{ width: 10 }} />
        <Button
          title="Edit"
          onPress={() => openEditModal(item.id, item.text)}
          color="#135D66"
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handleAddTodo} color="#135D66" />
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
        contentContainerStyle={todos.length === 0 && styles.emptyListContainer}
        ListEmptyComponent={<Text style={styles.emptyListText}>No To-Do List Today</Text>}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setEditItemText('');
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              value={editItemText}
              onChangeText={setEditItemText}
            />
            <Button title="Save" onPress={handleEditTodo} color="#135D66" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    marginTop: 15,
    borderRadius: 5,
  },
  itemText: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    fontSize: 16,
    color: '#888',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
});

export default ToDoList;
