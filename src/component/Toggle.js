import { View, TouchableOpacity, Vibration, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import tw from 'twrnc';
import { useAppState } from '../context/appStore';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Toggle({ openGameModeModal }) {
    const { isDark, setIsDark } = useAppState()

    return (
        <View style={tw`flex-row items-center justify-center bg-gray-100 px-4 py-2 rounded-2xl ${isDark ? 'bg-gray-100' : 'bg-gray-800'} `}>
            {!isDark ? <TouchableOpacity onPress={() => setIsDark(true)}>
                <Ionicons name={isDark ? 'sunny-outline' : "sunny"} size={24} style={tw`${!isDark ? 'text-gray-100' : 'text-orange-400'}`} />
            </TouchableOpacity> :
                <TouchableOpacity onPress={() => setIsDark(false)} style={tw``}>
                    <Ionicons name={!isDark ? "moon-outline" : "moon"} size={20} style={tw`${isDark ? 'text-gray-500' : 'text-orange-400'}`} />
                </TouchableOpacity>}
            <TouchableOpacity
                onPress={() => { openGameModeModal() }}
                style={tw`ml-4`}>
                <MaterialCommunityIcons name="gamepad-circle-down" size={24} style={tw`text-gray-400`} />
            </TouchableOpacity>
        </View>
    )
}