import React, {useState} from 'react';
import Icon from 'react-native-ionicons';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center', alignItems: 'center', backgroundColor:'#fff'}}>
        <View>
          <Text style={{fontSize:30, fontWeight:'bold', color:'#20315f'}}>Run run </Text>
        </View>
        <Image
        style={styles.image}
        source={require('./Strava.png')}
        />
        <TouchableOpacity 
        onPress={() => navigation.navigate('Home')}
        style={{
          backgroundColor:'orange',
          padding: 20,
          width:'90%',
          borderRadius:5,
          flexDirection:'row',
          justifyContent: 'space-between',
          marginTop:100}}>
          <Text style={{fontWeight:'bold', fontSize:20, color:"#fff"}}>Log in using Strava</Text>
          <MaterialIcons name="arrow-forward" size={22} color="#fff"/>
        </TouchableOpacity>
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
  image: {
    justifyContent:'center',
    alignItems:'center',
    width: 400,
    paddingBottom:60,
    height: 70,
    resizeMode: 'contain' }
});

