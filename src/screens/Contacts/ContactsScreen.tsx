import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';

import { styles } from './ContactsScreenStyles';
import { Header } from '../../components/Header/Header';
import { BoxContact } from '../../components/BoxContact/BoxContact';
import imgProfileContacts from '../../../assets/images/avatar-profile-v3.png';

export default function ContactsScreen () {
    return (
        <View style={styles.container}>
            <Header />

            <Text style={styles.title}>
                Contatos
            </Text>

            <BoxContact />

            <View>
                <Image 
                    source={imgProfileContacts} 
                    style={styles.imgProfileContacts}
                    alt='Imagem de perfil para cabeçalho'
                />
            </View>

            <StatusBar style="auto" />
        </View>
    );
}