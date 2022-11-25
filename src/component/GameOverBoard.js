import { View, Text, Animated } from 'react-native'
import React from 'react'
import { useGameContext } from '../context/quizContext'
import tw from 'twrnc'

export default function GameOverBoard() {
  const { highScoreLable, lastscore } = useGameContext()
  return (
    <View style={tw`flex-1 px-10 py-2`}>
      <View style={tw`flex-1  rounded-xl py-5`}>
        <Text style={tw`text-white text-center font-bold text-xl`}>Game Over</Text>
        <View style={tw`mt-4`}>
          <Text style={tw`text-white text-center  text-xl`}>Score : {lastscore}</Text>
          <Text style={tw`text-white text-center  text-xl`}>High Score : {highScoreLable}</Text>
        </View>
      </View>
    </View>
  )
}