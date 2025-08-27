import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { View, Text } from 'react-native';

import { styles } from './BoxContactStyles';

export function BoxContact() {
    return (
        <View style={styles.container}>
            <View style={styles.containerContact}>
                <View style={styles.containerIcon}>
                    <MaterialCommunityIcons
                        name="email-outline"
                        size={30}
                        color="#102b1f"
                    />
                </View>

                <Text style={styles.textSimple}>
                    deboravolc2@gmail.com
                </Text>
            </View>

            <View style={styles.containerContact}>
                <View style={styles.containerIcon}>
                    <MaterialCommunityIcons
                        name="linkedin"
                        size={30}
                        color="#102b1f"
                    />
                </View>

                <Text style={styles.textSimple}>
                    linkedin.com/in/debora-vieira-carvalho-45a478205/
                </Text>
            </View>

            <View style={styles.containerContact}>
                <View style={styles.containerIcon}>
                    <MaterialCommunityIcons
                        name="github"
                        size={30}
                        color="#102b1f"
                    />
                </View>

                <Text style={styles.textSimple}>
                    https://github.com/Debora-Carvalho/
                </Text>
            </View>

            <View style={styles.containerContact}>
                <View style={styles.containerIcon}>
                    <MaterialCommunityIcons
                        name="github"
                        size={30}
                        color="#102b1f"
                    />
                </View>

                <Text style={styles.textSimple}>
                    http://lattes.cnpq.br/5274933663439161
                </Text>
            </View>
        </View>
    );
}