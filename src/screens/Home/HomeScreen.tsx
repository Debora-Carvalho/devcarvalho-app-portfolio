import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';

import { styles } from './HomeScreenStyles';

import { Header } from '../../components/Header/Header';
import imgHero from '../../../assets/images/hero-home-image.png';
import { About } from '../../components/About/About';

export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header />

            <View style={styles.containerImage}> 
                <Image 
                    source={imgHero} 
                    style={styles.imgHero}
                    alt='Imagem de perfil para cabeçalho'
                />
            </View>

            <Text style={styles.textHeadline}>
                Transformo ideias em projetos visuais impossíveis de ignorar
            </Text>

            <AntDesign 
                name="arrowdown" 
                size={24} 
                color="#000000" 
            />

            <About />

            <StatusBar style="auto" />
        </ScrollView>
    );
}