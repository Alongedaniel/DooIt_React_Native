import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  topBar: {
    width: "100%",
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    paddingTop: 38,
  },
  logoText: {
    fontSize: 35,
    fontWeight: 900,
    color: "white",
  },
  textArea: {
    marginVertical: 40,
  },
  textInput: {
    backgroundColor: "#f0f0f0",
    width: 300,
    height: 50,
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
  },
  add: {
    paddingTop: 13,
    paddingHorizontal: 16,
    paddingBottom: 13,
    borderRadius: 10,
    backgroundColor: "coral",
  },
  todo: {
    margin: 10,
    padding: 10,
    backgroundColor: "coral",
    borderRadius: 5,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
  },
  todoText: {
    color: "#f0f0f0",
    fontSize: 18,
    marginLeft: 10,
  },
  todos: {
    alignItems: "center",
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default styles;
