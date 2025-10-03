import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Stack
          initialRouteName='(onboarding)'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='(onboarding)' />
          <Stack.Screen name='index' />
        </Stack>
      </SafeAreaView>
      <StatusBar
        style='auto'
        animated
        hideTransitionAnimation='fade'
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6bcff',
  },
});
