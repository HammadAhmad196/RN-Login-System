import React from 'react';
import { Button, TouchableHighlight, View, } from 'react-native';
import styles from "./splash";

const Splash = ({ navigation }) => (
    <View style={styles.container}>
        <TouchableHighlight style={styles.button}>
            <Button style={styles.button}
                onPress={() =>
                    navigation.navigate('Login')
                }
                title="Login"
            />
        </TouchableHighlight>
    </View>
);

export default Splash;
