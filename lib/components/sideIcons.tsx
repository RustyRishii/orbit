import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const SideIcons = ({ name }: { name: string }) => {
  return (
    <Icon
      style={{ paddingVertical: 10 }}
      name={name}
      size={35}
      color={"white"}
    />
  );
};

export default SideIcons;

const styles = StyleSheet.create({});
