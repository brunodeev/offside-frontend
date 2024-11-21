import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

import LoginPage from './screens/login.jsx';

const Stack = createNativeStackNavigator();

function HomePage({ navigation }) {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get('http://192.168.1.41:8080/');
      setUsers(result.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  }

  useEffect(() => {
      fetchData();
  }, []);

  fetchData();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Título da Página</Text>
      <View style={styles.main}>
          {
            users.map((user, index) => (
              <Text key={index} style={styles.title}>{user.name}</Text>
            ))
          }
      </View>
    </ScrollView>
  );
}

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginPage}/>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomePage}/>
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff'
  },
});
