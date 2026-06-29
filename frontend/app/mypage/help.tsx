import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../../src/components/common';
import { colors, typography, spacing } from '../../src/theme/tokens';

export default function HelpScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ヘルプ</Text>
      <Button label="戻る" variant="ghost" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray50,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[24],
  },
  title: {
    fontSize: typography.size.sectionH3,
    fontWeight: typography.weight.semibold,
    color: colors.originGray,
  },
});
