import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from "../constants/styles";
import * as firebase from "firebase";

export default class HomeScreen extends React.Component {
    state = {
        email: "",
        displayName: ""
    };

    componentDidMount(){
        const { email, displayName } = firebase.auth().currentUser;
        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>Hi {this.state.email} </Text>

                <TouchableOpacity
                    style={styles.buttonLogout}
                    onPress={this.signOutUser}
                >
                    <Text style={{ color: "white"}}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}