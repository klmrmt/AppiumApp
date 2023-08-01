import {StyleSheet, TextInput, View, Text, Button, Pressable} from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../types/navigation';


const styles = StyleSheet.create({
    form: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    Button: {
        margin: 10,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#03fc7f',
        borderWidth: 2,
    }
});

const SearchWeb = ({navigation}: NativeStackScreenProps<MainStackParamList>) => {
    const [text, setText] = useState('')
    return(
        <View style={styles.form}>
            <TextInput
                style={{justifyContent: 'center'}}
                secureTextEntry={false}
                placeholder="Enter a valid url to search"
                onChangeText={newText => setText(newText)}
                testID='test:id/inputUrl'
            />
            <Pressable style={styles.Button} testID='test:id/inputUrl' onPress={() => navigation.navigate('AdView', {url: text})}>
                <Text>Search</Text>
            </Pressable>
        </View>
    )
}

export default SearchWeb;


//TODO::Route to new page with webview
//TODO::Insert text into webview to load url 
//TODO::Splash Screen maybe?