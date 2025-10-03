import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Login() {
  const router = useRouter();
  const [authData, setAuthData] = React.useState({
    username: 'johndoe',
    password: '1234',
  });
  const login = () => {
    console.log('login', authData);
    router.replace('/');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View
        style={{
          gap: 20,
          marginBottom: 20,
        }}
      >
        <TextInput
          placeholder='username'
          style={styles.input}
          value={authData.username}
          onChangeText={(text) => setAuthData({ ...authData, username: text })}
        />
        <TextInput
          placeholder='password'
          secureTextEntry
          style={styles.input}
          value={authData.password}
          onChangeText={(text) => setAuthData({ ...authData, password: text })}
        />
      </View>

      <Button
        title='Login'
        onPress={login}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#b6bcff',
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 21,
  },
});
