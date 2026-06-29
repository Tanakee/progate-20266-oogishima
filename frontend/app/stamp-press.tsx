import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../src/components/common';
import { colors, typography, spacing } from '../src/theme/tokens';

export default function StampPressScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>スタンプを押す画面</Text>
      <Button label="押す" onPress={() => router.push('/stamp-done')} />
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
