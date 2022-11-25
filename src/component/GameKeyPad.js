import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useGameContext } from '../context/quizContext'
import { useAppState } from '../context/appStore'

export default function GameKeyPad({ data, color }) {

    const { setAnswer,  } = useGameContext()
    const { isGameStarted,isDark } = useAppState();
    return (
        <TouchableOpacity
            disabled={!isGameStarted}
            onPress={() => {
                if (isGameStarted && (data.text != "")) {
                    setAnswer(prev => [...prev, data])
                }
            }
            }
            style={tw`bg-gray-100 bg-gray-100 flex-1 mx-1 rounded-xl items-center justify-center ${isDark ? '' : 'bg-gray-300 bg-opacity-20'}`}>
            <Text style={[tw`text-center text-lg font-semibold font-bold text-opacity-30`, { color: isDark ? 'black' : 'white' }]}>{data.text}</Text>
        </TouchableOpacity>
    )
}