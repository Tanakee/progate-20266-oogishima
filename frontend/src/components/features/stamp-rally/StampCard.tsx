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
    backgroundColor: colors.gray100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  obtained: {
    backgroundColor: colors.prime100,
  },
  name: {
    fontSize: typography.size.caption,
    color: colors.originGray,
    textAlign: 'center',
    marginTop: spacing[8],
  },
});
