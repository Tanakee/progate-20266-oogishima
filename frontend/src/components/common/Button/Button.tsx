import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { colors, typography, radii, spacing } from '../../../theme/tokens';

type Variant = 'primary' | 'secondary' | 'ghost';

type Props = {
  label: string;
  onPress: () => void;
  variant?: Variant;
  disabled?: boolean;
  icon?: React.ReactNode;
};

export function Button({ label, onPress, variant = 'primary', disabled = false, icon }: Props) {
  return (
    <TouchableOpacity
      style={[styles.base, styles[variant], disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        {icon}
        <Text style={[styles.label, styles[`${variant}Label`]]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.l,
    paddingHorizontal: spacing.xxxl,
    borderRadius: radii.button,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  disabled: {
    opacity: 0.4,
  },
  label: {
    fontSize: typography.buttonLabel.fontSize,
    fontWeight: typography.labelBold.fontWeight,
  },
  primaryLabel: {
    color: colors.white,
  },
  secondaryLabel: {
    color: colors.primary,
  },
  ghostLabel: {
    color: colors.textPrimary,
  },
});
