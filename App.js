import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {COLORS, SIZES, FONTS, icons} from './constants/';

// Screens
import {Onboarding, Home, DestinationDetail} from './screens/';

const theme = {
   ...DefaultTheme,
   colors: {
      ...DefaultTheme.colors,
      border: 'transparent'
   }
};

// Tabs
import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
   return (
      <NavigationContainer theme={theme}>
         <Stack.Navigator
            initialRouteName={'Onboarding'}
         >
            {/* Screens */}
            <Stack.Screen
               name='Onboarding'
               component={Onboarding}
               options={{
                  title: null,
                  headerStyle: {
                     backgroundColor: COLORS.white
                  },
                  headerLeft: null,
                  headerRight: () => (
                     <TouchableOpacity
                        style={{
                           marginRight: SIZES.padding
                        }}
                        onPress={() => console.log('pressed header right')}
                     >
                        <Image source={icons.barMenu} resizeMode='contain' style={{width: 20, height: 20}} />
                     </TouchableOpacity>
                  )
               }}
            />

            <Stack.Screen
               name='DestinationDetail'
               component={DestinationDetail}
               options={{
                  headerShown: false
               }}
            />
            {/* Screens end */}

            {/* Tabs */}
            <Stack.Screen
               name='Home'
               component={Tabs}
               options={{
                  title: null,
                  headerStyle: {
                     backgroundColor: COLORS.white
                  },
                  headerLeft: ({onPress}) => (
                     <TouchableOpacity
                        style={{
                           marginLeft: SIZES.padding
                        }}
                        onPress={onPress}
                     >
                        <Image source={icons.back} resizeMode='contain' style={{width: 25, height: 25}} />
                     </TouchableOpacity>
                  ),
                  headerRight: () => (
                     <TouchableOpacity
                        style={{
                           marginRight: SIZES.padding
                        }}
                        onPress={() => console.log('pressed menu')}
                     >
                        <Image source={icons.menu} resizeMode='contain' style={{width: 25, height: 25}} />
                     </TouchableOpacity>
                  )
               }}
            />
            {/* Tabs end */}
         </Stack.Navigator>
      </NavigationContainer>
   );
}

export default () => {
   return <App />
}