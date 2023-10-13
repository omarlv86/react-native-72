import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Components/Home';
import DetailsScreen from '../Components/Details';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator  initialRouteName="Home"
    activeColor="black"
    inactiveColor="#fff"
    barStyle={{ backgroundColor: 'tomato' }}>
      <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={20} />
          ),
        }}
        />
      <Tab.Screen name="Details" component={DetailsScreen} options={{
          tabBarLabel: 'Detalles',
          tabBarBadge: 3,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={20} />
          ),
        }}/>
    </Tab.Navigator>
  );
}