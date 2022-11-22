import { View, Text, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import Toggle from '../component/Toggle'
import Screen from '../component/Screen'
import Keys from '../component/Keys'
import { useAppState } from '../context/appStore'
import tw from 'twrnc';

export default function Calculator() {
    const { isDark, setIsDark } = useAppState()
    return (
        <View style={tw`flex-1`}>
            <StatusBar barStyle={isDark ? "dark-content" : "light-content"} />
            <View style={tw`flex-1 ${isDark ? 'bg-white' : 'bg-black'}`}>
                <View style={tw`w-full flex-row items-center justify-center pb-3`}>
                    <SafeAreaView>
                        <Toggle />
                    </SafeAreaView>
                </View>
                <View style={tw`flex-1`}>
                    <Screen />
                    <Keys />
                </View>
            </View>
        </View>
    )
}