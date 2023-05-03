import { View, Text } from "react-native";
import styles from "../styles/styles";

export default function Header() {
  return (
    <View style={styles.topBar}>
      <Text style={styles.logoText}>DooIt</Text>
    </View>
  );
}
