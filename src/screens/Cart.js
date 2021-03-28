import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
// import { Colors, Metrics } from '../themes';
import CartView from '../components/CardView'
import { useDispatch, useSelector } from "react-redux";
import { getImage } from '../utils'

export default function CartScreen() {
  const dispatch = useDispatch();
  const listProducts = useSelector((store) => store.cart.listProducts);

  const onChangeQuantity = (item, type) => () => {
    // if (type === 'add') {
    //   dispatch({ type: 'ADD_QUANTITY', data: item })
    // } else {
    //   dispatch({ type: 'ADD_QUANTITY', data: item })
    // }
    dispatch({ type: type === 'add' ? 'ADD_QUANTITY' : 'REMOVE_QUANTITY', data: item })
  }
  const renderItem = ({ item }) => {
    console.log('item', item)
    return (
      <CartView style={{ flex: 1, margin: 5, flexDirection: 'row' }}>
        <Image source={{ uri: getImage(item?.images?.[0]) }} style={{ width: 100, height: 100, }} />
        <View style={{ marginLeft: 5, marginVertical: 10, width: '100%', flex: 1, marginLeft: 10 }}>
          <Text style={{ fontSize: 17, }}>{item.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, width: '100%' }}>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 19, fontWeight: 'bold', marginRight: 10 }}>{item.price}</Text>
                <Text style={{ fontSize: 19, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{item.price}</Text>
              </View>
              <Text style={{ textAlign: 'center', width: 50, borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#90ee90', borderColor: 'transparent' }}>
                50%
              </Text>
            </View>
            <View style={{ alignItems: 'center', marginRight: 30 }}>
              <TouchableOpacity onPress={onChangeQuantity(item, 'add')}>
                <Ionicons name="add" size={30} color={'black'} />
              </TouchableOpacity>
              <Text style={{ fontSize: 15 }}>{item.quantity}</Text>
              <TouchableOpacity onPress={onChangeQuantity(item, 'remove')}>
                <Ionicons name="remove" size={30} color={'black'} />
              </TouchableOpacity>
            </View>
            <Ionicons name="ios-trash-outline" size={30} color={'black'} />
          </View>
        </View>
      </CartView>
    );
  };


  return (
    <View>
      <FlatList
        style={{ backgroundColor: 'grey' }}
        data={listProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item._id?.toString()}
      // extraData={}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  wishlistIcon: {
    marginRight: 5,
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1
  },

});
