import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ButtonNavigate from '../components/button'
import { useNavigation } from '@react-navigation/native'
import { DataContext } from '../components/context/dataContext';
import { useContext } from 'react';

export default function HomeScreen() {

  const navigation = useNavigation()

  const { count } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aqui acompanharemos relatório da atividade anterior!</Text>
      <Text>Contador: {count}</Text>

      <ButtonNavigate
        navigation={navigation}
        location="HomeScreen">atividades
      </ButtonNavigate>
      <View>
        <ButtonNavigate location='Login' navigation={navigation}>Sair </ButtonNavigate>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  }
})


