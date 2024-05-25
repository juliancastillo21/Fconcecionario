import React, { useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

const MOCK_INSURANCE_PLANS = [
    {
      id: 1,
      title: 'Plan Básico',
      coverage: 'Responsabilidad civil, daños a terceros',
      price: '$50.00/mes',
      imageUrl: require('../../Img/seguro-por-uso.jpg'),
    },
    {
      id: 2,
      title: 'Plan Completo',
      coverage: 'Responsabilidad civil, daños a terceros, colisión, robo',
      price: '$80.00/mes',
      imageUrl: require('../../Img/seguros-de-auto.jpg'),  
    },
    {
      id: 3,
      title: 'Plan Todo Riesgo',
      coverage: 'Responsabilidad civil, daños a terceros, colisión, robo, vandalismo',
      price: '$120.00/mes',
      imageUrl: require('../../Img/WAPP-01.png'),    
    },
  ];

  const VehicleInsurance = () => {
    const [showInsurancePlans, setShowInsurancePlans] = useState(false); 
  
    const handleShowInsurancePlans = () => {
      setShowInsurancePlans(true);
    };
    
    const handleShowInsuranceClose = () =>{
        setShowInsurancePlans(false);
    }
  
    return (
        <View style={styles.container}>
          <ScrollView>
          <Text style={styles.heading}>Seguro para Vehículo</Text>
          <Text style={styles.description}>
            Proteja su inversión con un seguro de vehículo completo y confiable. Obtenga cotizaciones gratis y encuentre la cobertura adecuada para sus necesidades.
          </Text>
          <TouchableOpacity style={styles.getQuoteButton} onPress={handleShowInsurancePlans}>
            <Text style={styles.getQuoteButtonText}>Mostrar Seguros</Text>
          </TouchableOpacity>
            <TouchableOpacity style={styles.getQuoteButton} onPress={handleShowInsuranceClose}>
                <Text style={styles.getQuoteButtonText}>Cerrar Seguro</Text>
            </TouchableOpacity>
          {showInsurancePlans && (
            <FlatList
              data={MOCK_INSURANCE_PLANS}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.planCard} >
                  <Image source={  item.imageUrl } style={styles.planImage} />
                  <View style={styles.planDetails}>
                    <Text style={styles.planTitle}>{item.title}</Text>
                    <Text style={styles.planCoverage}>{item.coverage}</Text>
                    <Text style={styles.planPrice}>{item.price}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          )}
          </ScrollView>
        </View>
      );      
  };

const styles = StyleSheet.create({
    container: {
      padding: 10,
      alignItems: 'center',
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      marginBottom: 20,
    },
    getQuoteButton: {
      backgroundColor: '#007bff',
      padding: 15,
      margin: 7,
      borderRadius: 5,
    },
    getQuoteButtonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
    },
    planCard: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 5,
      marginBottom: 10,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    planImage: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginBottom: 10,
    },
    planDetails: {
      alignItems: 'flex-start',
    },
    planTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    planCoverage: {
      fontSize: 14,
      marginBottom: 5,
    },
    planPrice: {
      fontSize: 14,
      fontWeight: 'bold',
    },
  });
  
export default VehicleInsurance;
