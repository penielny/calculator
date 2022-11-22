import { Pressable } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useAppState } from '../context/appStore'
import { useNavigation } from '@react-navigation/native';

export default function SpecialKey({ data }) {
    const { isGameStarted, isDark, setOpengame } = useAppState();
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => { setOpengame(false); navigation.navigate("LeaderBoard"); }}
            style={tw`bg-gray-100 bg-gray-100 flex-1 mx-1 rounded-xl items-center justify-center ${isDark ? '' : 'bg-gray-300 bg-opacity-20'}`}>
            {data.component}
        </Pressable>
    )
}