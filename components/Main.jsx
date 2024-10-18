import { useEffect, useState } from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native'
import { getLatestGames } from '../lib/metacritic'
import { useSafeAreaInsets } from 'react-native-safe-area-context' 
import { AnimatedGameCard } from './GameCard'
import { Logo } from './Logo'
import { Link } from 'expo-router'

export default function Main() {
  const [games, setGames] = useState([])
  const insets = useSafeAreaInsets()

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games)
    })
  }, [])
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ marginVertical: 10 }}>
        <Logo />
      </View>
      <Link href='/about' className='text-blue-500 text-xl'>
        About
      </Link>
      {
        games.length === 0 ? (
          <ActivityIndicator color={'#fff'} size={'large'} />
        ) : (
          <FlatList
            data={games}
            keyExtractor={game => game.slug}
            renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
          />
      )}
    </View>
  );
}
