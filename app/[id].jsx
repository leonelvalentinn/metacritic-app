import { Stack } from 'expo-router'
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { getGameDetails } from '../lib/metacritic'
import { ScreenLayout } from '../components/ScreenLayout'
import { Score } from '../components/Score'

export default function Detail() {
  const { id } = useLocalSearchParams()
  const [gameInfo, setGameInfo] = useState(null)

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo)
    }
  }, [])
  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#ffee00' },
          headerTintColor: '#242424',
          headerLeft: () => {},
          headerTitle: id,
          headerRight: () => {}
        }}
      />
      <View>
        {
          gameInfo === null ? (
            <ActivityIndicator color={'#fff'} size={'large'} />
          ) : (
            <ScrollView>
              <View className='justify-center items-center mt-4 flex-1'>
                <Image className="mb-4 rounded-md" source={{ uri: gameInfo.img }} style={{ width: 214, height: 294 }} />
                <Score score={gameInfo.score} maxScore={100} />
                <Text Text className='text-white font-bold mb-8 text-2xl'>{gameInfo.title}</Text>
                <Text className='text-white/70 mt-4 text-left mb-8 text-base'>
                  {gameInfo.description}
                </Text>
              </View>
            </ScrollView>
          )
        }
      </View>
    </ScreenLayout>
  )
}