import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Star } from 'lucide-react-native';
import Colors from '@/constants/colors';

type RestaurantCardProps = {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  categories: string[];
  onPress: () => void;
};

export default function RestaurantCard({ 
  id, 
  name, 
  image, 
  rating, 
  deliveryTime, 
  categories,
  onPress 
}: RestaurantCardProps) {
  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image 
        source={{ uri: `${image}?w=500&h=300&fit=crop` }} 
        style={styles.image} 
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.ratingContainer}>
          <Star size={16} color={Colors.secondary} fill={Colors.secondary} />
          <Text style={styles.rating}>{rating}</Text>
          <Text style={styles.deliveryTime}>{deliveryTime}</Text>
        </View>
        <Text style={styles.categories}>{categories.join(' • ')}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
    marginLeft: 4,
    marginRight: 8,
  },
  deliveryTime: {
    fontSize: 14,
    color: Colors.lightText,
  },
  categories: {
    fontSize: 14,
    color: Colors.lightText,
  },
});