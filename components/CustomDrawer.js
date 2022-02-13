import React, {useState} from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CustomDrawer(props) {
  return (
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#FF5733'}}>
        <Image source={require('../images/profilepic.png')} style={{height:80, width: 80, borderRadius:40, marginBottom: 10}}></Image>
        <Text style={{color:'#fff', fontSize:18}}>John Doe</Text>
        <View style={{flex:1, backgroundColor:'#fff', paddingTop:10}}>
        <DrawerItemList {...props}/>
        </View>
    </DrawerContentScrollView>
    <View style={{padding:20, borderTopWidth:1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}} >
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <MaterialIcons name='logout' size={22} />
        <Text style={{fontSize:15, marginLeft: 5}}>Log out</Text>
        </View>
        </TouchableOpacity>
    </View>
    </View>
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