import React, { useState } from 'react';
import { View,FlatList, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { Text,Button } from 'react-native-paper';

const MOCK_CREDIT_PLANS = [
  {
    id: 1,
    title: 'Plan Clásico',
    interestRate: 8.99,
    term: 60,
    monthlyPayment: 350.00,
  },
  {
    id: 2,
    title: 'Plan Platino',
    interestRate: 7.99,
    term: 72,
    monthlyPayment: 300.00,
  },
  {
    id: 3,
    title: 'Plan Diamante',
    interestRate: 6.99,
    term: 84,
    monthlyPayment: 275.00,
  },
];

const VehicleCredit = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const renderPlanItem = ({ item }) => (
    <TouchableOpacity
      style={styles.planItem}
      onPress={() => setSelectedPlan(item)}
    >
      <Text style={styles.planTitle}>{item.title}</Text>
      <View style={styles.planDetails}>
        <Text style={styles.planInterestRate}>Tasa de interés: {item.interestRate}%</Text>
        <Text style={styles.planTerm}>Plazo: {item.term} meses</Text>
        <Text style={styles.planMonthlyPayment}>Pago mensual: ${item.monthlyPayment.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <ScrollView>
      <Text style={styles.heading}>Créditos para Vehículos</Text>
      <Text style={styles.description}>
        Obtenga una preaprobación rápida y fácil para la compra de su próximo vehículo. 
        Disfrute de tasas competitivas y un proceso de solicitud sin complicaciones.
      </Text>
      <FlatList
        data={MOCK_CREDIT_PLANS}
        renderItem={renderPlanItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {selectedPlan && (
        <View style={styles.selectedPlanContainer}>
          <Text style={styles.selectedPlanTitle}>Plan seleccionado: {selectedPlan.title}</Text>
          <View style={styles.selectedPlanDetails}>
            <Text style={styles.selectedPlanInterestRate}>Tasa de interés: {selectedPlan.interestRate}%</Text>
            <Text style={styles.selectedPlanTerm}>Plazo: {selectedPlan.term} meses</Text>
            <Text style={styles.selectedPlanMonthlyPayment}>Pago mensual: ${selectedPlan.monthlyPayment.toFixed(2)}</Text>
          </View>
        </View>
      )}
      <TouchableOpacity  onPress={() => { /* Handle button press */ }}>
        <Button  mode="contained">Solicitar ahora</Button>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
  planItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  planTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  planDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  planInterestRate: {
    fontSize: 14,
    color: '#007bff',
  },
  planTerm: {
    fontSize: 14,
  },
  planMonthlyPayment: {
    fontSize: 14,
  },
  selectedPlanContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  
  planDetails: {
    alignItems: 'flex-start', 
  },
  planInterestRate: {
    fontSize: 14,
    color: '#007bff', 
  },
  planTerm: {
    fontSize: 14,
  },
  planMonthlyPayment: {
    fontSize: 14,
  },
 
  applyButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginTop: 20, 
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default VehicleCredit