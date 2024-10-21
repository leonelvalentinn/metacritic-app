import { memo } from 'react'
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Score } from './Score'
import { Link } from 'expo-router'
import { styled } from 'nativewind'

const StyledPressable = styled(Pressable)

export const GameCard = ({ game }) => {
  return (
    <Link asChild href={`/${game.slug}`}>
      <StyledPressable className='active:opacity-70 border border-slate-700 active:border-slate-500 mb-4 p-2 rounded-md'>
        <View key={game.slug} className='flex-row gap-4'>
          <Image
            source={{ uri: game.image }}
            style={styles.image}
            className='w-20'
          />
          <View className='flex-shrink'>
            <Text style={styles.title}>{game.title}</Text>
            <Score score={game.score} maxScore={100} />
            <Text style={styles.description}>{game.description.slice(0, 100)}...</Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  )
}

const AnimatedGameCard = memo(
  ({ game, index }) => (
    console.log('render', index),
    <Animated.View>
      <GameCard game={game} />
    </Animated.View>
  ), 
  (prevProps, nextProps) => {
    return prevProps.game.slug === nextProps.game.slug
  }
)

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

AnimatedGameCard.displayName = 'AnimatedGameCard'

export default AnimatedGameCard