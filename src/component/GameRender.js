import { View, Text, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import tw from 'twrnc'
import { APP_CONFIG } from '../config'
import { useAppState } from '../context/appStore'
const { MAX_WIDTH, MAX_HEIGHT } = APP_CONFIG


export default function GameRender() {

    const objectRef = useRef().current;
    const playerRef = useRef().current;

    const objectAnimateX = useRef(new Animated.Value(0));
    const playerAnimateY = useRef(new Animated.Value(0)).current;

    const { isGameStarted, setIsGameStarted } = useAppState()

    // setting up right to left animation
    const objectAnimation = Animated.timing(objectAnimateX.current, {
        toValue: -1 * MAX_WIDTH,
        duration: 5000,
        useNativeDriver: true
    })

    // setting up up and down animation for player
    const playerAnimation = Animated.timing(playerAnimateY, {
        toValue: -1 * MAX_HEIGHT / 4,
        duration: 5000,
        useNativeDriver: true
    })



    useEffect(() => {
        if (isGameStarted) {
            objectAnimation.start((complete) => {
                objectAnimation.reset()
            });
        } else {
            objectAnimation.stop();
        }

    }, [isGameStarted])


    useEffect(() => {
        console.log(objectAnimateX.current._value);
    }, [objectAnimateX])



    return (
        <View style={tw`flex-1 bg-black relative`}>

            {/* player */}
            <Animated.View ref={objectRef} style={tw`h-10 w-10 border border-green-500 absolute bottom-4`} />

            {/* obstacle */}
            <Animated.View ref={playerRef} style={[tw`h-10 w-10 border border-green-500 absolute bottom-4 right-0`, { transform: [{ translateX: objectAnimateX.current }] }]} />

            {/* floor */}
            <View style={tw`h-4 w-full border border-green-500 absolute bottom-0 left-0`} />

        </View>
    )
}