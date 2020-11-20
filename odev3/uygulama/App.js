import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  formItem: {
    padding: 5,
  },
  input: {
    borderWidth: 2,    
    borderColor: '#dbdbdb',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 25
  },
  buttonWrapper: {
    padding: 10
  }
});


const Input = props => {
  const { title } = props;
  return (
    <View style={style.formItem}>
      <Text>{title}</Text>
      <TextInput 
        placeholder={title}
        style={style.input}
      />
    </View>
  )
}

const Register = () => (
  <>
    <Input title="Ad" />
    <Input title="Soyad" />
    <Input title="E-Posta adresi"/>
    <Input title="Yaş"/>
    <Input title="Şifre"/>
    <Input title="Şifre tekrar"/>
    <View style={style.buttonWrapper}>
      <Button title="Kaydol" />
    </View>
  </>
)


const App = () => {
  return (
    <View>
      <Register />
    </View>
  )
}

export default App;