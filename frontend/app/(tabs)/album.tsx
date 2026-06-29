import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { StampCard } from '../../src/components/features/stamp-rally/StampCard';
import { Button } from '../../src/components/common';
import { colors, typography, spacing } from '../../src/theme/tokens';

const PLACEHOLDER_STAMPS = [
  { id: '1', name: 'スタンプ1', obtained: true },
  { id: '2', name: 'スタンプ2', obtained: false },
  { id: '3', name: 'スタンプ3', obtained: true },
  { id: '4', name: 'スタンプ4', obtained: false },
];

export default function AlbumScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>アルバム</Text>
      <Button label="スタンプ詳細へ" onPress={() => router.push('/stamp-detail')} />
      <FlatList
        data={PLACEHOLDER_STAMPS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => <StampCard name={item.name} obtained={item.obtained} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  title: {
    fontSize: typography.screenTitle.fontSize,
    fontWeight: typography.screenTitle.fontWeight,
    color: colors.textPrimary,
    padding: spacing.l,
  },
  list: {
    padding: spacing.l,
    gap: spacing.m,
  },
  row: {
    gap: spacing.m,
  },
});
