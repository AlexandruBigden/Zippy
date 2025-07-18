import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Image } from 'expo-image';
import Colors from '@/constants/colors';

// This is a placeholder component for the map
// In a real app, you would use react-native-maps or a similar library
export default function MapView({ style }: { style?: any }) {
  if (Platform.OS === 'web') {
    // Simple placeholder for web
    return (
      <View style={[styles.container, style]}>
        <Image
          source="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?q=80&w=2000&auto=format&fit=crop"
          style={styles.mapImage}
          contentFit="cover"
        />
        <View style={styles.robotMarker}>
          <Image
            source="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=100&auto=format&fit=crop"
            style={styles.robotIcon}
            contentFit="cover"
          />
        </View>
      </View>
    );
  }

  // For mobile, we would use react-native-maps
  // This is a placeholder that looks like a map
  return (
    <View style={[styles.container, style]}>
      <Image
        source="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?q=80&w=2000&auto=format&fit=crop"
        style={styles.mapImage}
        contentFit="cover"
      />
      <View style={styles.robotMarker}>
        <Image
          source="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=100&auto=format&fit=crop"
          style={styles.robotIcon}
          contentFit="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    overflow: 'hidden',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  robotMarker: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 48,
    height: 48,
    marginLeft: -24,
    marginTop: -24,
    backgroundColor: 'white',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  robotIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});