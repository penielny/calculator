import { View, Text, SafeAreaView, Animated } from 'react-native'
import React, { useRef, useState, useEffect, memo } from 'react'
import tw from 'twrnc'
import Gamekeys from '../component/Gamekeys'
import { useAppState } from '../context/appStore'
import { Entypo } from '@expo/vector-icons';
import QuizHeader from '../component/QuizHeader'
import { StatusBar } from 'expo-status-bar'
import { useGameContext } from '../context/quizContext'
import Emoji from '../component/Emoji'
import GameOverBoard from '../component/GameOverBoard'



function Game() {

    const { isGameStarted, isDark } = useAppState();


    const screenAnimatedScaleVale = useRef(new Animated.Value(0)).current;

    const { lives, score, checkAnswer, timer, setTimer, gameOver} = useGameContext()
    const [timerId, setTimerId] = useState(null)

    useEffect(() => {
        setTimer(100)
    }, [score])

    useEffect(() => {
        if (timer == 0 || timer < 0) {
            // TODO: check if answer was correct then reset the timer
            checkAnswer()
            setTimer(100)
        }
    }, [timer])

    useEffect(() => {

        let timerInterval = null;

        if (isGameStarted) {
            timerInterval = setInterval(() => {
                setTimer(prev => prev - 10)
            }, (1000 * 5 / 10))
            setTimerId(timerInterval)
        } else {
            clearInterval(timerId)
        }

    }, [isGameStarted])

    useEffect(() => {
        Animated.timing(screenAnimatedScaleVale, {
            toValue: 1,
            delay: 10,
            duration: 200,
            useNativeDriver: true
        }).start()
    }, [])


    return (<View style={tw`${isDark ? 'bg-white' : 'bg-black'} flex-1`}>

        <StatusBar hidden />
        <Animated.View style={[tw`flex-1`, {
            transform: [{ scale: screenAnimatedScaleVale }]
        }]}>
            <View style={tw`h-2/4 ${isDark ? "bg-white" : "bg-black"}`}>
                <SafeAreaView>
                    <View style={tw`flex-row justify-between px-7`}>
                        <View style={tw`flex-row `}>
                            <Text style={tw`${isDark ? "text-black" : "text-white"}`}>SCORE : </Text>
                            <Text style={tw`font-bold text-green-500 ${isDark ? "text-black" : "text-white"}`}>{score}</Text>
                        </View>
                        <View style={tw`w-2/4 flex items-center flex-row`}>
                            <Entypo name="stopwatch" size={16} style={tw`text-gray-400`} />
                            <View style={tw`flex-1 h-3 border mx-1 border-gray-200 rounded-xl`}>
                                <View style={[tw`bg-${timer < 50 ? 'red' : 'green'}-500 h-full rounded-xl`, { width: `${timer}%` }]}></View>
                            </View>
                        </View>
                        <View style={tw`flex-row`}>
                            <Text style={tw``}>???? </Text>
                            <Text style={tw`font-bold ${isDark ? "text-black" : "text-white"}`}>{lives}</Text>
                        </View>
                    </View>
                </SafeAreaView>
                <QuizHeader />
                {!gameOver ? <Emoji /> :
                    <GameOverBoard />}
            </View>
            <Gamekeys />

        </Animated.View>

    </View>
    )
}

export default memo(Game);