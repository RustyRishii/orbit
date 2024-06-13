import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import Icon from "react-native-vector-icons/Ionicons";
import Search from "./screens/search";

const Tabs = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          position: "relative",
          fontSize: 13,
        },
        tabBarActiveBackgroundColor: "white",
        tabBarInactiveBackgroundColor: "white",
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              size={20}
              color="black"
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "search" : "search-outline"}
              size={20}
              color="black"
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
//202427
