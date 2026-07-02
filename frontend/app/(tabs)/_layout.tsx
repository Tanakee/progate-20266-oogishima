import { Tabs } from "expo-router";
import { colors } from "../../src/theme/tokens";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
      }}
    >
      <Tabs.Screen name="album" options={{ title: "カメラ" }} />
      <Tabs.Screen name="album" options={{ title: "アルバム" }} />
      <Tabs.Screen name="mypage" options={{ title: "マイページ" }} />
    </Tabs>
  );
}
