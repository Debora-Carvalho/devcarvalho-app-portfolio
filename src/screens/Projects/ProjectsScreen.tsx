import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';

import { styles } from './ProjectsScreenStyles';
import { Header } from '../../components/Header/Header';

export default function ProjectsScreen () {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header />

            <Text style={styles.title}>
                Projects
            </Text>

            <StatusBar style="auto" />
        </ScrollView>
    );
}