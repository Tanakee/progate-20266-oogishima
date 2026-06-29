import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../src/components/common';
import { colors, typography, spacing } from '../src/theme/tokens';

export default function PhotoAdjustScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>写真調整画面</Text>
      <Button label="スタンプを押す画面へ" onPress={() => router.push('/stamp-press')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xxl,
  },
  title: {
    fontSize: typography.screenTitle.fontSize,
    fontWeight: typography.screenTitle.fontWeight,
    color: colors.textPrimary,
  },
});
