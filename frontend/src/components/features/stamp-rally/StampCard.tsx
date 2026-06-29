import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../../common';
import { colors, typography, spacing } from '../../../theme/tokens';

type Props = {
  name: string;
  obtained?: boolean;
};

export function StampCard({ name, obtained = false }: Props) {
  return (
    <Card>
      <View style={[styles.stamp, obtained && styles.obtained]}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  stamp: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  obtained: {
    backgroundColor: colors.border,
  },
  name: {
    fontSize: typography.caption.fontSize,
    color: colors.textPrimary,
    textAlign: 'center',
    marginTop: spacing.s,
  },
});
