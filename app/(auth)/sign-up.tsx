import React from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from "react-native";
import {style} from "dom-helpers";
import {Link} from "expo-router";
import {Theme} from "pretty-format";

export default function SignUp() {

    function nickInputHandler(enteredText) {
        console.log(enteredText);
    }
    function emailInputHandler(enteredText) {
        console.log(enteredText);
    }
    function passInputHandler(enteredText) {
        console.log(enteredText);
    }
    function passConfInputHandler(enteredText) {
        console.log(enteredText);
    }


    return (
        <View style={{height: '100%', backgroundColor: "white"}}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Zarejestruj Się</Text>
            </View>
            <View>
                <TextInput style={styles.textInput} placeholder={"Nick"} onChangeText={nickInputHandler}></TextInput>
                <TextInput style={styles.textInput} placeholder={"Email"} onChangeText={emailInputHandler}></TextInput>
                <TextInput style={styles.textInput} placeholder={"Hasło"}  onChangeText={passInputHandler}></TextInput>
                <TextInput style={styles.textInput} placeholder={"Powtórz Hasło"}  onChangeText={passConfInputHandler}></TextInput>
            </View>
            <Pressable style={styles.button}><Text style={{fontSize: 25, fontWeight: "500"}}>ZAREJESTRUJ</Text></Pressable>
            <Text style={{textAlign: "center"}}>Masz już konto? <Link href={"/(auth)/sign-in"} style={{color: "green"}}>Zaloguj się!</Link></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        marginBottom: 20,
        padding: 20,
    },
    headerText: {
        fontSize: 40,
        fontWeight: "700",
        textAlign: "center",
    },
    textInput: {
        borderColor: "gray",
        borderWidth: 1,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 30,
        borderRadius: 120,
    },
    button: {
        backgroundColor: "green",
        padding: 15,
        marginHorizontal: 30,
        marginVertical: 10,
        borderRadius: 120,
        alignItems: "center",
    }
})