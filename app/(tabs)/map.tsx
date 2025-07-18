import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ChevronDown } from 'lucide-react-native';
import ZippyHeader from '@/components/ZippyHeader';
import MapView from '@/components/MapView';
import Colors from '@/constants/colors';
import { recentDeliveries } from '@/constants/mockData';

export default function MapScreen() {
  // Get the first in-progress delivery if any
  const activeDelivery = recentDeliveries.find(
    delivery => delivery.status === 'in-progress'
  );

  return (
    <SafeAreaView style={styles.container}>
      <ZippyHeader title="Track Zippy" />
      
      <View style={styles.mapContainer}>
        <MapView style={styles.map} />
      </View>
      
      {activeDelivery ? (
        <View style={styles.deliveryPanel}>
          <View style={styles.panelHeader}>
            <View style={styles.panelHandle} />
          </View>
          
          <View style={styles.deliveryInfo}>
            <Text style={styles.deliveryTitle}>
              {activeDelivery.name}
            </Text>
            
            <View style={styles.deliveryDetails}>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Status</Text>
                <View style={styles.statusContainer}>
                  <View style={styles.statusIndicator} />
                  <Text style={styles.statusText}>In Progress</Text>
                </View>
              </View>
              
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>ETA</Text>
                <Text style={styles.detailValue}>{activeDelivery.estimatedArrival}</Text>
              </View>
              
              {activeDelivery.type === 'package' && (
                <View style={styles.detailItem}>
                  <Text style={styles.detailLabel}>Tracking ID</Text>
                  <Text style={styles.detailValue}>{activeDelivery.trackingId}</Text>
                </View>
              )}
            </View>
            
            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.detailsButtonText}>View Details</Text>
              <ChevronDown size={16} color={Colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No Active Deliveries</Text>
          <Text style={styles.emptyText}>
            Zippy is currently resting at the station. Order food or send a package to see Zippy in action!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  deliveryPanel: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingBottom: 24,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  panelHeader: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  panelHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.border,
  },
  deliveryInfo: {
    paddingHorizontal: 8,
  },
  deliveryTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  deliveryDetails: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  detailLabel: {
    fontSize: 14,
    color: Colors.lightText,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    marginRight: 6,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.primary,
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  detailsButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.primary,
    marginRight: 4,
  },
  emptyContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: Colors.lightText,
    textAlign: 'center',
  },
});