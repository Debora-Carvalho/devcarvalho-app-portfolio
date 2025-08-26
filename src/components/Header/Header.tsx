import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { View, Text, Image } from 'react-native';

import { styles } from './HeaderStyles';

import imgProfileHeader from '../../../assets/images/avatar-profile.png';

export function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Image 
                    source={imgProfileHeader} 
                    style={styles.imgProfileHeader}
                    alt='Imagem de perfil para cabeçalho'
                />
            </View>

            <MaterialCommunityIcons 
                name="menu" 
                size={24} 
                color="#FFFFFF" 
            />
        </View>
    );
}