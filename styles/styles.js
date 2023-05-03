import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  topBar: {
    width: "100%",
    //   backgroundColor: "#1a1a1a",
    flexDirection: 'row',
    alignItems: "center",
    // justifyContent: "space-between",
    height: 100,
      paddingTop: 38,
    paddingHorizontal: 10
  },
    logoText: {
      flex: 1,
    fontSize: 35,
    fontWeight: 900,
      color: "#1a1a1a",
    marginLeft: 10
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
    backgroundColor: "#1a1a1a",
  },
  todo: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#1a1a1a",
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
