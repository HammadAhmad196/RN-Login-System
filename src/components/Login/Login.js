import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import styles from "./login"
import avatar from "../../assets/avatar.png"

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={avatar}
        style={styles.logo}
      />
      {/* <Text style={styles.logo}>HeyAPP</Text> */}
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c" />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c" />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() =>
        navigation.navigate('Home')
      }>
        <Text style={styles.loginText}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>Dont have an account?</Text>
      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signupText} onPress={() =>
          navigation.navigate('Signup')
        }>Sign UP</Text>
      </TouchableOpacity>
    </View>
  );
}
