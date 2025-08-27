import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { View, Text } from 'react-native';

import { styles } from './BoxSkillStyles';

export function BoxSkill() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.containerSkill}>
                    <View style={styles.containerIcon}>
                        <MaterialCommunityIcons
                            name="react"
                            size={40}
                            color="#FAA1D4" />
                    </View>

                    <Text style={styles.textSkill}>
                        ReactJS
                    </Text>
                </View>

                <View style={styles.containerSkill}>
                    <View style={styles.containerIcon}>
                        <MaterialCommunityIcons
                            name="language-javascript"
                            size={40}
                            color="#FAA1D4" />
                    </View>

                    <Text style={styles.textSkill}>
                        Python
                    </Text>
                </View>

                <View style={styles.containerSkill}>
                    <View style={styles.containerIcon}>
                        <MaterialCommunityIcons
                            name="language-java"
                            size={40}
                            color="#FAA1D4" />
                    </View>

                    <Text style={styles.textSkill}>
                        Java
                    </Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.containerSkill}>
                    <View style={styles.containerIcon}>
                        <MaterialCommunityIcons
                            name="language-html5"
                            size={40}
                            color="#FAA1D4" />
                    </View>

                    <Text style={styles.textSkill}>
                        HTML
                    </Text>
                </View>

                <View style={styles.containerSkill}>
                    <View style={styles.containerIcon}>
                        <MaterialCommunityIcons
                            name="language-css3"
                            size={40}
                            color="#FAA1D4" />
                    </View>

                    <Text style={styles.textSkill}>
                        CSS
                    </Text>
                </View>

                <View style={styles.containerSkill}>
                    <View style={styles.containerIcon}>
                        <MaterialCommunityIcons
                            name="language-javascript"
                            size={40}
                            color="#FAA1D4" />
                    </View>

                    <Text style={styles.textSkill}>
                        Javascript
                    </Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.containerSkill}>
                    <View style={styles.containerIcon}>
                        <Ionicons
                            name="server-outline"
                            size={40}
                            color="#FAA1D4" />
                    </View>

                    <Text style={styles.textSkill}>
                        SQL Server
                    </Text>
                </View>

                <View style={styles.containerSkill}>
                    <View style={styles.containerIcon}>
                        <Fontisto
                            name="mongodb"
                            size={40}
                            color="#FAA1D4" />
                    </View>

                    <Text style={styles.textSkill}>
                        MongoDB
                    </Text>
                </View>

                <View style={styles.containerSkill}>
                    <View style={styles.containerIcon}>
                        <MaterialCommunityIcons
                            name="monitor-dashboard"
                            size={40}
                            color="#FAA1D4" />
                    </View>

                    <Text style={styles.textSkill}>
                        Power BI
                    </Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.containerSkill}>
                    <View style={styles.containerIcon}>
                        <MaterialCommunityIcons
                            name="github"
                            size={40}
                            color="#FAA1D4" />
                    </View>

                    <Text style={styles.textSkill}>
                        Github
                    </Text>
                </View>

                <View style={styles.containerSkill}>
                    <View style={styles.containerIcon}>
                        <MaterialCommunityIcons
                            name="microsoft-visual-studio-code"
                            size={40}
                            color="#FAA1D4" />
                    </View>

                    <Text style={styles.textSkill}>
                        VSCode
                    </Text>
                </View>

                <View style={styles.containerSkill}>
                    <View style={styles.containerIcon}>
                        <MaterialCommunityIcons
                            name="trello"
                            size={40}
                            color="#FAA1D4" />
                    </View>

                    <Text style={styles.textSkill}>
                        Trello
                    </Text>
                </View>
            </View>
        </>
    );
}