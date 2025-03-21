import { StyleSheet } from "react-native";

const tabsIndexStyles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 34,
    fontWeight: "bold",
  },
  container: { flex: 1 },
  content: { flex: 1 },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#222",
  },
  tab: { padding: 10 },
  activeTab: { borderBottomWidth: 2, borderBottomColor: "white" },
  tabText: { color: "white" },
});

const topBarStyles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  icon: {
    padding: 10,
  },
  spacer: {
    flex: 1,
  },
});

const bottomBarStyles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  tab: { padding: 10 },
  activeTab: { borderBottomWidth: 2, borderBottomColor: "black" },
});

const leftDrawerStyles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  icon: {
    padding: 10,
  },
  spacer: {
    flex: 1,
  },
});

export { tabsIndexStyles, topBarStyles, bottomBarStyles, leftDrawerStyles };
