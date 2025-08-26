import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { styles } from './ProjectsScreenStyles';

export default function ProjectsScreen () {
    return (
        <View style={styles.container}>
            <Text>Projects</Text>

            <StatusBar style="auto" />
        </View>
    );
}