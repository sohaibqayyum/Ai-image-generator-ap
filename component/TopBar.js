
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <View style={styles.aiImageContainer}>
        <Image source={require('../resources/download.jpeg')} style={styles.aiImageGenerator} />
      </View>
      <View style={styles.aiTextContainer}>
        <Text style={styles.aiImageGeneratorText}>AI IMAGE GENERATOR</Text>
      </View>
      <TouchableOpacity style={styles.proButton}>
        <View  />
        <Image
          style={styles.crown1Icon}
          resizeMode="cover"
          source={require('../assets/crown-1.png')}  
        />
        <Text style={styles.pro}>PRO</Text>
        
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    padding: 13,
    margin: 5,
    width: '100%',
    height: 50,
    backgroundColor: 'white', // Replace with your desired color
  },
  aiImageContainer: {
    marginRight: 10,
  },
  aiImageGenerator: {
    width: 16,
    height: 15,
  },
  aiTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  aiImageGeneratorText: {
    fontSize: 16,
    color: 'black', // Replace with your desired color
    fontFamily: 'Roboto-Regular', // Replace with your desired font family
  },
  proButton: {
    borderWidth: 1.5,
    borderRadius: 27,
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth:"40%"
  },
  pro: {
    color: 'black', // Replace with your desired color
    fontSize: 12,
    fontFamily: 'Roboto-Regular', // Replace with your desired font family
    marginTop:-3
  },
  crown1Icon: {
    width: 18,
    height: 18,
  },
});

export default TopBar;


