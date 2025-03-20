import React from "react";
import Gradient from "@/assets/Icons/Gradient";
import DocumentData from "@/assets/Icons/DocumentData";
import LightBulbPerson from "@/assets/Icons/LightbulbPerson";
import Rocket from "@/assets/Icons/Rocket";
import Logo from "@/assets/Icons/Logo";
import { Box } from "@/components/ui/box";
import { ScrollView, View } from "react-native";
import { Text } from "@/components/ui/text";

import { Link } from "expo-router";

export default function OnBoard() {
  return (
    <ScrollView
      contentContainerStyle={{ backgroundColor: "red" }}
      showsVerticalScrollIndicator={false}
      scrollToOverflowEnabled={true}
    >
      <View
        className={
          " bg-amber-200 justify-center items-center w-full min-h-[100.5vh]"
        }
      >
        <Text className={"bg-amber-700 p-10 text-4xl "}>On board works </Text>
        <View className={"h-10 w-1/2 bg-amber-500 m-5"}>
          <Link href={"/(auth)/sign-in"} className={"text-center"}>
            Zaloguj sie - kliknij mnie
          </Link>
        </View>
        <Link
          href={"/(auth)/sign-up"}
          className={"h-10 w-1/2 bg-amber-500 text-center m-5 "}
        >
          Stworz konto - kliknij mnie
        </Link>
        <Link
          href={"/(tabs)"}
          className={"h-10 w-1/2 bg-amber-500 text-center m-5 "}
        >
          Tabs - kliknij mnie
        </Link>
      </View>
    </ScrollView>
  );
}
