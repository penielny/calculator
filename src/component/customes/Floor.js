import { View, Text,Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import SpriteSheetView from '../../functions/SpriteSheetView'
import { GAME_COSTUMES } from '../../assets/characters'

export  function Floor({position,size,...prop}) {

  
    return (
      <View style={[tw`  border bg-gray-100 border-white absolute`, { height: size.height, width: size.width, bottom:position.y*size.height, left: position.x *size.width }]}>
      <Image source={GAME_COSTUMES.ground} style={[tw``,{height: size.height, width: size.width}]}/>
      </View>
  
    )
  }