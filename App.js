import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, ToastAndroid, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, {useState} from 'react';

export default function App() {
    const [user, setUser] = useState('');
    const [userType, setUserType] = useState('');
    const [pw, setPw] = useState('');

    return (
        <View style={styles.container}>
            <Text>User Type:</Text>
            <RNPickerSelect
                onValueChange={(value) => setUserType(value)}
                items={[
                    { label: 'Admin', value: 'Admin' },
                    { label: 'Guest', value: 'Guest' }
                ]}
                />
            <Text>User Name: </Text>
            <TextInput style={{ borderWidth: 1, padding: 8, margin: 10, width: 300 }}
                       onChangeText={(text) => setUser(text)}
            />
            <Text>Password: </Text>
            <TextInput style={{ borderWidth: 1, padding: 8, margin: 10, width: 300 }}
                       onChangeText={(text) =>setPw(text)}
            />
            <TouchableOpacity onPress={() => ToastAndroid.show(`Welcome ${userType} ${user}`, ToastAndroid.SHORT)}>
                <Text>LOG IN</Text>
            </TouchableOpacity>
            <Text>{pw}</Text>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


