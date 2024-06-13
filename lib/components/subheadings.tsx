import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subheadings = ({ title }: { title: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "400",
          color: "cornflowerblue",
          flex: 1,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: "cornflowerblue",
        }}
      >
        See all
      </Text>
    </View>
  );
};

export default Subheadings;

const styles = StyleSheet.create({});
