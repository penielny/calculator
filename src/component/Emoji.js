import { View, Animated, Image } from 'react-native'
import React, { useEffect, useState ,useRef} from 'react'
import tw from 'twrnc'
import { EMOJIS } from '../assets/emojis'
import { useGameContext } from '../context/quizContext'


export default function Emoji() {

  const { emojiState } = useGameContext()

  const [image, setImage] = useState(EMOJIS.ideal[0])

  const animatedScaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (emojiState === 0) {
      // TODO: pick random idle emoji
      let rand = Math.floor(Math.random() * EMOJIS.ideal.length);
      let image_ = EMOJIS.ideal[rand]
      setImage(image_)
    }
    if (emojiState === 1) {
      //TODO: pick random exciting emoji
      let rand = Math.floor(Math.random() * EMOJIS.answer.length);
      let image_ = EMOJIS.answer[rand]
      setImage(image_)
    }
    if (emojiState === -1) {
      // TODO: pick random unhappy emoji
      let rand = Math.floor(Math.random() * EMOJIS.wrong.length);
      let image_ = EMOJIS.wrong[rand];
      setImage(image_)
    }
  }, [emojiState])


  useEffect(() => {
    Animated.spring(animatedScaleValue,{
      toValue:1,
      delay:1,
      bounciness:10,
      useNativeDriver:true,
    }).start()
  }, [])
  

  return (
    <Animated.View style={[tw`flex-1 items-center justify-center`,{transform:[{scale:animatedScaleValue}]}]}>
      <View style={tw``}>
        <Image source={image} resizeMethod="scale" style={tw``} />
      </View>
    </Animated.View>
  )
}