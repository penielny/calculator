import { Modal } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppState } from './context/appStore';
import Calculator from './screens/Calculator';
import { Fragment } from 'react';
import Game from './screens/Game';
import { NavigationContainer } from '@react-navigation/native';
import LeaderBoard from './screens/LeaderBoard';




export function AppScreen() {

    const { opengame } = useAppState()

    return (
        <Fragment>
            <Calculator />
            <Modal
                transparent
                animationType='fade'
                visible={opengame}>
                <Game />
            </Modal>
        </Fragment>
    );
}



const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={AppScreen} options={{headerShown:false}} />
                <Stack.Screen name="LeaderBoard" component={LeaderBoard} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}