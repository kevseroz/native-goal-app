import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  const addGoalHandler = (inputText) => {
    setGoals((currentGoals) => [...currentGoals, inputText]);
    setVisibleModal(false);
  };

  const setOpenModal = () => {
    setVisibleModal(true);
  };
  const setCloseModal = () => {
    setVisibleModal(false);
  };

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) =>
      currentGoals.filter((goal, index) => index !== id)
    );
  };
  return (
    <View style={styles.appContainer}>
      <Button title={"Add New Goal"} color={"#a286c7"} onPress={setOpenModal} />
      {visibleModal && (
        <GoalInput
          visible={visibleModal}
          addGoalHandler={addGoalHandler}
          onCancel={setCloseModal}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(goal) => (
            <GoalItem
              item={goal?.item}
              onDeleteItem={deleteGoalHandler}
              id={goal?.index}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
