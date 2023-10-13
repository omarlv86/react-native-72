import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    useDrawerProgress,
  } from '@react-navigation/drawer';
  import { Linking } from 'react-native'
  /* import Animated, {
    interpolate,
  } from 'react-native-reanimated'; */
import Animated,{interpolate} from 'react-native-reanimated';

export default function CustomDrawerContent(props) {
    console.log('CustomDrawerContent')
    console.log('useDrawerProgress: ',useDrawerProgress())
    /* const progress = useDrawerProgress();

    const translateX = interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
      });
      console.log(translateX) */

      /* const progress = ;
      console.log(progress.value)
      const translateX = interpolate(progress.value, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
      });
      console.log('translateX: ',translateX) */

    return (
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Help"
                    onPress={() => Linking.openURL('https://google.com')}
                />
            </DrawerContentScrollView>
      
    );
}