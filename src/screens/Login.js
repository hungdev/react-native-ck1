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


const App = () => {
  const [email, setEmail] = useState()
  const [toggleCheckBox, setToggleCheckBox] = useState(false)


  const onChangeText = (value) => setEmail(value)
  return (
    <View style={{ paddingTop: 40, flex: 1 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View>
          <Text style={{ color: 'grey' }}>EMAIL ADDRESS</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={email}
            placeholder='Type your email'
          />
          <Text style={{ color: 'red', fontSize: 17 }}>Required field</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: 'grey' }}>PASSWORD</Text>
          <View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => onChangeText(text)}
              value={email}
              placeholder='Type your password'
            />
            <Text style={{ position: 'absolute', top: 11, right: 10 }}>Show</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text>Remember me</Text>
        </View>
        <TouchableOpacity style={{
          backgroundColor: 'yellow',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{
            marginTop: 30, textAlign: 'center',
            textDecorationLine: 'underline'
          }}>Forgot password?</Text>
        </TouchableOpacity>


        <View style={{ borderTopWidth: 1, marginTop: 30, borderColor: 'grey' }}></View>

        <TouchableOpacity>
          <Text style={{
            marginTop: 30, textAlign: 'center',
            textDecorationLine: 'underline'
          }}>Don't have an account?</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        backgroundColor: '#e3e2da', padding: 20,
        position: 'absolute', bottom: 0,
        width: '100%'
      }}>
        <Text>Face ID setting</Text>
        <Text>Turn on/off face ID, go to [My account] > [Setting] > [Face ID] > On/Off</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
