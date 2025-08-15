import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
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