import { Text, View, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View key={props.index} style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#acd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.textColor}>{props?.item}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#a286c7",
  },
  textColor: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    borderRadius: 6,
    backgroundColor: "#5f4088",
  },
});
