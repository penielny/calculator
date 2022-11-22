import { View, Text, Pressable } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useAppState } from '../context/appStore';
export default function Keypad({ data, style }) {

    const { expressionToCal, setExpressionToCal,isDark } = useAppState();

    function equalsTo() {

    }

    return (
        <Pressable
            onPress={() => {
                setExpressionToCal(prev => [...prev, data])
            }}
            style={tw`${isDark ? "bg-gray-100 bg-opacity-50" :"bg-black bg-opacity-20"}  flex-1 items-center justify-center rounded-2xl m-1 h-full `}>
            <Text style={style}>{data.text}</Text>
        </Pressable>
    )
}