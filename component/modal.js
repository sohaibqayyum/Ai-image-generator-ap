import React from 'react';
import { Modal, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { containerStyle, gradientBorderStyle, gradientColors } from './styles';
import LinearGradient from 'react-native-linear-gradient';
const ImageModal = ({ visible, closeModal, selectedSize }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
      <LinearGradient
          style={{padding:7,borderRadius:20,colors:''}}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 1]}
          colors={["rgba(0, 10, 255, 0.3)", "rgba(255, 0, 199, 0.3)"]}
          
        >
        
          <View style={[styles.modalContent,{backgroundColor:'white'}]}>
            <Image
              source={require('../assets/generated-image.jpg')}
              style={[styles.modalImage,{ width: getWidthBySize(selectedSize) }]}
            />
            <View style={styles.buttonContainer}>
              {/* Replace the icons with the actual social media icons */}
              <TouchableOpacity style={styles.iconButton}>
                <Image source={require('../assets/whatsapp.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Image source={require('../assets/instagram.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Image source={require('../assets/facebook.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Image source={require('../assets/download.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton} onPress={closeModal}>
                <Image source={require('../assets/share.png')} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
          </LinearGradient>
        </View>
    </Modal>
  );
};

const getWidthBySize = (size) => {
  switch (size) {
    case 'small':
      return 100; // Adjust the width for the small size
    case 'medium':
      return; // Adjust the width for the medium size
    case 'large':
      return 400; // Adjust the width for the large size
    default:
      return 300; // Default width
  }
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding:8
  },
  modalContent: {
    flexShrink:0,
    backgroundColor: 'white ',
    padding: 0,
    // width: 410,
    // height: 440,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:5,
    // borderColor:'blue',
    border: 5,
    // border: LinearGradient(45, 'purple', 'orange'),
    borderRadius:20
  },
  modalImage: {
    // flexShrink:0,
    backgroundColor: 'white',
    // padding: 0,
     width: 368,
     height: 370,
    alignItems: 'center',
    // width: '100%',
    aspectRatio: 1,
    borderRadius: 15,
    marginBottom: 0,
    // borderColor:'white',
    borderWidth:5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 0,
  },
  iconButton: {
    padding: 5,
    margin:7,
    marginLeft:10,
  },
  icon: {
    width: 48,
    height: 48,
  },
});

export default ImageModal;

