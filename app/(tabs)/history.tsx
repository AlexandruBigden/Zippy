import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import ZippyHeader from '@/components/ZippyHeader';
import DeliveryCard from '@/components/DeliveryCard';
import Colors from '@/constants/colors';
import { recentDeliveries } from '@/constants/mockData';

export default function HistoryScreen() {
  // Group deliveries by date
  const groupedDeliveries = recentDeliveries.reduce((groups, delivery) => {
    const date = delivery.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(delivery);
    return groups;
  }, {} as Record<string, typeof recentDeliveries>);

  // Get dates in order
  const dates = Object.keys(groupedDeliveries);

  return (
    <SafeAreaView style={styles.container}>
      <ZippyHeader title="Delivery History" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {dates.map((date) => (
          <View key={date} style={styles.dateSection}>
            <Text style={styles.dateTitle}>{date}</Text>
            
            {groupedDeliveries[date].map((delivery) => (
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
        ))}
        
        {dates.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No Delivery History</Text>
            <Text style={styles.emptyText}>
              You haven't made any deliveries yet. Order food or send a package to get started!
            </Text>
          </View>
        )}
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
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  dateSection: {
    marginBottom: 24,
  },
  dateTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 12,
    marginTop: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 100,
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