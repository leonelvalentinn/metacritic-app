import { IconInfoCircleFilled } from '@tabler/icons-react-native'
import { Link, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image, Pressable, View } from 'react-native'

export default function Layout() {

  return (
    <View className='flex-1'>
      <StatusBar style="auto" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: '#334155' },
        headerTintColor: 'white',
        headerTitle: '',
        headerLeft: () => <Image source={{ uri: 'https://11bitstudios.com/wp-content/uploads/2021/03/1280px-Metacritic_logo.svg-1.png' }} width={200} height={100} style={{ resizeMode: 'contain' }} />,
        headerRight: () => (
          <Link href='/about' asChild>
            <Pressable>
              <IconInfoCircleFilled color='white' />
            </Pressable>
          </Link>
        )
      }} />
    </View>
  )
}
