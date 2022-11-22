import { View, Text, Pressable, Dimensions } from 'react-native'
import React, { useState, useEffect, Fragment } from 'react'
import tw from 'twrnc'
import { useGameContext } from '../context/quizContext'
import { useAppState } from '../context/appStore'

const { width } = Dimensions.get('screen')

export default function QuizHeader() {

  const [selected, setSelected] = useState(false)
  const { isDark,isGameStarted } = useAppState()
  const { answer, questions, answerText, currentQuestionPosition } = useGameContext()

  return (
    <View style={[tw`flex-1 flex-row relative`, { overflow: 'hidden' }]}>
      <View style={[tw`flex-1 items-center justify-center absolute top-0 left-0 w-full h-full`, { width }]}>
        <View style={tw` flex-row items-center justify-center w-[80%] h-30`}>
          <View style={tw`flex-1 flex-row items-center justify-center`}>
            <View style={tw`w-20 h-20 items-center justify-center border ${isDark ? 'border-gray-200 bg-gray-300' : 'bg-gray-400'} rounded-xl  bg-opacity-30`}>
              <Text style={tw`font-bold text-lg ${isDark ? " text-black" : " text-white"}`}>{isGameStarted ? questions[currentQuestionPosition][0] : "?"}</Text>
            </View>
            <View style={tw`mx-2`}>
              <Text style={tw`text-red-500 font-bold`}>{isGameStarted ? questions[currentQuestionPosition][1].text : "?" }</Text>
            </View>
            <View style={tw`w-20 h-20 items-center justify-center border ${isDark ? 'border-gray-200 bg-gray-300' : 'bg-gray-400'} rounded-xl  bg-opacity-30`}>
              <Text style={tw`font-bold text-lg ${isDark ? " text-black" : " text-white"}`}>{isGameStarted ? questions[currentQuestionPosition][2] : "?"}</Text>
            </View>
            <View style={tw`mx-2`}>
              <Text style={tw`text-red-500 font-bold`}>=</Text>
            </View>
          </View>
          <Pressable
            onPress={() => setSelected(true)}
            style={tw`w-20 h-20 items-center justify-center border-2  border-${selected ? 'green' : 'gray'}-400 rounded-xl ${isDark ? 'bg-gray-100' : "bg-gray-400 bg-opacity-30"}`}>
            <Text style={tw`font-bold text-lg ${isDark ? " text-black" : " text-white"}`}>{answerText || "?"}</Text>
          </Pressable>
        </View>
      </View>
      {/* <View style={tw`flex-1 flex items-center justify-center`}>
        <Text style={tw`text-3xl font-bold text-gray-600`}>Game Over</Text>
      </View> */}
    </View>
  )
}