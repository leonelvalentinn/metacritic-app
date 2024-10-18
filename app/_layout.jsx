import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Layout() {
  return (
    <SafeAreaProvider>
      <View className='bg-slate-800 items-center justify-center px-4'>
        <StatusBar style="auto" />
        <Slot />
      </View>
    </SafeAreaProvider>
  )
}