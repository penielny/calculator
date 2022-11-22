import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AnimatedSprite from 'react-native-animated-sprite'
import { APP_CONFIG } from '../../config'
// import SpriteSheet from 'rn-sprite-sheet';

export default function Player({ position, }) {

    return (
        <View style={[tw` absolute`, { height: 60, width: 30, bottom: position.y * 60, left: position.x * 30 }]}>
            {/* <AnimatedSprite
     
            /> */}
        </View>
    )
}



export function PlayerTest({ size, position,color, ...props }) {

    return (
        <View style={[tw` absolute border border-${color}-500`, { height: size.height, width: size.width, bottom: position.y+APP_CONFIG.GAME.floorHeight - size.height / 2, left: position.x - size.width / 2 }]}>

        </View>
    )
}