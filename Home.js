import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

// const data = [
//   {
//     id: 1,
//     uri: 'https://m.witchery.com.au/ProductImages/MEDIUM/1/20186_125061_142811.jpg',
//     color: 'red',
//     price: '100$',
//     discountPrice: '80$',
//     promote: '20% Off',
//     name: 'Jacket1'
//   },
//   {
//     id: 2,
//     uri: 'https://allensolly.imgix.net/img/app/product/2/292023-1254549.jpg',
//     color: 'red',
//     price: '100$',
//     discountPrice: '80$',
//     promote: '20% Off',
//     name: 'Jacket2'
//   },
//   {
//     id: 3,
//     uri: 'https://allensolly.imgix.net/img/app/product/2/292023-1254549.jpg',
//     color: 'red',
//     price: '100$',
//     discountPrice: '80$',
//     promote: '20% Off',
//     name: 'Jacket3'
//   },
//   {
//     id: 4,
//     uri: 'https://m.witchery.com.au/ProductImages/MEDIUM/1/20186_125061_142811.jpg',
//     color: 'red',
//     price: '100$',
//     discountPrice: '80$',
//     promote: '20% Off',
//     name: 'Jacket4'
//   },
// ]
const data = Array(20).fill('').map((e, i) => ({
  id: i + 1,
  uri: 'https://m.witchery.com.au/ProductImages/MEDIUM/1/20186_125061_142811.jpg',
  color: 'red',
  price: '100$',
  discountPrice: '80$',
  promote: '20% Off',
  name: 'Jacket4'
}))
const App = () => {
  const [email, setEmail] = useState()
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const renderItem = ({ item }) => {
    console.log('item', item)
    return (
      <View style={{ flex: 1, borderWidth: 1, margin: 5 }}>
        <Image
          style={{ height: 200, width: '100%', alignSelf: 'center' }}
          source={{
            uri: item.uri,
          }}
          resizeMode='contain'
        />
        <Text style={{ textAlign: 'center', marginTop: 20 }}>{item.color}+</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <Text style={{ textDecorationLine: 'line-through' }}>{item.price}$</Text>
          <Text style={{ color: 'red' }}>{item.discountPrice}$</Text>
          <Text>{item.promote}</Text>
          <Text>Heart</Text>
        </View>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>{item.name}</Text>
      </View>
    )
  }

  const headerListComponent = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 40, alignItems: 'center' }}>
      <Text style={{ borderWidth: 1, flex: 1, textAlign: 'center' }}>Sort</Text>
      <Text style={{ borderWidth: 1, flex: 1, textAlign: 'center' }}>Refine</Text>
    </View>
  )
  return (
    <View style={{ flex: 1, borderWidth: 1 }}>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{ borderWidth: 1 }}
        numColumns={2}
        ListHeaderComponent={headerListComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
