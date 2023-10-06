import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
                name='screenA'
                component={ScreenA}
            />
            <Screen
                name='screenB'
                component={ScreenB}
            />
            <Screen
                name='screenC'
                component={ScreenC}
            />
        </Navigator>
)
}