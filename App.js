import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Auth from './components/auth'

export default function App() {

  const [text, setText] = useState("block");
  // return <Auth />

  return (

    < View style={styles.container} >
      <Text>Hello am {text}</Text>
      <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => { setText(text) }} />

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
