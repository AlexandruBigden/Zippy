import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Search } from 'lucide-react-native';
import ZippyHeader from '@/components/ZippyHeader';
import RestaurantCard from '@/components/RestaurantCard';
import Colors from '@/constants/colors';
import { restaurants } from '@/constants/mockData';

export default function FoodOrderScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleRestaurantPress = (id: string) => {
    router.push(`/food-order/${id}`);
  };

  const categories = [
    'All', 'Fast Food', 'Healthy', 'Pizza', 'Coffee', 'Dessert', 'Asian'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  return (
    <SafeAreaView style={styles.container}>
      <ZippyHeader title="Order Food" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.searchContainer}>
          <Search size={20} color={Colors.lightText} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for restaurants or food"
            placeholderTextColor={Colors.lightText}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map((category) => (
            <Text
              key={category}
              style={[
                styles.categoryItem,
                selectedCategory === category && styles.selectedCategory,
                selectedCategory === category && { color: 'white' }
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              {category}
            </Text>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Popular Restaurants</Text>
        
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            image={restaurant.image}
            rating={restaurant.rating}
            deliveryTime={restaurant.deliveryTime}
            categories={restaurant.categories}
            onPress={() => handleRestaurantPress(restaurant.id)}
          />
        ))}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginVertical: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: Colors.text,
  },
  categoriesContainer: {
    paddingVertical: 16,
  },
  categoryItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: Colors.cardBackground,
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
    overflow: 'hidden',
  },
  selectedCategory: {
    backgroundColor: Colors.primary,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
});