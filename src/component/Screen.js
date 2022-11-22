import { View, Text } from 'react-native'
import React from 'react'
import { useAppState } from '../context/appStore'
import tw from 'twrnc';

export default function Screen() {
    const { expressionToCal, setExpressionToCal,answer ,isDark} = useAppState()
    return (
        <View style={tw`h-1/3 bg-white items-end p-5 pb-10 ${isDark ?'bg-white':'bg-black'}`}>
            <View style={tw`flex-1`}></View>
            <View style={tw`flex flex-row flex-wrap mb-4`}>
                {expressionToCal.map((data, index) => {
                    if (parseInt(data.value)==0 || parseInt(data.value)>0) return <Text key={index} style={tw`text-xl font-bold ${isDark ?'text-black':'text-white'}`}>{data.text}</Text>;
                    return <Text key={index} style={tw`text-xl font-bold text-red-500 mx-2 `}>{data.text}</Text>;
                })}
            </View>
           {answer && <Text style={tw`text-5xl font-bold mx-1 ${isDark ?'text-black':'text-white'}`}>{answer}</Text>}
        </View>
    )
}