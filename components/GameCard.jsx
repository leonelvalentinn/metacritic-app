import { useEffect, useRef } from 'react'
import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import { Score } from './Score'

export const GameCard = ({ game }) => {
  return (
    <View key={game.slug} className='flex-row mb-8 gap-4'>
      <Image
        source={{ uri: game.image }}
        style={styles.image}
        className='w-20'
      />
      <View>
        <Text style={styles.title}>{game.title}</Text>
        <Score score={game.score} maxScore={100} />
        <Text style={styles.description}>{game.description.slice(0, 100)}...</Text>
      </View>
    </View>
  )
}

export const AnimatedGameCard = ({ game, index }) => {
  const opacity = useRef(new Animated.Value(0)).current
  
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true
    }).start()
  }, [opacity, index])

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: {

  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#eee'
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green'
  }
})
