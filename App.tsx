// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './app/Navigation/drawerNavigation';
import StackNavigator from './app/Navigation/stackNavigation';
import MyTabs from './app/Navigation/bottomTabNavigation';



function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      {/* <DrawerNavigator /> */}
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;