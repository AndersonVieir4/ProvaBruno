import React from 'react';
import { View, StyleSheet, Button, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function ScreenA() {
  const navigation = useNavigation();
  function openScreen(){
  navigation.navigate('screenB');
  }
  
  return (
  <View style={styles.container}>
    <Text style={styles.titulo}>Bem-vindo a tela Home do o Consultório Médico</Text>
  <Button
  title="Agende sua consulta"
  color="black"
  onPress={openScreen}
  />
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
})