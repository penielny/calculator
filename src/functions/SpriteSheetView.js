import { Text, View, Animated, Image } from 'react-native'
import React, { Component } from 'react'
import tw from 'twrnc'



export default class SpriteSheetView extends Component {

    constructor(props) {
        super(props)

        for (const anim in this.props.anims) {
        
        }

        this.state = {
            time: new Animated.Value(1.0).current,
        }

    }

    play() {
        Animated.timing( this.state.time,{
            toValue:1,
            duration:100,
            useNativeDriver:true,
        }).start(()=>{})
    }

    render() {
        return (
            <View style={[tw`h-20 w-8 border w-full right-0 absolute bottom-0`, this.props.styles, { aspectRatio: 1, overflow: 'hidden',transform:[{scale:1}]}]}>
                <Animated.Image source={this.props.source} style={{ height: '100%', width: '100%' }} />
            </View>
        )
    }
}