import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Package, ShoppingBag } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/colors';

type DeliveryCardProps = {
  id: string;
  type: 'food' | 'package';
  name: string;
  status: 'delivered' | 'in-progress';
  time: string;
  date: string;
};

export default function DeliveryCard({ id, type, name, status, time, date }: DeliveryCardProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/delivery/${id}`);
  };

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        {type === 'food' ? (
          <ShoppingBag size={24} color={Colors.secondary} />
        ) : (
          <Package size={24} color={Colors.primary} />
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>
          {time} • {date}
        </Text>
      </View>
      <View style={styles.statusContainer}>
        <View 
          style={[
            styles.statusIndicator, 
            { backgroundColor: status === 'delivered' ? Colors.success : Colors.primary }
          ]} 
        />
        <Text style={styles.statusText}>
          {status === 'delivered' ? 'Delivered' : 'In Progress'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: Colors.lightText,
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
    fontSize: 14,
    color: Colors.lightText,
  },
});