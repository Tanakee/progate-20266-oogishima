import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { InstructionSheet } from './InstructionSheet';
import { colors } from '../../../../theme/tokens';

const meta = {
  title: 'features/camera/InstructionSheet',
  component: InstructionSheet,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: colors.textPrimary }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { visible: true },
} satisfies Meta<typeof InstructionSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
