import { FlatList, View, Text } from "react-native";
import styles from "../styles/styles";
import { MaterialIcons } from "@expo/vector-icons/";

export default function TodoList({ setTodos, todos }) {
  const handleRemoveTodos = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  return (
    <View style={styles.todos}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.todo}>
            <MaterialIcons name="delete" size={18} color="#fafafa" />
            <Text
              style={styles.todoText}
              onPress={() => handleRemoveTodos(item.id)}
            >
              {item.todo}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
