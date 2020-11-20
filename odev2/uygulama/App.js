import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const style = StyleSheet.create({
  title: {
    fontSize: 35,
    textAlign: 'center',
    padding: 10
  },
  container: {
    padding: 25
  },
  paragraph: {
    fontSize: 17
  }
})


const App = () => {
  return (
    <View>
      <Text style={style.title}>
        Doğukan Kara
      </Text>
      <View style={style.container}>
        <Text>Yaşım 21</Text>
        <Text>Anadolu lise mevzunuyum.</Text>
        <Text>Memleketim Ardahan</Text>
        <Text style={{ textAlign: 'center', marginTop: 50, fontSize: 35 }}>İş Deneyimlerim</Text>
        <Text style={style.paragraph}>
          Bir süre Java ile yazılım geliştirdikten sonra daha farklı 
          dillere yöneldim. HTML5, CSS3, JavaScript konularında yani
          web alanında kendimi geliştirmeye çalışıyorum. 
        </Text>
      </View>
    </View>
  )
}
 
export default App;