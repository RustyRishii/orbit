import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const TopNomads = ({
  uri,
  userName,
  followers,
}: {
  uri: string;
  userName: string;
  followers: number;
}) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        marginVertical: 10,
      }}
    >
      <Image
        height={100}
        width={100}
        style={{ borderRadius: 75 }}
        resizeMode="cover"
        source={{
          uri: uri,
        }}
      />
      <Text
        style={{ fontSize: 15, color: "cornflowerblue", textAlign: "center" }}
      >
        @{userName} {"\n"}
        {followers}K Followers
      </Text>
    </View>
  );
};

export default TopNomads;

const styles = StyleSheet.create({});
