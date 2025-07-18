import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { Package, MapPin, ChevronRight } from 'lucide-react-native';
import ServiceButton from '@/components/ServiceButton';
import LocationItem from '@/components/LocationItem';
import Colors from '@/constants/colors';
import { packageLocations } from '@/constants/mockData';

export default function SendPackageScreen() {
  const router = useRouter();
  const [packageName, setPackageName] = useState('');
  const [packageDescription, setPackageDescription] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  
  const handleSendPackage = () => {
    // In a real app, we would validate and send the package request
    router.push('/');
  };

  const [showLocationPicker, setShowLocationPicker] = useState<'pickup' | 'dropoff' | null>(null);

  const handleLocationSelect = (location: string) => {
    if (showLocationPicker === 'pickup') {
      setPickupLocation(location);
    } else if (showLocationPicker === 'dropoff') {
      setDropoffLocation(location);
    }
    setShowLocationPicker(null);
  };

  return (
    <>
      <Stack.Screen 
        options={{ 
          headerTitle: "Send Package",
          headerTitleStyle: { fontSize: 18 },
        }} 
      />
      
      <SafeAreaView style={styles.container}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.iconContainer}>
            <View style={styles.iconBackground}>
              <Package size={32} color={Colors.primary} />
            </View>
          </View>
          
          <Text style={styles.title}>Package Details</Text>
          
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Package Name</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g., Books, Documents, etc."
                placeholderTextColor={Colors.lightText}
                value={packageName}
                onChangeText={setPackageName}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Description (Optional)</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Add any special instructions or details"
                placeholderTextColor={Colors.lightText}
                value={packageDescription}
                onChangeText={setPackageDescription}
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Pickup Location</Text>
              <TouchableOpacity 
                style={styles.locationSelector}
                onPress={() => setShowLocationPicker('pickup')}
              >
                <MapPin size={20} color={pickupLocation ? Colors.primary : Colors.lightText} />
                <Text 
                  style={[
                    styles.locationText,
                    pickupLocation ? styles.locationSelected : null
                  ]}
                >
                  {pickupLocation || "Select pickup location"}
                </Text>
                <ChevronRight size={20} color={Colors.lightText} />
              </TouchableOpacity>
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Dropoff Location</Text>
              <TouchableOpacity 
                style={styles.locationSelector}
                onPress={() => setShowLocationPicker('dropoff')}
              >
                <MapPin size={20} color={dropoffLocation ? Colors.primary : Colors.lightText} />
                <Text 
                  style={[
                    styles.locationText,
                    dropoffLocation ? styles.locationSelected : null
                  ]}
                >
                  {dropoffLocation || "Select dropoff location"}
                </Text>
                <ChevronRight size={20} color={Colors.lightText} />
              </TouchableOpacity>
            </View>
          </View>
          
          {showLocationPicker && (
            <View style={styles.locationPickerContainer}>
              <Text style={styles.locationPickerTitle}>
                Select {showLocationPicker === 'pickup' ? 'Pickup' : 'Dropoff'} Location
              </Text>
              
              {packageLocations.map((location) => (
                <LocationItem
                  key={location.id}
                  name={location.name}
                  address={location.address}
                  onPress={() => handleLocationSelect(location.name)}
                />
              ))}
            </View>
          )}
        </ScrollView>
        
        <View style={styles.buttonContainer}>
          <ServiceButton 
            title="Send Package" 
            onPress={handleSendPackage}
            primary={true}
            style={styles.button}
          />
        </View>
      </SafeAreaView>
    </>
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
    paddingBottom: 100,
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  iconBackground: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 24,
  },
  formContainer: {
    paddingHorizontal: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: Colors.text,
  },
  textArea: {
    minHeight: 80,
    paddingTop: 12,
  },
  locationSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  locationText: {
    flex: 1,
    fontSize: 16,
    color: Colors.lightText,
    marginLeft: 8,
  },
  locationSelected: {
    color: Colors.text,
    fontWeight: '500',
  },
  locationPickerContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  locationPickerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  button: {
    width: '100%',
  },
});