import { createContext, Dispatch, SetStateAction, RefObject } from "react";
import PagerView from "react-native-pager-view";

interface TabContextProps {
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
  pagerRef: RefObject<PagerView>;
}

export const TabContext = createContext<TabContextProps>({
  tab: 1,
  setTab: () => {},
  pagerRef: { current: null } as RefObject<PagerView>,
});
