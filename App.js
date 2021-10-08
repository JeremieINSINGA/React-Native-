import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native'; {/* Import des composants de base */}

export default function App() {
  return (
    <View style={styles.container}> 
    <Pressable onPress={onPressFunction}>
    <Text>I'm pressable!</Text>
    </Pressable>

      <Text style={styles.text1}> 
        Bonjour !
      </Text>
      <Text style={styles.text2}> 
        Bonjour !
      </Text>
      <Text style={styles.text3}> 
        Bonjour !
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 400,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 400,
  },
  text1: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 400,
  },
  text2: {
    fontSize: 60,
    textAlign: 'center',
    fontWeight: 400,
  },
  text3: {
    fontSize: 90,
    textAlign: 'center',
    fontWeight: 400,
  }
});

