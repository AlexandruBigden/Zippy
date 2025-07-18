import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Colors from '@/constants/colors';

type ServiceButtonProps = {
  title: string;
  onPress: () => void;
  primary?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function ServiceButton({ 
  title, 
  onPress, 
  primary = true, 
  style, 
  textStyle 
}: ServiceButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        primary ? styles.primaryButton : styles.secondaryButton,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text 
        style={[
          styles.buttonText,
          primary ? styles.primaryText : styles.secondaryText,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  primaryButton: {
    backgroundColor: Colors.primary,
  },
  secondaryButton: {
    backgroundColor: Colors.secondary,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: 'white',
  },
});