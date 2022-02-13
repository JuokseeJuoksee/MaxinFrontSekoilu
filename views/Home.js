
import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList  } from 'react-native';





export default function Home({navigation}) {
  return (
    
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
    
    <ScrollView style={{padding:20}}>
    
    <View style={{flexDirection:'row', marginTop:40}}>
    <Text style={{fontSize:20, }}>Hello "user"</Text>
    </View>
    <View
    style={{
        marginTop:50,
        marginVertical: 15,
        flexDirection:'row',
        justifyContent: 'space-between'
      }}>
    <Text style={{fontSize:16}}> Current competitions </Text>
    <TouchableOpacity onPress={() => {}}>
    <Text style={{color:'blue',}}>See all</Text>
    </TouchableOpacity>
    </View>
    <FlatList
    
    >

    </FlatList>
    
    </ScrollView>
    </SafeAreaView>
   
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