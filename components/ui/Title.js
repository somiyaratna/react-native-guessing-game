import { StyleSheet, Text } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    // fontFamily: "open-sans-bold",
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary700,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primary700,
    padding: 12,
  },
});
