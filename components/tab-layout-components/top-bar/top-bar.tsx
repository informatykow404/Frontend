import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import LeftDrawer from "../left-drawer/left-drawer";
import { styles } from "./styles"

export default function TopBar() {
  return (
    <View style={styles.topBar}>
      <LeftDrawer />

      {/* Spacer to push the icons to the right */}
      <View style={styles.spacer} />

      {/* Search Icon */}
      <Ionicons name="search" size={30} color="black" style={styles.icon} />

      {/* Profile Icon */}
      <Ionicons name="person" size={30} color="black" style={styles.icon} />
    </View>
  );
}
