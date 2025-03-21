import { Stack } from "expo-router";
import TopBar from "@/components/tab-layout-components/top-bar";
import BottomBar from "@/components/tab-layout-components/bottom-bar";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useRef,
  useState,
} from "react";
import PagerView from "react-native-pager-view";

interface TabContextProps {
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
  pagerRef: React.RefObject<PagerView>;
}

export const TabContext = createContext<TabContextProps>({
  tab: 1,
  setTab: () => {},
  pagerRef: { current: null } as React.RefObject<PagerView>,
});

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
