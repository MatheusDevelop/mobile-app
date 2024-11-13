import { Link, Tabs } from "expo-router";
import { View } from "react-native";

import CameraIcon from "@/components/icons/CameraIcon";
import HistoryIcon from "@/components/icons/HistoryIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import SearchIcon from "@/components/icons/SearchIcon";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#3D65B0",
          tabBarInactiveTintColor: "#858585",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            tabBarStyle: {
              borderTopWidth: 0,
              paddingTop: 10,
              backgroundColor: "#F8F8F8",
            },
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color }) => (
              <View style={{ alignItems: "center" }}>
                <HomeIcon color={color} />
                {focused && (
                  <View
                    style={{
                      position: "absolute",
                      bottom: -10,
                      width: 8,
                      height: 2,
                      backgroundColor: "#3D65B0",
                      borderRadius: 1,
                    }}
                  />
                )}
              </View>
            ),
            headerRight: () => <Link href="/modal" asChild></Link>,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarShowLabel: false,
            title: "Buscar",
            tabBarStyle: {
              backgroundColor: "transparent",
              borderTopWidth: 0,
              paddingTop: 10,
            },
            tabBarIcon: ({ focused, color }) => (
              <View style={{ alignItems: "center" }}>
                <SearchIcon color={color} />
                {focused && (
                  <View
                    style={{
                      position: "absolute",
                      bottom: -10,
                      width: 8,
                      height: 2,
                      backgroundColor: "#3D65B0",
                      borderRadius: 1,
                    }}
                  />
                )}
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="camera"
          options={{
            tabBarShowLabel: false,
            title: "Analise com IA",
            tabBarStyle: {
              backgroundColor: "transparent",
              borderTopWidth: 0,
              paddingTop: 10,
            },
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  backgroundColor: "#3D65B0",
                  width: 48,
                  height: 48,
                  borderRadius: 11,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 40,
                  shadowColor: "#858585",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,
                  elevation: 8,
                }}
              >
                <CameraIcon color="#fff" />
                {focused && (
                  <View
                    style={{
                      position: "absolute",
                      bottom: 8,
                      width: 8,
                      height: 2,
                      backgroundColor: "#fff",
                      borderRadius: 1,
                    }}
                  />
                )}
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "transparent",
              borderTopWidth: 0,
              paddingTop: 10,

            },
            tabBarIcon: ({ color, focused }) => (
              <View style={{ alignItems: "center" }}>
                <HistoryIcon color={color} />
                {focused && (
                  <View
                    style={{
                      position: "absolute",
                      bottom: -10,
                      width: 8,
                      height: 2,
                      backgroundColor: "#3D65B0",
                      borderRadius: 1,
                    }}
                  />
                )}
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="person"
          options={{
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "transparent",
              borderTopWidth: 0,
              paddingTop: 10,

            },
            tabBarIcon: ({ color, focused }) => (
              <View style={{ alignItems: "center" }}>
                <PersonIcon color={color} />
                {focused && (
                  <View
                    style={{
                      position: "absolute",
                      bottom: -10,
                      width: 8,
                      height: 2,
                      backgroundColor: "#3D65B0",
                      borderRadius: 1,
                    }}
                  />
                )}
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
}
