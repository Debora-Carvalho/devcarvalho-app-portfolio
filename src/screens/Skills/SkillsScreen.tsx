import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { styles } from './SkillsScreenStyles';

export default function SkillsScreen () {
    return (
        <View style={styles.container}>
            <Text>Skills</Text>

            <StatusBar style="auto" />
        </View>
    );
}