import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { StampCard } from '../../src/components/features/stamp-rally/StampCard';
import { colors, typography, spacing } from '../../src/theme/tokens';

const PLACEHOLDER_STAMPS = [
  { id: '1', name: 'スタンプ1', obtained: true },
  { id: '2', name: 'スタンプ2', obtained: false },
  { id: '3', name: 'スタンプ3', obtained: true },
  { id: '4', name: 'スタンプ4', obtained: false },
];

export default function AlbumScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>アルバム</Text>
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
    backgroundColor: colors.gray50,
  },
  title: {
    fontSize: typography.size.sectionH3,
    fontWeight: typography.weight.semibold,
    color: colors.originGray,
    padding: spacing[16],
  },
  list: {
    padding: spacing[16],
    gap: spacing[12],
  },
  row: {
    gap: spacing[12],
  },
});
