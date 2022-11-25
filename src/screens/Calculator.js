import { View, Text, StatusBar, SafeAreaView, Modal, Pressable, TouchableOpacity, Animated,Vibration } from 'react-native'
import React, { useState, useRef } from 'react'
import Toggle from '../component/Toggle'
import Screen from '../component/Screen'
import Keys from '../component/Keys'
import { useAppState } from '../context/appStore'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native'

export default function Calculator() {
    const { isDark } = useAppState()
    const [gameModeAlert, setGameModeAlert] = useState(false)
    const navigation = useNavigation();

    const gameModeModalY = useRef(new Animated.Value(0)).current



    function openGameModeModal() {
        setGameModeAlert(true)
        Vibration.vibrate()
        Animated.spring(gameModeModalY, {
            toValue: 120,
            bounciness: 10,
            velocity: 10,
            useNativeDriver: true
        }).start();

    }


    function closeGameModeModal() {
        Animated.spring(gameModeModalY, {
            toValue: -180,
            bounciness: 10,
            velocity: 10,
            useNativeDriver: true
        }).start(() => setGameModeAlert(false));

    }


    return (
        <View style={tw`flex-1`}>
            <StatusBar barStyle={isDark ? "dark-content" : "light-content"} />
            <View style={tw`flex-1 ${isDark ? 'bg-white' : 'bg-black'}`}>
                <View style={tw`w-full flex-row items-center justify-center pb-3`}>
                    <SafeAreaView>
                        <Toggle openGameModeModal={openGameModeModal} />
                    </SafeAreaView>
                </View>
                <View style={tw`flex-1`}>
                    <Screen />
                    <Keys />
                </View>
            </View>
            <Modal
                visible={gameModeAlert}
                style={tw`flex-1 bg-green-100 items-center justify-center`}
                transparent
            >

                <View style={tw`flex-1 p-10`}>
                    <SafeAreaView>
                        <Animated.View
                            style={[
                                tw` absolute -top-10 left-0 w-full`,
                                {
                                    transform: [{
                                        translateY: gameModeModalY
                                    }]
                                }]}>
                            <View style={tw`${isDark ? 'bg-white' : 'bg-black border border-gray-600'} rounded-xl shadow-lg`}>
                                <View style={tw`p-5`}>
                                    <Text style={tw`${isDark ? "text-black" : "text-white"} text-center font-bold text-lg mb-2`}>Game Mode</Text>
                                    <Text style={tw`text-center text-gray-500`}>Are you sure you want to continue to game mode ?</Text>
                                </View>
                                <View style={tw`flex-row items-center border-t ${isDark ? 'border-gray-100' : 'border-gray-700'}`}>
                                    <Pressable
                                        onPress={() => closeGameModeModal()}
                                        style={tw`flex-1 items-center justify-center py-5 border-r ${isDark ? 'border-gray-100' : 'border-gray-700'}`}>
                                        <Text style={tw`${isDark ? 'text-black' : 'text-gray-500'} font-bold`}>Cancel</Text>
                                    </Pressable>
                                    <TouchableOpacity
                                        onPress={() => { setGameModeAlert(false); navigation.navigate("Game") }}
                                        style={tw`flex-1 items-center justify-center py-5`}>
                                        <Text style={tw`text-green-500 font-bold`}>Play now</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </Animated.View>
                    </SafeAreaView>

                </View>

            </Modal>
        </View>
    )
}