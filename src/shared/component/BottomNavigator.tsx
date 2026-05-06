
import * as React from "react";
import { Text, Button, FlatList } from "react-native";

const styles = {
  bottomNavigator: {
    flex: 1,
  },
};

const DATA = [
  {key:"Home", value: "Home"},
  {key:"Cart", value: "Cart"},
  {key:"Profile", value: "Profile"},
  {key:"Settings", value: "Settings"},
];

function BottomNavigator() {
  return (
    <FlatList
      style={styles.bottomNavigator}
      data={DATA}
      renderItem={({ item }) => <Button title={item.value} />}
      keyExtractor={(item, index) => item.key}
    />
  );
}

export default BottomNavigator;