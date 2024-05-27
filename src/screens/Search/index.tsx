import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; 

interface SearchItem {
  type: string;
  title: string;
  subtitle: string;
  image: string;  
}

const searchData: SearchItem[] = [
  { type: 'Música', title: 'Shy Away', subtitle: 'Twenty One Pilots', image: 'https://i.scdn.co/image/ab67616d00001e02239ee8e0c619611d8beef008' },
  { type: 'Álbum', title: 'Shy Away', subtitle: 'Twenty One Pilots', image: 'https://i.scdn.co/image/ab67616d00001e02239ee8e0c619611d8beef008' },
  { type: 'Música', title: 'Shy Away - Saturday, Choice', subtitle: 'Playlist', image: 'https://i.scdn.co/image/ab67616d00001e02239ee8e0c619611d8beef008' },
  { type: 'Música', title: 'Shy Away', subtitle: 'Twenty One Pilots', image: 'https://i.scdn.co/image/ab67616d00001e02239ee8e0c619611d8beef008' },
  { type: 'Playlist', title: 'Shy Away Radio', subtitle: 'Playlist', image: 'https://i.scdn.co/image/ab67616d00001e02239ee8e0c619611d8beef008' },
  { type: 'Música', title: 'Yellow', subtitle: 'Coldplay', image: 'https://i.scdn.co/image/ab67616d0000b2733d92b2ad5af9fbc8637425f0' },
  { type: 'Álbum', title: 'Parachutes', subtitle: 'Coldplay', image: 'https://i.scdn.co/image/ab67616d0000b2733d92b2ad5af9fbc8637425f0' },
  { type: 'Álbum', title: 'Viva la Vida', subtitle: 'Coldplay', image: 'https://m.media-amazon.com/images/I/9145yafeO2L._UF1000,1000_QL80_.jpg' },
  { type: 'Álbum', title: 'Paradise', subtitle: 'Coldplay', image: 'https://i.scdn.co/image/ab67616d0000b273de0cd11d7b31c3bd1fd5983d' },
  
];


export function Search() {
  const navigation = useNavigation();
  const [texto, setTexto] = useState('Shy Away');

  const filteredData = searchData.filter(item => {
    const lowerCaseText = texto.toLowerCase();
    return item.title.toLowerCase().includes(lowerCaseText) || item.subtitle.toLowerCase().includes(lowerCaseText);
  });

  const renderItem = ({ item }: { item: SearchItem }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );


  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={texto}
          onChangeText={text => setTexto(text)}
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData} 
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#202023',
    flex: 1
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 20,
  },
  input: {
    flex: 1,
    padding: 15,
    backgroundColor: '#363742',
    color: '#fff',
    borderRadius: 10,
  },
  cancelButton: {
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  list: {
    paddingHorizontal: 16,
    backgroundColor: '#363742',
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 14,
  },
});
