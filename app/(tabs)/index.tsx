import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import ZippyHeader from '@/components/ZippyHeader';
import ServiceButton from '@/components/ServiceButton';
import DeliveryCard from '@/components/DeliveryCard';
import MapView from '@/components/MapView';
import Colors from '@/constants/colors';
import { recentDeliveries } from '@/constants/mockData';

export default function HomeScreen() {
  const router = useRouter();

  const handleOrderFood = () => {
    router.push('/food-order');
  };

  const handleSendPackage = () => {
    router.push('/package');
  };

  const activeDeliveries = recentDeliveries.filter(
    delivery => delivery.status === 'in-progress'
  );

  return (
    <SafeAreaView style={styles.container}>
      <ZippyHeader />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>
              Hey there! I'm Zippy
            </Text>
            <Text style={styles.heroSubtitle}>
              Your friendly delivery robot
            </Text>
          </View>
          <Image
            source="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=300&auto=format&fit=crop"
            style={styles.heroImage}
            contentFit="cover"
          />
        </View>

        <View style={styles.servicesSection}>
          <Text style={styles.sectionTitle}>Services</Text>
          <View style={styles.buttonContainer}>
            <ServiceButton 
              title="Order Food" 
              onPress={handleOrderFood}
              primary={true}
              style={styles.serviceButton}
            />
            <ServiceButton 
              title="Send Package" 
              onPress={handleSendPackage}
              primary={false}
              style={styles.serviceButton}
            />
          </View>
        </View>

        {activeDeliveries.length > 0 && (
          <View style={styles.activeSection}>
            <Text style={styles.sectionTitle}>Active Delivery</Text>
            <View style={styles.mapContainer}>
              <MapView style={styles.map} />
            </View>
            
            <View style={styles.deliveryInfo}>
              <Text style={styles.deliveryTitle}>
                {activeDeliveries[0].name}
              </Text>
              <Text style={styles.deliveryEta}>
                Estimated arrival: {activeDeliveries[0].estimatedArrival}
              </Text>
            </View>
          </View>
        )}

        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>Recent Deliveries</Text>
          {recentDeliveries.slice(0, 3).map((delivery) => (
            <DeliveryCard
              key={delivery.id}
              id={delivery.id}
              type={delivery.type as 'food' | 'package'}
              name={delivery.name}
              status={delivery.status as 'delivered' | 'in-progress'}
              time={delivery.time}
              date={delivery.date}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  heroSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  heroContent: {
    flex: 1,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: Colors.lightText,
  },
  heroImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.cardBackground,
  },
  servicesSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  serviceButton: {
    flex: 1,
  },
  activeSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  mapContainer: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  map: {
    flex: 1,
  },
  deliveryInfo: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    padding: 16,
  },
  deliveryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  deliveryEta: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
  },
  recentSection: {
    paddingHorizontal: 16,
  },
});