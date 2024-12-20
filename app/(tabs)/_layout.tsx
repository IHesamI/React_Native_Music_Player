import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle:{
          borderTopRightRadius:100,
          borderTopLeftRadius:100,
          backgroundColor:'#0A091E',
          justifyContent:'flex-start',
          
        }
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon:({focused,color})=><IconSymbol size={28}  source={require('@/assets/images/home.png')}
          color={focused ? '#6156E2' : color}/>
        }}
      />
      <Tabs.Screen
        name='current'
        options={{
          title: '',
          tabBarIcon: ({focused}) => 
            <IconSymbol size={28}
              source={require('@/assets/images/music.png')}
              color={focused ? '#6156E2' : ''}
            />
        }}
      />
      <Tabs.Screen
        name='fav'
        options={{
          title: '',
          tabBarIcon: ({focused}) => 
            <IconSymbol size={28}
              source={require('@/assets/images/emptyHeart.png')}
              color={focused ? '#6156E2' : ''}
            />,
        }}
      />

    </Tabs>
  );
}