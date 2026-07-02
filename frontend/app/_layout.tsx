import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'カメラ' }} />
        <Stack.Screen name="stamp-press" options={{ title: 'スタンプを押す' }} />
        <Stack.Screen name="stamp-done" options={{ title: 'スタンプを押しました' }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
