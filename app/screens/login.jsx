import axios from 'axios';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function LoginPage() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        try {
            await axios.post('http://192.168.1.41:8080/login', {
                email: email,
                password: password,
            });

            navigation.navigate('Home');

            alert('logado com sucesso!')
        } catch {
            alert('Deu ruim!')
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
            <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.card}>
                <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={(email) => setEmail(email)}/>
                <TextInput style={styles.input} placeholder='Senha' value={password} onChangeText={(password) => setPassword(password)}/>
                <TouchableOpacity style={styles.button} onPress={handleLogin}><Text style={styles.text}>Login</Text></TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 24,
        backgroundColor: '#ffffff'
    },

    title: {
        fontSize: 30,
        fontWeight: 700,
        color: '#757575'
    },

    card: {
        width: '100%',
        height: '40%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 10,
        padding: 10,
        width: '100%',
        marginBottom: 10
    },

    button: {
        width: '100%',
        color: 'white',
        backgroundColor: '#3db5da',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBlock: 10,
        borderRadius: 10
    },

    text: {
        color: 'white'
    }
  });

export default LoginPage;