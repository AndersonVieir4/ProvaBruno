import React from 'react';
import { View, StyleSheet, Button, FlatList, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function ScreenC() {
    const items = ["itemA", "itemB", "itemC"]
    const renderItem = ({item}) => (
        <text>{item}</text>
    )
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Consulte seus dados</Text>
    <Text style={styles.titulo1}>Bernardo</Text>
    <Text style={styles.titulo2}>
        Nome: Bernardo
        Sobrenome: Hamiltom
        CPF: 123189321
        genero: masc
        endereço: 18239131
        gmail:beranrd123@gmail.com
        idade: 12   
    </Text>
  </View>
  );
  }
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        justifyContent: "center"
    },
    titulo: {
      marginBottom: 40,
      marginTop: 40,
      fontWeight: "bold",
      fontSize: 30,
      textAlign: 'center',
    },
    titulo1: {
        marginBottom: 40,
        marginTop: 40,
        fontWeight: "bold",
        fontSize: 15,
        textAlign: 'center',
      },
      titulo2: {
        marginBottom: 40,
        marginTop: 40,
        fontWeight: "bold",
        fontSize: 10,
        textAlign: 'center',
      },
})