import React, { useContext, useEffect } from 'react';
import { View, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Button, Text, Card, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { onChildAdded } from 'firebase/database';
import FirebaseContext from '../../context/firebase/firebaseContext';
import PedidoContext from '../../context/pedido/pedidoContext';


const MOCK_PRODUCTS = [
  { id: 1, title: 'Hyundai', imageUrl: require('../../Img/carro7.png'), price: '$19.99' },
  { id: 2, title: 'Suzuki', imageUrl: require('../../Img/carro8.png'), price: '$49.99' },
  { id: 3, title: 'Kia', imageUrl: require('../../Img/carro9.webp'), price: '$79.99' },
  { id: 4, title: 'Mazda', imageUrl: require('../../Img/carro10.jpg'), price: '$20.00' }
];

const FeaturedProductItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.featuredProduct} onPress={onPress}>
    <Image source={item.imageUrl} style={styles.featuredProductImage} />
    <Text style={styles.featuredProductTitle}>{item.title}</Text>
    <Text style={styles.featuredProductPrice}>{item.price}</Text>
  </TouchableOpacity>
);

const Home = () => {
  const navigation = useNavigation();
  const { catalogo, obtenercatalogo } = useContext(FirebaseContext);
  const { seleccionarproducto } = useContext(PedidoContext);

  useEffect(() => {
    obtenercatalogo();
  }, []);

  const handleSelectProduct = (product) => { 
    console.log('product: ', product);
    seleccionarproducto(product);
  };
 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: 'https://estaticos.elcolombiano.com/documents/10157/0/1004x565/112c0/780d565/none/11101/FICA/image_content_25061817_20160101220021.jpg'
        }}
        style={styles.banner}
      />
      <Text style={styles.featuredHeading}>Productos Destacados</Text>
      <FlatList
        data={MOCK_PRODUCTS.slice(0, 4)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <FeaturedProductItem item={item} onPress={() =>onChildAdded} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.sectionHeading}>Nuestro catálogo</Text>
      {catalogo.map((catalogos) => {
        const { description, id, name, price, urlimagen } = catalogos;
        return (
          <Card key={id} style={styles.card}>
            <Card.Cover source={{ uri: urlimagen }} />
            <Card.Content>
              <Title style={styles.cardTitle}>{name}</Title>
              <Text style={styles.cardDescription}>{description}</Text>
              <Text style={styles.cardPrice}>${price}</Text>
            </Card.Content>
            <Card.Actions>
              <Button  mode='contained'onPress={() => handleSelectProduct(catalogos)}>Seleccionar</Button>
              <Button mode='contained' onPress={() => navigation.navigate('Compras')}>Comprar</Button>
            </Card.Actions>
          </Card>
        );
      })}
      <Button mode="contained" onPress={() => navigation.navigate('Compras')} style={styles.seeMoreButton}>
        Ver más
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10
  },
  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10
  },
  featuredHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkgoldenrod',
    marginBottom: 10
  },
  featuredProduct: {
    width: 150,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    alignItems: 'center'
  },
  featuredProductImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 5
  },
  featuredProductTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  featuredProductPrice: {
    fontSize: 15,
    color: '#006400'
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
  },
  card: {
    marginBottom: 10
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  cardDescription: {
    marginVertical: 5
  },
  cardPrice: {
    fontWeight: 'bold',
    color: 'green'
  },
  seeMoreButton: {
    marginTop: 10
  }
});

export default Home;