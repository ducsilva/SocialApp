import React from 'react';
import { Text, View } from 'react-native';
import styles from '../constants/styles';

export default class MessageScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>MessageScreen</Text>
            </View>
        )
    }
}