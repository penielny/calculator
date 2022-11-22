import { View, Text , Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import SpriteSheetView from '../../functions/SpriteSheetView'
import { APP_CONFIG } from '../../config'
import { GAME_COSTUMES } from '../../assets/characters'

export default function Obstacle({ position }) {
  return (
    <View style={[tw` border absolute`, { height: 60, width: 30, bottom: position.y * 60, right: position.x * 30 }]}>

    </View>
    // <SpriteSheetView 
    // source={require('./../../assets/characters/zombie-walk.png')} 
    // cols={10}
    // rows={1}
    // anims={[
    //   {name: 'zombie-walk',}
    // ]}
    // />
  )
}


export function ObstacleTest({ position, size, color, ...prop }) {


  return (
    <View style={[tw`absolute border border-${color}-500`, { height: size.height, width: size.width, bottom: position.y + APP_CONFIG.GAME.floorHeight - size.height / 2, left: position.x - size.width / 2 }]}>
      <Image style={[tw``,{height: size.height, width: size.width}]} source={GAME_COSTUMES.tree[0]} />
    </View>

  )
}