import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import firebase from 'firebase';
import LoginScreenComponent from './src/LoginScreenComponent';

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  if(firebase.apps.length === 0){
    var firebaseConfig = {
        apiKey: "AIzaSyAbDskH-nUH7Ss7QoD05GZZRpFJlg3cj38",
        authDomain: "rn-scalaracademy-yash.firebaseapp.com",
        databaseURL: "https://rn-scalaracademy-yash.firebaseio.com/",
        projectId: "rn-scalaracademy-yash",
        storageBucket: "rn-scalaracademy-yash.appspot.com",
        messagingSenderId: "233013618450",
        appId: "1:233013618450:web:d3c6cc36ef5faec254b5cb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

 firebase.auth().onAuthStateChanged((user) => {
    if(user === null) {
      setUserLoggedIn(false)
    } else {
      setUserLoggedIn(true)
    }
  })

  if(userLoggedIn) {
    return (
      <View style={styles.container}>
        <NotesScreenComponent/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <LoginScreenComponent/>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      {/* <NotesScreenComponent/> */}
      <LoginScreenComponent/>
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