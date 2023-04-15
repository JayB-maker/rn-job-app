import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { COLORS, icons, images, SIZES } from "../constants";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerTitle: "",
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn image={icons.menu} dimension="60%" />,
          headerRight: () => <ScreenHeaderBtn image={images.profile} dimension="100%" />, 
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
