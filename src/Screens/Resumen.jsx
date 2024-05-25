import React, { useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, Button, Paragraph, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import PedidoContext from '../../context/pedido/pedidoContext';

const Resumen = () => {
    const { catalogos, total,mostrarresumen } = useContext(PedidoContext);
    const navigation = useNavigation();
  
    const MostrarResumen = () => {
      const compra = { ...catalogos};
      console.log(compra);
    };
  
    return (
        <View style={styles.container}>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.title}>Resumen de la compra</Text>
              <Paragraph style={styles.paragraph}>Nombre del carro: {catalogos.name}</Paragraph>
              <Paragraph style={styles.paragraph}>Precio: ${catalogos.price}</Paragraph>
              <Paragraph style={styles.paragraph}>Total: ${total}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <View style={styles.buttonContainer}>
                <Button onPress={() => navigation.navigate('Home')}>Volver</Button>
                <Button onPress={MostrarResumen}>Confirmar compra</Button>
              </View>
            </Card.Actions>
          </Card>
        </View>
      );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    card: {
      width: '100%',
      elevation: 4,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    paragraph: {
      fontSize: 16,
      marginBottom: 8,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
    },
  });

export default Resumen;