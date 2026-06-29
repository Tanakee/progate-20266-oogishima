import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, radii, spacing } from '../../theme/tokens';

type Props = {
  label: string;
  color?: string;
};

export function Badge({ label, color = colors.prime500 }: Props) {
  return (
    <View style={[styles.badge, { backgroundColor: color + '22' }]}>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[8],
    borderRadius: radii.small,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: typography.size.caption,
    fontWeight: typography.weight.semibold,
  },
});
