import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

enableScreens();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
