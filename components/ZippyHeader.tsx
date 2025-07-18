import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Bell } from 'lucide-react-native';
import Colors from '@/constants/colors';

type ZippyHeaderProps = {
  title?: string;
  showNotification?: boolean;
  onNotificationPress?: () => void;
};

export default function ZippyHeader({ 
  title, 
  showNotification = true,
  onNotificationPress 
}: ZippyHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image
          source="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=100&auto=format&fit=crop"
          style={styles.logo}
          contentFit="cover"
        />
        <Text style={styles.logoText}>
          {title || "Zippy"}
        </Text>
      </View>
      
      {showNotification && (
        <TouchableOpacity 
          style={styles.notificationButton}
          onPress={onNotificationPress}
        >
          <Bell size={24} color={Colors.text} />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.secondary,
    borderWidth: 2,
    borderColor: 'white',
  },
});