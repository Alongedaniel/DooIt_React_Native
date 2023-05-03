import { View, Text } from "react-native";
import styles from "../styles/styles";
import {Octicons} from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.topBar}>
      <Octicons name="tasklist" size={25} color="#1a1a1a" />
      <Text style={styles.logoText}>DooIt</Text>
      <Octicons name="search" size={25} color="#1a1a1a" />
    </View>
  );
}
