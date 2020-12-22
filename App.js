import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Home from './Home'

const App = () => {
  const [email, setEmail] = useState()
  const [toggleCheckBox, setToggleCheckBox] = useState(false)


  const onChangeText = (value) => setEmail(value)
  return (
    <Home />
  );
};

const styles = StyleSheet.create({

});

export default App;
