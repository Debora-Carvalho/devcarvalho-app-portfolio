import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { styles } from './ContactsScreenStyles';

export default function ContactsScreen () {
    return (
        <View style={styles.container}>
            <Text>Contatos</Text>

            <StatusBar style="auto" />
        </View>
    );
}