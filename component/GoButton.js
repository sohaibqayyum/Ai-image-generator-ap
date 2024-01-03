import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImageModal from './modal';

const GoButton = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.centerButton}>
      <TouchableOpacity style={styles.buttongo} onPress={openModal}>
        <LinearGradient
          style={styles.letsGoButtonChild}
          locations={[0, 1]}
          colors={['rgba(0, 10, 255, 0.3)', 'rgba(255, 0, 199, 0.3)']}
          useAngle={true}
          angle={180}
        />
        <Text style={styles.buttonText}>Let's Go</Text>
        <Text style={styles.watchAnAd}>Watch an Ad</Text>
        <Image
          style={styles.advertisement1Icon}
          resizeMode="cover"
          source={require('../assets/advertisement-1.png')} // Replace with the correct image source
        />
      </TouchableOpacity>
      <ImageModal visible={modalVisible} closeModal={closeModal} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  centerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30, // Adjusted marginTop based on Figma
  },
  buttongo: {
    borderRadius: 12, // Adjusted borderRadius based on Figma
    width: 312, // Adjusted width based on Figma
    height: 53, // Adjusted height based on Figma
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Roboto-Bold', // Replace with the correct font family
    position: 'absolute',
    top: 10,
  },
  watchAnAd: {
    fontSize: 10,
    fontFamily: 'Roboto-Regular', // Replace with the correct font family
    color: '#606060',
    position: 'absolute',
    top: 30,
    marginTop:5,
  },
  advertisement1Icon: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 13,
    left: 80,
  },
  letsGoButtonChild: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
});

export default GoButton;
