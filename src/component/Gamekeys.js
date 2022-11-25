import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import GameKeyPad from './GameKeyPad'
import { useAppState } from '../context/appStore'
import { Ionicons } from '@expo/vector-icons';
import { useGameContext } from '../context/quizContext'
import SpecialKey from './SpecialKeyPad'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function Gamekeys() {

    const {  setIsGameStarted, isGameStarted, isDark } = useAppState()
    const { setGameOver } = useGameContext()
    const navigation = useNavigation();
    return (
        <View style={tw`flex-1 bg-white border-t ${isDark ? 'border-gray-100' : 'border-gray-700'}`}>
            <View style={tw`flex-row items-center justify-center py-5 ${isDark ? 'bg-white' : 'bg-black'}`}>
                <TouchableOpacity
                    onPress={() => { setIsGameStarted(false);setGameOver(false); navigation.goBack(); /* setOpengame(false)*/ }}
                    style={tw`flex-1 border-r border-gray-200`}>
                    <Text style={tw`text-center text-red-600 font-bold`}>Quit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setIsGameStarted(prev => !prev)}
                    style={tw`flex-1 items-center justify-center`}>
                    <Ionicons name={isGameStarted ? "stop" : "play"} size={24} color={isDark ? "dark" : "grey"} />
                </TouchableOpacity>
            </View>
            <View style={tw`flex-1 px-2 pb-2 pt-3 ${isDark ? 'bg-white' : 'bg-black'}`}>
                <View style={tw`flex-1 flex-row mb-2 justify-between`}>
                    <GameKeyPad data={{ text: '7', value: '7' }} />
                    <GameKeyPad data={{ text: '8', value: '8' }} />
                    <GameKeyPad data={{ text: '9', value: '9' }} />
                    <GameKeyPad data={{ text: '', value: '' }} />
                </View>
                <View style={tw`flex-1 flex-row mb-2 justify-between`}>
                    <GameKeyPad data={{ text: '4', value: '4' }} />
                    <GameKeyPad data={{ text: '5', value: '5' }} />
                    <GameKeyPad data={{ text: '6', value: '6' }} />
                    <GameKeyPad data={{ text: '', value: '' }} />
                </View>
                <View style={tw`flex-1 flex-row mb-2 justify-between`}>
                    <GameKeyPad data={{ text: '1', value: '1' }} />
                    <GameKeyPad data={{ text: '2', value: '2' }} />
                    <GameKeyPad data={{ text: '3', value: '3' }} />
                    <GameKeyPad data={{ text: '-', value: '-1*' }} />
                </View>
                <View style={tw`flex-1 flex-row mb-1 justify-between`}>
                    <GameKeyPad data={{ text: 'C', value: 'BACK_SPACE' }} />
                    <GameKeyPad data={{ text: '0', value: '0' }} />
                    <GameKeyPad data={{ text: '.', value: '.' }} />
                    <GameKeyPad data={{ text: '=', value: '=' }} />
                </View>
            </View>
        </View>
    )
}