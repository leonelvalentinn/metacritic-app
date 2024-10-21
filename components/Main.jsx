import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { getLatestGames } from '../lib/metacritic'
import AnimatedGameCard from './GameCard'
import { ScreenLayout } from './ScreenLayout'

export default function Main() {
  const [games, setGames] = useState([])
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getLatestGames(offset).then((games) => {
      setGames((oldGames) => [...oldGames, ...games])
      setLoading(false)
    })
  }, [offset])

  const nextPage = () => {
    if (loading) {
      return
    }
    setLoading(true)
    setOffset((oldOffset) => oldOffset + 24)
  }

  const onRefresh = () => {
    console.warn('Refresing')
    getLatestGames(0).then((games) => {
      setGames(games)
      setLoading(false)
    })
  }

  return (
    <ScreenLayout>
      {
        games.length === 0 ? (
          <ActivityIndicator color={'#fff'} size={'large'} />
        ) : (
          <FlatList
            data={games}
            keyExtractor={game => game.slug}
            onEndReached={nextPage}
            onEndReachedThreshold={3}
            renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
            ListFooterComponent={() => loading && <ActivityIndicator style={{ paddingBottom: 20 }} color={'#fff'} size={'large'} />}
            debug
            refreshing={loading}
            onRefresh={onRefresh}
            getItemLayout={(data, index) => ({
              length: 80,
              offset: 80 * index,
              index
            })}
          />
      )}
    </ScreenLayout>
  )
}
