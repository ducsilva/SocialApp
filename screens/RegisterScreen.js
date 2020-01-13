import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
// import Ionicons from "../node_modules/react-native-vector-icons/Ionicons";
// import { Ionicons } from "@expo/vector-icons/fonts/Ionicons.ttf";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../constants/styles";
import * as firebase from "firebase";

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    };

    handleSignUp = () => {
        const { email, password, name } = this.state;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(userCredenticals => {
                return userCredenticals.user.updateProfile({
                    displayName: name
                });
            })
            .catch(error => this.setState({ errorMessage: error.message }));
    };


    render() {
        const { name, email, password, errorMessage } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="light-content"></StatusBar>
                <Image
                    source={require("../assets/authHeader.png")}
                    style={{ marginTop: -116, marginLeft: -50 }}
                ></Image>
                <Image
                    source={require("../assets/authFooter.png")}
                    style={{ position: "absolute", bottom: -325, right: -225 }}
                ></Image>
                <TouchableOpacity
                    style={styles.back}
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Image source={require("../assets/previous.png")}></Image>
                </TouchableOpacity>
                <View style={styles.buttonAdd}>
                    <Text style={styles.greeting}>{`Hello!\nSign up to get started.`}</Text>
                    <TouchableOpacity
                        style={styles.avatar}
                    >
                        <Image 
                            source={require("../assets/plus-icon.png")}
                            style={{ marginTop: 6, marginLeft: 2}}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.errorMessage}>
                    {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={name => this.setState({ name })}
                            value={name}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={email}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{ color: "#414959", fontWeight: "500" }}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 32 }}
                >
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        New to SocialApp? <Text style={{ fontWeight: "500", color: "#E9446A" }}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}