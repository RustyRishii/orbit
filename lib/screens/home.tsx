import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  StatusBar,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import SideIcons from "../components/sideIcons";
import Icons from "react-native-vector-icons/FontAwesome";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const { height: viewportHeight } = Dimensions.get("window");

const Home = () => {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();

  const DATA = [
    { uri: `https://picsum.photos/200`, alt: "This is image 200" },
    { uri: `https://picsum.photos/201`, alt: "This is image 201" },
    { uri: `https://picsum.photos/202`, alt: "This is image 202" },
    { uri: `https://picsum.photos/203`, alt: "This is image 203" },
    { uri: `https://picsum.photos/204`, alt: "This is image 204" },
    { uri: `https://picsum.photos/205`, alt: "This is image 205" },
    { uri: `https://picsum.photos/206`, alt: "This is image 206" },
    { uri: `https://picsum.photos/207`, alt: "This is image 207" },
    { uri: `https://picsum.photos/208`, alt: "This is image 208" },
    { uri: `https://picsum.photos/209`, alt: "This is image 209" },
    { uri: `https://picsum.photos/2010`, alt: "This is image 2010" },
    { uri: `https://picsum.photos/2011`, alt: "This is image 2011" },
  ];

  const HomeImages = ({ title }: { title: string }) => (
    <View style={{ height: viewportHeight - insets.top - tabBarHeight }}>
      <ImageBackground
        resizeMode="cover"
        style={styles.imageBackground}
        source={{ uri: title }}
      >
        <View
          style={{
            //justifyContent: "center",
            alignItems: "center",
            flex: 1,
            marginBottom: 400,
            backgroundColor: "transparent",
          }}
        >
          <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
            For you
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              padding: 10,
              position: "relative",
              width: 365,
              justifyContent: "flex-end",
            }}
          >
            <Text style={{ fontSize: 15, color: "white" }}>
              {`Caption\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 10,
              borderRadius: 50,
              height: 450,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SideIcons name="person-add-outline" />
            <SideIcons name="chatbubbles-outline" />
            <SideIcons name="heart-outline" />
            <SideIcons name="arrow-redo-outline" />
            <SideIcons name="paper-plane-outline" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="black" />
      <FlatList
        scrollEnabled={true}
        pagingEnabled={true}
        data={DATA}
        renderItem={({ item }) => <HomeImages title={item.uri} />}
        keyExtractor={(item) => item.alt}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  imageBackground: {
    justifyContent: "flex-end",
    width: "100%",
    flex: 1,
    overflow: "hidden",
  },
});

export default Home;
