import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, Button, TextInput, Paragraph, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import PedidoContext from '../../context/pedido/pedidoContext';

const Shopping = () => {
  const { catalogos, confirmarcompra,actualizarTotal } = useContext(PedidoContext);
  const navigation = useNavigation();
  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(0);
  const { price = 0, name, urlimagen } = catalogos || {};

  useEffect(() => {
    const nuevoTotal = price * cantidad;
    setTotal(nuevoTotal);
    actualizarTotal(nuevoTotal); 
  }, [price, cantidad]);

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const incrementar = () => {
    setCantidad(cantidad + 1);
  };

  const confirmarCompra = () => {
    Alert.alert(
      '¿Desea confirmar la compra?',
      'Recuerde, después de confirmada la compra no se puede modificar',
      [
        {
          text: 'Confirmar',
          onPress: () => {
            const compra = { ...catalogos, cantidad, total };
            confirmarcompra(compra);
            actualizarTotal(total); // Actualizar el valor de `total` en el contexto
            navigation.navigate('Resumen');
          },
        },
        { text: 'Cancelar', style: 'cancel' },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.productName}>Nombre del carro: {name}</Text>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: urlimagen }} />
      </Card>
      <Text style={styles.price}>Precio: ${price}</Text>
      <View style={styles.quantity}>
        <Text>Cantidad</Text>
        <View style={styles.quantityControls}>
          <Button mode="contained" onPress={decrementar}>
            -
          </Button>
          <TextInput
            keyboardType="numeric"
            value={cantidad.toString()}
            onChangeText={(value) => setCantidad(parseInt(value, 10))}
            style={styles.quantityInput}
          />
          <Button mode="contained" onPress={incrementar}>
            +
          </Button>
        </View>
      </View>
      <Text style={styles.total}>Total: ${total}</Text>
      <Button mode="contained" onPress={confirmarCompra} style={styles.confirmButton}>
        Confirmar compra
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    marginBottom: 10,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  quantityControls: {
    flexDirection: 'row',
  },
  quantityInput: {
    width: 50,
    textAlign: 'center',
  },
  total: {
    fontSize: 16,
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: '#007bff',
  },
});

export default Shopping;