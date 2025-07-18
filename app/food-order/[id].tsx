import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { Star, Clock, ChevronRight } from 'lucide-react-native';
import ServiceButton from '@/components/ServiceButton';
import Colors from '@/constants/colors';
import { restaurants } from '@/constants/mockData';

export default function RestaurantDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
  // Find the restaurant by id
  const restaurant = restaurants.find(r => r.id === id);
  
  if (!restaurant) {
    return (
      <View style={styles.notFound}>
        <Text>Restaurant not found</Text>
      </View>
    );
  }

  // Mock menu categories and items
  const menuCategories = [
    {
      id: '1',
      name: 'Popular Items',
      items: [
        { id: '101', name: 'Signature Burger', price: 12.99, description: 'Our famous burger with special sauce' },
        { id: '102', name: 'Chicken Sandwich', price: 10.99, description: 'Crispy chicken with lettuce and mayo' },
      ]
    },
    {
      id: '2',
      name: 'Sides',
      items: [
        { id: '201', name: 'French Fries', price: 4.99, description: 'Crispy golden fries with sea salt' },
        { id: '202', name: 'Onion Rings', price: 5.99, description: 'Crispy battered onion rings' },
      ]
    },
    {
      id: '3',
      name: 'Drinks',
      items: [
        { id: '301', name: 'Soda', price: 2.99, description: 'Choice of Coke, Sprite, or Dr. Pepper' },
        { id: '302', name: 'Milkshake', price: 6.99, description: 'Vanilla, chocolate, or strawberry' },
      ]
    },
  ];

  return (
    <>
      <Stack.Screen 
        options={{ 
          headerTitle: restaurant.name,
          headerTitleStyle: { fontSize: 18 },
        }} 
      />
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image 
          source={{ uri: `${restaurant.image}?w=800&h=400&fit=crop` }} 
          style={styles.coverImage} 
          resizeMode="cover"
        />
        
        <View style={styles.infoContainer}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          
          <View style={styles.detailsRow}>
            <View style={styles.ratingContainer}>
              <Star size={16} color={Colors.secondary} fill={Colors.secondary} />
              <Text style={styles.ratingText}>{restaurant.rating}</Text>
            </View>
            
            <View style={styles.deliveryTimeContainer}>
              <Clock size={16} color={Colors.lightText} />
              <Text style={styles.deliveryTimeText}>{restaurant.deliveryTime}</Text>
            </View>
          </View>
          
          <Text style={styles.categoriesText}>
            {restaurant.categories.join(' • ')}
          </Text>
        </View>
        
        <View style={styles.divider} />
        
        {menuCategories.map((category) => (
          <View key={category.id} style={styles.menuCategory}>
            <Text style={styles.categoryName}>{category.name}</Text>
            
            {category.items.map((item) => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.menuItem}
                activeOpacity={0.7}
              >
                <View style={styles.menuItemContent}>
                  <Text style={styles.menuItemName}>{item.name}</Text>
                  <Text style={styles.menuItemDescription}>{item.description}</Text>
                  <Text style={styles.menuItemPrice}>${item.price.toFixed(2)}</Text>
                </View>
                <ChevronRight size={20} color={Colors.lightText} />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.orderButtonContainer}>
        <ServiceButton 
          title="Place Order" 
          onPress={() => {
            // Handle order placement
            router.push('/');
          }}
          style={styles.orderButton}
        />
      </View>
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
  coverImage: {
    width: '100%',
    height: 200,
  },
  infoContainer: {
    padding: 16,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 8,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
    marginLeft: 4,
  },
  deliveryTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryTimeText: {
    fontSize: 14,
    color: Colors.lightText,
    marginLeft: 4,
  },
  categoriesText: {
    fontSize: 14,
    color: Colors.lightText,
  },
  divider: {
    height: 8,
    backgroundColor: Colors.cardBackground,
    marginVertical: 8,
  },
  menuCategory: {
    padding: 16,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text,
    marginBottom: 4,
  },
  menuItemDescription: {
    fontSize: 14,
    color: Colors.lightText,
    marginBottom: 4,
  },
  menuItemPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.primary,
  },
  orderButtonContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  orderButton: {
    width: '100%',
  },
});