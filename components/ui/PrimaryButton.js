import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  // function pressHandler() {
  //   onPress();
  // }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        // using pressed for iOS, passing an array of style objects so all of them are applied
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress} //onPress function here is recieved in props.
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
