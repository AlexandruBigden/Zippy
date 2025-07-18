import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { ChevronRight, Settings, CreditCard, Bell, HelpCircle, LogOut } from 'lucide-react-native';
import Colors from '@/constants/colors';

export default function ProfileScreen() {
  const menuItems = [
    {
      icon: <Settings size={24} color={Colors.text} />,
      title: 'Settings',
      onPress: () => console.log('Settings pressed'),
    },
    {
      icon: <CreditCard size={24} color={Colors.text} />,
      title: 'Payment Methods',
      onPress: () => console.log('Payment Methods pressed'),
    },
    {
      icon: <Bell size={24} color={Colors.text} />,
      title: 'Notifications',
      onPress: () => console.log('Notifications pressed'),
    },
    {
      icon: <HelpCircle size={24} color={Colors.text} />,
      title: 'Help & Support',
      onPress: () => console.log('Help & Support pressed'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileHeader}>
          <Image
            source="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
            style={styles.profileImage}
            contentFit="cover"
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Alex Johnson</Text>
            <Text style={styles.profileEmail}>alex.johnson@example.com</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </View>
          <View style={[styles.statItem, styles.statBorder]}>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>Packages</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>$120</Text>
            <Text style={styles.statLabel}>Saved</Text>
          </View>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.menuItem}
              onPress={item.onPress}
            >
              <View style={styles.menuIconContainer}>
                {item.icon}
              </View>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <ChevronRight size={20} color={Colors.lightText} />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color={Colors.error} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>Version 1.0.0</Text>
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.cardBackground,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: Colors.lightText,
  },
  editButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: Colors.cardBackground,
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.primary,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 24,
  },
  statItem: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  statBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.border,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.lightText,
  },
  menuContainer: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuTitle: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.error,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.error,
    marginLeft: 8,
  },
  versionText: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.lightText,
  },
});