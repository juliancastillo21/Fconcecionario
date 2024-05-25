import React from 'react';
import { View,  FlatList, Image, StyleSheet,ScrollView } from 'react-native';
import { Button,Text } from 'react-native-paper';

const MOCK_OFFERS = [
    {
      id: 1,
      imageUrl: require('../../Img/carro1.jpg'),
      title: 'Toyota Camry',
      discount: '15% de descuento',
      description: 'Experimente lujo y comodidad con un Toyota Camry a un precio especial.'
    },
    {
      id: 2,
      imageUrl: require('../../Img/carro2.webp'),
      title: 'Honda Civic',
      discount: '$2,000 de descuento',
      description: 'Conduzca el Honda Civic, un símbolo de rendimiento y estilo, con un descuento significativo.'
    },
    {
      id: 3,
      imageUrl: require('../../Img/carro3.jpg'),
      title: 'Ford Mustang',
      discount: 'Financiamiento especial',
      description: 'Posea el icónico Ford Mustang con atractivas opciones de financiamiento.'
    },
    
  ];

const Offers = () => {
  return (
    
    <View style={styles.offersContainer}>
        <ScrollView>
      <Text style={styles.offersHeading}></Text>
      <FlatList
        data={MOCK_OFFERS}
        renderItem={({ item }) => (
          <View style={styles.offerItem}>
            <Image source={ item.imageUrl } style={styles.offerImage} />
            <View style={styles.offerDetails}>
              <Text style={styles.offerTitle}>{item.title}</Text>
              <Text style={styles.offerDiscount}>{item.discount}</Text>
              <Text style={styles.offerDescription}>{item.description}</Text>
            </View>
            <View style={styles.offerButton}>
                <Button mode='contained'>Ver más</Button>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  offersContainer: {
    padding: 10,
  },
  offersHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  offerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  offerImage: {
    width: 100,
    height: 70,
    marginRight: 15,
    borderRadius: 5,
  },
  offerDetails: {
    flex: 1,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  offerDiscount: {
    fontSize: 16,
    color: '#f00', 
    fontWeight: 'bold',
    marginBottom: 5,
  },
  offerDescription: {
    fontSize: 14,
    color: '#666',
  },
  offerButton: {
    padding: 5,
    borderRadius: 5,
    marginLeft: 'auto',
  },
  buttonText: {
    fontSize: 12,
    color: '#fff',
  },
});

export default Offers;