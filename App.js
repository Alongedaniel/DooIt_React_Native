import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import Header from './components/header';
import AddTodos from './components/addTodo';
import TodoList from './components/todoList';
import styles from './styles/styles';


export default function App() {

  const [textInput, setTextInput] = useState('')

  const [todos, setTodos] = useState([
    {todo: 'Buy Groceries', id: 1},
    {todo: 'Buy Books', id: 2},
    {todo: 'Buy Gadgets', id: 3}
  ])

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodos
            textInput={textInput}
            setTextInput={setTextInput}
            setTodos={setTodos}
            todos={todos}
          />
          <TodoList todos={todos} setTodos={setTodos} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

