import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import styles from "../Login/login"
import avatar from "../../assets/avatar.png"

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={avatar}
        style={styles.logo}
      />
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Name..."
          placeholderTextColor="#003f5c" />
      </View>
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
        navigation.navigate('Login')
      }>
        <Text style={styles.loginText}>SignUp</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>Already have an account?</Text>
      <TouchableOpacity style={styles.signupBtn} onPress={() =>
        navigation.navigate('Login')
      }>
        <Text style={styles.signupText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
