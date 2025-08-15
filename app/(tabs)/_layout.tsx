import { Stack } from "expo-router";
import TopBar from "@/components/tab-layout-components/top-bar/top-bar";
import BottomBar from "@/components/tab-layout-components/bottom-bar/bottom-bar";
import { useRef, useState } from "react";
import PagerView from "react-native-pager-view";
import { TabContext } from "@/contexts/tab-context";

export default function Layout() {
  const [tab, setTab] = useState(1);
  const pagerRef = useRef<PagerView>(null);

  return (
    <TabContext.Provider value={{ tab, setTab, pagerRef }}>
      <TopBar />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <BottomBar />
    </TabContext.Provider>
  );
}
