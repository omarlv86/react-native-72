import * as React from 'react';
import { View, Text, Button, useWindowDimensions, useColorScheme} from 'react-native';
import { useId } from 'react';

export default function DetailsScreen({ navigation }:any) {
  const {height, width, scale, fontScale} = useWindowDimensions();
  const colorScheme = useColorScheme();

  const list = [{id:1, name:'Pan', cost:10,check:false}, {id:2, name:'Leche', cost:15,check:false}, {id: 3, name:'Carne', cost:25,check:false}, {id: 4, name:'Huevos', cost:32,check:false}, ]

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
        <View>    
           {list.map(r => 
           <Text key={useId()}>nombre: {r.name}, costo: {r.cost}</Text>
            )}    
        </View>
        <View >
          <Text style={{fontSize: 20, marginBottom: 12}}>Window Dimension Data</Text>
          <Text>Height: {height}</Text>
          <Text>Width: {width}</Text>
          <Text>Font scale: {fontScale}</Text>
          <Text>Pixel ratio: {scale}</Text>
        </View>
        <View>
          <Text>useColorScheme(): {colorScheme}</Text>
        </View>
      </View>
    );
}