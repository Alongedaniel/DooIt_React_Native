import { View, Button, TextInput, Alert } from "react-native";
import styles from "../styles/styles";

export default function AddTodos({ setTextInput, textInput, setTodos, todos }) {
  const handleChange = (val) => {
    setTextInput(val);
  };

  const handleAddTodos = () => {
    textInput.length > 3
      ? setTodos([{ todo: textInput, id: todos.length + 1 }, ...todos])
      : Alert.alert("Oops", "task must be more than 4 characters nigga", [
          { text: "Understood" },
        ]);
  };

  return (
    <View style={styles.textArea}>
      <TextInput
        value={textInput}
        onChangeText={handleChange}
        placeholder="e.g Buy Groceries"
        style={styles.textInput}
      />
      <Button title="add Todo" onPress={handleAddTodos} color="coral" />
    </View>
  );
}
