import { View, Text } from 'react-native'
import React from 'react'
import Keypad from './Keypad'
import tw from 'twrnc';
import { useAppState } from '../context/appStore';
export default function Keys() {
    const { isDark } = useAppState();
     
    return (
        <View style={tw`flex-1 ${isDark ? "bg-gray-50 border border-gray-100 " : 'bg-gray-50 bg-opacity-20'} rounded-3xl  px-2 py-4`}>
            <View style={tw`flex-row w-full justify-between items-center flex-1 mb-2`}>
                <Keypad style={tw`text-xl font-semibold text-green-500 `} data={{ text: 'AC', value: 'CLEAR_SCREEN' }} />
                <Keypad style={tw`text-2xl font-semibold text-green-500`} data={{ text: 'C', value: 'C' }} />
                <Keypad style={tw`text-2xl font-semibold text-green-500`} data={{ text: '%', value: '/100' }} />
                <Keypad style={tw`text-3xl font-semibold text-red-500`} data={{ text: '÷', value: '/' }} />
            </View>
            <View style={tw`flex-row w-full justify-between items-center flex-1 mb-2 `}>
                <Keypad style={tw`text-xl font-semibold  ${isDark ? " text-black":" text-white"}`} data={{ text: '7', value: "7" }} />
                <Keypad style={tw`text-xl font-semibold ${isDark ? " text-black":" text-white"}`} data={{ text: '8', value: "8" }} />
                <Keypad style={tw`text-xl font-semibold ${isDark ? " text-black":" text-white"}`} data={{ text: '9', value: "9" }} />
                <Keypad style={tw`text-3xl font-semibold text-red-500`} data={{ text: '×', value: '*' }} />
            </View>
            <View style={tw`flex-row w-full justify-between items-center flex-1 mb-2 `}>
                <Keypad style={tw`text-xl font-semibold ${isDark ? " text-black":" text-white"}`} data={{ text: '4', value: "4" }} />
                <Keypad style={tw`text-xl font-semibold ${isDark ? " text-black":" text-white"}`} data={{ text: '5', value: "5" }} />
                <Keypad style={tw`text-xl font-semibold ${isDark ? " text-black":" text-white"}`} data={{ text: '6', value: "6" }} />
                <Keypad style={tw`text-3xl font-semibold text-red-500`} data={{ text: '-', value: '-' }} />
            </View>
            <View style={tw`flex-row w-full justify-between items-center flex-1  mb-2`}>
                <Keypad style={tw`text-xl font-semibold ${isDark ? " text-black":" text-white"}`} data={{ text: '3', value: "3" }} />
                <Keypad style={tw`text-xl font-semibold ${isDark ? " text-black":" text-white"}`} data={{ text: '2', value: "2" }} />
                <Keypad style={tw`text-xl font-semibold ${isDark ? " text-black":" text-white"}`} data={{ text: '1', value: "1" }} />
                <Keypad style={tw`text-3xl font-semibold text-red-500`} data={{ text: '+', value: '+' }} />
            </View>
            <View style={tw`flex-row w-full justify-between items-center flex-1 mb-2 `}>
                <Keypad data={{ text: '', value: '' }} />
                <Keypad style={tw`text-xl font-semibold ${isDark ? " text-black":" text-white"}`} data={{ text: '0', value: "0" }} />
                <Keypad style={tw`text-5xl font-semibold ${isDark ? " text-black":" text-white"}`} data={{ text: '.', value: '.' }} />
                <Keypad style={tw`text-3xl font-semibold text-red-500`} data={{ text: '=', value: '=' }} />
            </View>
        </View>
    )
}