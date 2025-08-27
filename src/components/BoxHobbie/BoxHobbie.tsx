import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View, Text } from 'react-native';

import { styles } from './BoxHobbieStyles';

export function BoxHobbie() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.containerHobbie}>
                    <View style={styles.containerIcon}>
                        <MaterialCommunityIcons
                            name="book-open-page-variant-outline"
                            size={40}
                            color="#FAA1D4" />
                    </View>

                    <Text style={styles.textHobbie}>
                        Leitora
                    </Text>
                </View>

                <View style={styles.containerHobbie}>
                    <View style={styles.containerIcon}>
                        <MaterialCommunityIcons
                            name="piano"
                            size={40}
                            color="#FAA1D4" />
                    </View>

                    <Text style={styles.textHobbie}>
                        Tecladista
                    </Text>
                </View>
            </View>
        </>
    );
};