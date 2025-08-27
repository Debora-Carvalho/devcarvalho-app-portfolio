import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { styles } from './SkillsScreenStyles';

import { Header } from '../../components/Header/Header';
import { BoxSkill } from '../../components/BoxSkill/BoxSkill';

export default function SkillsScreen () {
    return (
        <View style={styles.container}>
            <Header />

            <Text style={styles.title}>
                Skills
            </Text>

            <BoxSkill />

            <StatusBar style="auto" />
        </View>
    );
}