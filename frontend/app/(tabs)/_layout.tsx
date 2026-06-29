import { Tabs } from 'expo-router';
import { colors } from '../../src/theme/tokens';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.prime500,
        tabBarInactiveTintColor: colors.gray500,
      }}
    >
      <Tabs.Screen name="album" options={{ title: 'アルバム' }} />
      <Tabs.Screen name="mypage" options={{ title: 'マイページ' }} />
    </Tabs>
  );
}
