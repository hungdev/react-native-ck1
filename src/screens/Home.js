import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import StarRating from 'react-native-star-rating';
import { useDispatch, useSelector } from "react-redux";
// import SortModal from '../../components/SortModal';
// import { Colors, Metrics } from '../../themes';
import CartView from '../components/CardView'
import { getProduct } from "../services/Api";
import { addCart } from '../actions/cart';
import { getImage } from '../utils'

export default function ProductList() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false)
  const [star, setStar] = useState(0)
  const [product, setProduct] = useState(0)

  useEffect(() => {
    async function getData() {
      const result = await getProduct()
      setProduct(result.data.data)
      console.log('result', result)
    }
    getData()
  }, [])

  const toggleModal = () => {
    setIsVisible(false)
  }

  const onStarRatingPress = (item) => {
    console.log('item', item)
    setStar(item)
  }
  const onAddCart = (item) => () => {
    console.log('item', item)
    // dispatch({type: 'ADD_CART', data:item})
    dispatch(addCart(item))
  }

  const onMoveToDetail = (item) => () => navigation.navigate('Detail', { data: item })


  const renderItem = ({ item }) => {
    return (
      <CartView style={{ flex: 1, margin: 5, }}>
        <TouchableOpacity onPress={onAddCart(item)}>
          <Ionicons name="heart" size={30} color={'black'} style={styles.wishlistIcon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={onMoveToDetail(item)}>
          <Image source={{ uri: getImage(item?.images?.[0]) }} style={{ width: '100%', height: 250, resizeMode: 'cover' }} />
        </TouchableOpacity>
        <View style={{ marginLeft: 5, marginVertical: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{item.price}</Text>
            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>{item.price}</Text>
          </View>
          <Text style={{ fontSize: 17, }}>{item.name}</Text>
        </View>
        <View style={{ paddingRight: 50, marginLeft: 5, marginBottom: 10 }}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={item.star}
            selectedStar={onStarRatingPress}
            // starStyle={{ color: 'grey', fontSize: 25 }}
            starColor='grey'
            starSize={25}
          />
        </View>
      </CartView>
    );
  };

  return (
    <View style={{ borderWidth: 1, borderColor: 'green', flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, backgroundColor: 'white', paddingVertical: 10, borderBottomWidth: 0.5 }}>
        <TouchableOpacity
          onPress={() => setIsVisible(!isVisible)}
          style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'center', borderRightWidth: 1 }}>
          <MaterialCommunityIcons name="sort" size={30} color={'black'} style={{ marginRight: 5 }} />
          <Text>SORT BY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
          <MaterialCommunityIcons name="sort" size={30} color={'black'} style={{ marginRight: 5 }} />
          <Text>REFINE</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ borderWidth: 1, borderColor: 'red', backgroundColor: '#E2E2E2' }}
        data={product}
        renderItem={renderItem}
        keyExtractor={(item) => item._id?.toString()}
        numColumns={2}
        horizontal={false}
      // extraData={}
      />
      {/* <SortModal isVisible={isVisible} toggleModal={toggleModal} /> */}
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
