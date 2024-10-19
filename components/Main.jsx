import { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, FlatList, Pressable } from 'react-native'
import { getLatestGames } from '../lib/metacritic'
import { AnimatedGameCard } from './GameCard'
import { ScreenLayout } from './ScreenLayout'

export default function Main() {
  const [games, setGames] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    getLatestGames(offset).then((games) => {
      setGames(games)
    })
  }, [offset])
  return (
    <ScreenLayout>
      {
        games.length === 0 ? (
          <ActivityIndicator color={'#fff'} size={'large'} />
        ) : (
          <FlatList
            data={games}
            keyExtractor={game => game.slug}
            renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
            ListFooterComponent={() => <Pressable onPress={() => setOffset((oldOffset) => {})}>Cargar mas</Pressable>}
          />
      )}
    </ScreenLayout>
  );
}
