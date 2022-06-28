import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Text } from 'react-native'

import VatChatXeScreen from './VatChatXeScreen'
import TNDSScreen from './TNDSScreen'
import DaiLiScreen from './DaiLiScreen'
import HangScreen from './HangScreen'
import UserScreen from './UserScreen'

const Tab = createBottomTabNavigator()

const HomeScreen: React.FC = () => {
  return (
      <Tab.Navigator >
        
        <Tab.Screen name="Vật chất xe" 
                    options={{tabBarIcon: () => <Text>🚖</Text>}}
                    component={VatChatXeScreen} />
        <Tab.Screen name="TNDS" 
                    options={{tabBarIcon: () => <Text>🛡</Text>}}
                    component={TNDSScreen} />
        <Tab.Screen name="Đại lí" 
                    options={{tabBarIcon: () => <Text>📖</Text>}}
                    component={DaiLiScreen} />
        <Tab.Screen name="Hãng" 
                    options={{tabBarIcon: () => <Text>📚</Text>}}
                    component={HangScreen} />
        <Tab.Screen name="User" 
                    options={{tabBarIcon: () => <Text>🧑🏼‍💻</Text>}}
                    component={UserScreen} />
      </Tab.Navigator>
  )
}
export default HomeScreen
