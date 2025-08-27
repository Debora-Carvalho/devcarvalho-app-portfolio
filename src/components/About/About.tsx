import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import { styles } from './AboutStyles';
import imgCardProfile from '../../../assets/images/card-profile-about.png';

export function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Image 
            source={imgCardProfile} 
            style={styles.imgCardProfile}
            alt='Imagem de perfil para cabeçalho'
        />
        
        <View style={styles.containerText}>
            <Text style={styles.title}>
                Olá!
            </Text>

            <Text style={styles.textSimple}>
                Me chamo Débora Carvalho e atuo como Desenvolvedora Front-end, Designer gráfico e Analista de dados.
            </Text>

            <Text style={styles.textSimple}>
                Sou de São Paulo - SP, estudante de Desenvolvimento de Software Multiplataforma, formada em Gestão de RH e Técnica em Administração.
            </Text>

            <Text style={styles.textSimple}>
                Minha jornada na área de T.I. começou por uma paixão por conectar pessoas e ideias através da tecnologia, impulsionando-me a buscar maneiras de tornar o mundo digital mais atraente, acessível e inclusivo.
            </Text>

            <Text style={styles.textSimple}>
                Busco constantemente por novos desafios para agregar conhecimento, experiências e crescimento profissional.
            </Text>

            <View>
                <Text style={styles.title}>
                    Hobbies
                </Text>
            </View>
        </View>
    </ScrollView>
  );
}