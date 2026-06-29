import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../../theme/tokens';

type Props = {
  label: string;
  onPress?: () => void;
  rightElement?: React.ReactNode;
};

export function ListItem({ label, onPress, rightElement }: Props) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={0.7} disabled={!onPress}>
      <Text style={styles.label}>{label}</Text>
      {rightElement && <View style={styles.right}>{rightElement}</View>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing[16],
    paddingHorizontal: spacing[16],
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray100,
  },
  label: {
    fontSize: typography.size.body,
    fontWeight: typography.weight.regular,
    color: colors.originGray,
  },
  right: {
    marginLeft: spacing[8],
  },
});
