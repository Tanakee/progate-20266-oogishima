import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="photo-adjust" options={{ headerShown: false }} />
        <Stack.Screen name="stamp-press" options={{ headerShown: false }} />
        <Stack.Screen name="stamp-done" options={{ title: 'スタンプを押しました' }} />
        <Stack.Screen name="mypage/notifications" options={{ headerShown: false }} />
        <Stack.Screen name="mypage/privacy" options={{ headerShown: false }} />
        <Stack.Screen name="mypage/help" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
