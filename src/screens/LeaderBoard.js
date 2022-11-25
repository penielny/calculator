import { View, Text, TouchableOpacity, SafeAreaView ,Image} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const UserOne = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80";
const UserTwo = "https://images.unsplash.com/photo-1624574337423-7ea725c5540c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80";
const UserThree = "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80";



export default function LeaderBoard() {
    const navigation = useNavigation();
    return (
        <View style={tw`flex-1 bg-green-500`}>
            <View style={tw`flex-1 bg-black absolute top-0 left-0 w-full h-full bg-opacity-80`} />
            <View>
                <View style={tw``}>
                    <SafeAreaView>
                        <View style={tw`flex-row items-center justify-between p-3 px-7`}>
                            <TouchableOpacity onPress={() =>navigation.goBack()}>
                                <MaterialCommunityIcons name="chevron-left" size={30} style={tw`text-green-100`} />
                            </TouchableOpacity>
                            <Text style={tw`text-xl text-green-100`}>LeaderBoard</Text>
                            <View style={tw``} />
                        </View>
                    </SafeAreaView>
                    <View style={tw`flex-row justify-between items-center p-5 px-13`}>
                        <TouchableOpacity style={tw`items-center justify-center py-4`}>
                            <Text style={tw`text-green-100 font-semibold`}>Today</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`bg-green-100 bg-opacity-30 rounded-3xl px-8 items-center justify-center py-3`}>
                            <Text style={tw`text-green-100 font-semibold`}>Today</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw` items-center justify-center py-4`}>
                            <Text style={tw`text-green-100 font-semibold`}>Today</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={tw`flex-row items-center justify-center relative mt-10  min-h-1/3`}>
                            <View style={tw`h-28 w-28 rounded-full bg-yellow-500 absolute right-16 border-green-600 border-2`}>
                                <Image source={{uri:UserOne}}  style={tw`h-full w-full rounded-full`} />
                            </View>
                            <View style={tw`h-28 w-28 rounded-full bg-yellow-500 absolute left-16 border-green-600 border-2`}>
                                <Image source={{uri:UserTwo}}  style={tw`h-full w-full rounded-full`} />
                            </View>
                            <View style={tw`h-30 w-30 rounded-full bg-yellow-500 absolute top-1 border-green-400 border-4 blur-20`}>
                                <Image source={{uri:UserThree}}  style={tw`h-full w-full rounded-full`} />
                            </View>
                            <Image style={tw`h-10 w-10 absolute -top-8`} source={require('./../assets/crown.png')} />
                    </View>
                </View>
            </View>


        </View>
    )
}