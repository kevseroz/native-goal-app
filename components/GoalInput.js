import { Button, TextInput, View, StyleSheet, Modal } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [inputText, setInputText] = useState("");

  const goalInputHandler = (e) => {
    setInputText(e);
  };
  const addGoalHandler = () => {
    props.addGoalHandler(inputText);
    setInputText("");
  };

  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={"Your Course Goal!"}
          onChangeText={goalInputHandler}
          value={inputText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color={"#ffffff"}
              title={"Add Goal"}
              onPress={addGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              color={"#ffffff"}
              title={"Cancel"}
              onPress={props.onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b7a0d5",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
    width: "100%",
    padding: 15,
    marginRight: 8,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
