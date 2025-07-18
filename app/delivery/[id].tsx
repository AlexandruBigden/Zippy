import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Package, ShoppingBag, Clock, MapPin } from 'lucide-react-native';
import MapView from '@/components/MapView';
import ServiceButton from '@/components/ServiceButton';
import Colors from '@/constants/colors';
import { recentDeliveries } from '@/constants/mockData';

export default function DeliveryDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  // Find the delivery by id
  const delivery = recentDeliveries.find(d => d.id === id);
  
  if (!delivery) {
    return (
      <View style={styles.notFound}>
        <Text>Delivery not found</Text>
      </View>
    );
  }

  const isFood = delivery.type === 'food';
  const isActive = delivery.status === 'in-progress';

  return (
    <>
      <Stack.Screen 
        options={{ 
          headerTitle: isFood ? "Food Delivery" : "Package Delivery",
          headerTitleStyle: { fontSize: 18 },
        }} 
      />
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View style={styles.iconContainer}>
            {isFood ? (
              <ShoppingBag size={32} color={Colors.secondary} />
            ) : (
              <Package size={32} color={Colors.primary} />
            )}
          </View>
          <Text style={styles.deliveryName}>{delivery.name}</Text>
          <View style={styles.statusContainer}>
            <View 
              style={[
                styles.statusIndicator, 
                { backgroundColor: isActive ? Colors.primary : Colors.success }
              ]} 
            />
            <Text 
              style={[
                styles.statusText,
                { color: isActive ? Colors.primary : Colors.success }
              ]}
            >
              {isActive ? 'In Progress' : 'Delivered'}
            </Text>
          </View>
        </View>
        
        {isActive && (
          <View style={styles.mapSection}>
            <MapView style={styles.map} />
            <View style={styles.etaContainer}>
              <Clock size={20} color={Colors.primary} />
              <Text style={styles.etaText}>
                Estimated arrival: {delivery.estimatedArrival}
              </Text>
            </View>
          </View>
        )}
        
        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Delivery Details</Text>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Order ID</Text>
            <Text style={styles.detailValue}>#{delivery.id}</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Date & Time</Text>
            <Text style={styles.detailValue}>{delivery.date}, {delivery.time}</Text>
          </View>
          
          {isFood ? (
            <>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Restaurant</Text>
                <Text style={styles.detailValue}>{delivery.restaurant}</Text>
              </View>
              
              <View style={styles.itemsContainer}>
                <Text style={styles.itemsTitle}>Items</Text>
                {delivery.items?.map((item, index) => (
                  <View key={index} style={styles.foodItem}>
                    <Text style={styles.foodItemName}>{item}</Text>
                  </View>
                ))}
                
                <View style={styles.totalContainer}>
                  <Text style={styles.totalLabel}>Total</Text>
                  <Text style={styles.totalValue}>${delivery.price?.toFixed(2)}</Text>
                </View>
              </View>
            </>
          ) : (
            <>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Sender</Text>
                <Text style={styles.detailValue}>{delivery.sender}</Text>
              </View>
              
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Tracking ID</Text>
                <Text style={styles.detailValue}>{delivery.trackingId}</Text>
              </View>
            </>
          )}
        </View>
        
        {isActive && (
          <View style={styles.buttonContainer}>
            <ServiceButton 
              title="Track on Map" 
              onPress={() => {}}
              primary={true}
              style={styles.button}
            />
          </View>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  notFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  deliveryName: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '500',
  },
  mapSection: {
    padding: 16,
  },
  map: {
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },
  etaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    padding: 12,
  },
  etaText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.primary,
    marginLeft: 8,
  },
  detailsSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  detailLabel: {
    fontSize: 16,
    color: Colors.lightText,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text,
  },
  itemsContainer: {
    marginTop: 16,
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    padding: 16,
  },
  itemsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 12,
  },
  foodItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  foodItemName: {
    fontSize: 16,
    color: Colors.text,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary,
  },
  buttonContainer: {
    padding: 16,
    marginBottom: 24,
  },
  button: {
    width: '100%',
  },
});