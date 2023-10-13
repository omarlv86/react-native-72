import * as React from 'react';
import { Button, View, useWindowDimensions } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import CustomDrawerContent from '../Components/CustomDrawer';

function HomeScreen({ navigation }:any) {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }

function NotificationsScreen({ navigation }:any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator 
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
            drawerStyle: {
              backgroundColor: '#fff',
              width: 240,
            },
            //drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
            drawerType: 'slide', // front, back, slide, permanent
            drawerPosition:'left', //left, right
            drawerStatusBarAnimation:'fade'
        }}
    >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
  );
}
