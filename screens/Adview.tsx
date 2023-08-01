import { WebView } from 'react-native-webview'
import {StyleSheet, TextInput, View, Text, Alert} from 'react-native';
import React, { useContext, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AdViewScreenRouteProp, MainStackParamList } from '../types/navigation';

const styles = StyleSheet.create({
  view: {
    margin: 10
  },
  webview: {
    flex:1,
    borderWidth:5, 
    borderColor: '#1893FE'
  }
});


const AdView = ({navigation}: NativeStackScreenProps<MainStackParamList>) => {
  const route = useRoute<AdViewScreenRouteProp>();
  return (
    <WebView
      //eventId, Har file validation, and click 
      style={styles.webview}
      source={{
          uri: route.params.url          
      }}
    />
  )
}

export default AdView;