import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from '../../common';
import { colors, typography, spacing } from '../../../theme/tokens';

type Props = {
  name: string;
  date?: string;
  imageUri?: string;
  obtained?: boolean;
};

export function StampCard({ name, date, imageUri, obtained = false }: Props) {
  return (
    <Card style={styles.card}>
      <View style={styles.circleArea}>
        <View style={[styles.circle, !obtained && styles.circleUnobtained]}>
          {obtained && imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : null}
        </View>
      </View>
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
      {obtained && date ? <Text style={styles.date}>{date}</Text> : null}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 176,
    gap: spacing.xs,
    backgroundColor: colors.surface,
    padding: spacing.m,
  },
  circleArea: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.l,
  },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: 'rgba(51,51,51,0.06)',
    overflow: 'hidden',
  },
  circleUnobtained: {
    backgroundColor: colors.border,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: typography.labelBold.fontSize,
    fontWeight: typography.labelBold.fontWeight,
    color: colors.textPrimary,
  },
  date: {
    fontSize: typography.caption.fontSize,
    color: colors.textMuted,
  },
});
