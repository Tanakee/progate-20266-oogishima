import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ListItem } from '../../src/components/common';
import { colors, typography, spacing } from '../../src/theme/tokens';

export default function MypageScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.accountArea}>
        <Text style={styles.accountName}>アカウント名</Text>
      </View>
      <View style={styles.menu}>
        <ListItem label="通知設定" onPress={() => router.push('/mypage/notifications')} />
        <ListItem label="プライバシー" onPress={() => router.push('/mypage/privacy')} />
        <ListItem label="ヘルプ" onPress={() => router.push('/mypage/help')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray50,
  },
  accountArea: {
    backgroundColor: colors.white,
    padding: spacing[24],
    marginBottom: spacing[16],
    alignItems: 'center',
  },
  accountName: {
    fontSize: typography.size.navH3,
    fontWeight: typography.weight.semibold,
    color: colors.originGray,
  },
  menu: {
    backgroundColor: colors.white,
  },
});
