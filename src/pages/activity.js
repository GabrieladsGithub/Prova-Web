import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonNavigate from '../components/button';
import { DataContext } from '../components/context/dataContext';
import { useContext } from 'react';



export default function ActivityScreen() {
  const navigation = useNavigation();

  const { count, setCount } = useContext(DataContext);

  const handleAddCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text styles={styles.titles}>Atividade</Text>
      <Text styles={styles.titles}>Contador: {count}</Text>
      <Button title="Adicionar" onPress={handleAddCount} />
      <ButtonNavigate navigation={navigation} location="ActivityScreen">
        Imprimir
      </ButtonNavigate>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
  },
  titles: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  }
})

