import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TextInput,
  ImageBackground,
  FlatList,
  ImageComponent,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import hashtagData from "../data/hashtagData";
import communityData from "../data/communityData";
import Subheadings from "../components/subheadings";
import TopNomads from "../components/topNomads";

const renderHashtags = ({
  item,
}: {
  item: { uri: string; tagName: string; tagNumber: number };
}) => {
  return (
    <ImageBackground
      imageStyle={{ borderRadius: 10 }}
      style={{
        height: 175,
        width: 175,
        marginRight: 10,
        padding: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        alignContent: "flex-end",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
      source={{ uri: item.uri }}
    >
      <Text style={{ color: "white", fontSize: 17 }}>#{item.tagName}</Text>
      <Text style={{ color: "white", fontSize: 15 }}>{item.tagNumber}m</Text>
    </ImageBackground>
  );
};

const renderCommunity = ({
  item,
}: {
  item: { uri: string; tagline: string; posts: number; countryName: string };
}) => {
  return (
    <ImageBackground
      source={{ uri: item.uri }} // Replace with your image URL
      style={styles.imageBackground}
      imageStyle={{ borderRadius: 10 }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
          height: "100%",
        }}
      >
        <Text style={styles.postDayText}>{item.posts}posts/day</Text>
        <Text style={styles.centerText}>
          <Text style={styles.centerTextSmall}>{item.tagline}</Text>
          {"\n"}
          <Text style={styles.centerTextLarge}>{item.countryName}</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const Search = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ alignItems: "flex-start" }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
              color: "cornflowerblue",
            }}
          >
            Discover the world
          </Text>
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            keyboardType="default"
          />
          <ImageBackground
            imageStyle={{
              borderRadius: 10,
            }}
            style={{
              marginVertical: 25,
              height: 200,
              width: "100%",
              justifyContent: "flex-end",
              alignContent: "flex-end",
              alignItems: "flex-end",
              flexDirection: "column",
              overflow: "hidden",
            }}
            source={{ uri: "https://picsum.photos/750" }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
                flex: 1,
                position: "absolute",
                bottom: 10,
                left: 10,
              }}
            >
              #Top search of the day
            </Text>
          </ImageBackground>
          <Subheadings title="Trending hashtags" />
          <FlatList
            horizontal
            data={hashtagData}
            renderItem={renderHashtags}
            keyExtractor={(item) => item.uri}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 10 }}
          />
          <Subheadings title="Top community" />
          <FlatList
            horizontal
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 10 }}
            data={communityData}
            renderItem={renderCommunity}
          />
          <Subheadings title="Top Nomads" />
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              justifyContent: "space-around",
              alignContent: "space-between",
              flexWrap: "wrap",
              //padding: 10,
            }}
          >
            <TopNomads
              uri="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
              userName="playParker"
              followers={341}
            />

            <TopNomads
              uri="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww"
              userName="Rayjosh"
              followers={235}
            />

            <TopNomads
              uri="https://t3.ftcdn.net/jpg/06/78/09/78/360_F_678097876_9kJnFlRYGAeibsVxspqtCL9UR8giLAvF.jpg"
              followers={440}
              userName="Terminator"
            />

            <TopNomads
              uri="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
              followers={317}
              userName="Sam"
            />

            <TopNomads
              uri="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
              followers={159}
              userName="DrJames"
            />

            <TopNomads
              uri="https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
              followers={404}
              userName="SnowTimer"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchInput: {
    borderRadius: 10,
    borderWidth: 1,
    width: "100%",
    height: 50,
    padding: 10,
  },

  //Community slider styles
  imageBackground: {
    height: 175,
    width: 175,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignContent: "flex-end",
    alignItems: "flex-end",
    overflow: "hidden",
  },
  image: {
    borderRadius: 10,
  },
  postDayText: {
    color: "white",
    fontSize: 12,
    alignSelf: "flex-end",
  },
  centerText: {
    position: "absolute",
    bottom: 0,
    left: 0,
    color: "white",
    fontSize: 18,
  },
  centerTextSmall: {
    fontSize: 18,
  },
  centerTextLarge: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

//export default PlacesCard;
