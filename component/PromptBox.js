
import { useState } from 'react';
import React from 'react';
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PromptBox = (props) => {
    const [promptText, setPromptText] = useState('');
  return (
    <View style={styles.prompt}>
      <Text style={styles.promptTitle}>Enter Prompt</Text>
      <LinearGradient
          style={{padding:5,borderRadius:20}}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 1]}
          colors={["rgba(0, 10, 255, 0.3)", "rgba(255, 0, 199, 0.3)"]}
        >
      <View style={[styles.promptTextRegion,{backgroundColor:'white',borderRadius:16}]}>
        {/* <LinearGradient
          style={styles.gradientWrapper}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 1]}
          colors={["rgba(0, 10, 255, 0.3)", "rgba(255, 0, 199, 0.3)"]}
        > */}
        <View style={styles.gradientWrapper}>
          <TextInput
            style={styles.promptInput}
            multiline={true}
            textAlignVertical="top"
            numberOfLines={5}
            placeholder="Enter a detailed description of your next masterpiece..."
            borderColor='black'
            // value={promptText}
            // onChangeText={(text) => setPromptText(text)}
          />
        </View>
        <View style={styles.lampButton}>
          <View style={styles.lampButtonChild} />
          <TouchableOpacity>
          <Image
            style={styles.lamp1Icon}
            resizeMode="cover"
            source={require('../assets/lamp-1.png')}
          />
          </TouchableOpacity>
        </View>
      </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  prompt: {
    marginLeft: 14,
    marginRight: 14,
  },
  promptInput: {
    flex: 1,
    height: 120,  // Adjust the height to match your design
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoLight,
    color: Color.colorDimgray_100,
    textAlignVertical: 'top',
    padding: 10,
    borderRadius: Border.br_xs,
    backgroundColor: 'transparent',  // Set background color to transparent
  },
  promptTitle: {
    color: '#4F4F4F',
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
  },
  promptTextRegion: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'relative',
  },
  gradientWrapper: {
    flex: 1,
    borderWidth: 4,
    borderRadius: 15,
    borderColor: 'transparent',
    overflow: 'hidden',
  },
  promptInput: {
    padding: 10,
    fontSize: 18,
    textAlignVertical: 'top',
    maxHeight: 150,
    overflow: 'scroll',
  },
  lampButtonChild: {
    borderRadius: 6,
    backgroundColor: 'rgba(135, 248, 255, 0.4)',
    position: 'absolute',
    width: 30,
    height: 30,
    bottom: 0,
    right: 0,
  },
  lamp1Icon: {
    position: 'absolute',
    width: 24,
    height: 24,
    right: 3,
    bottom: 3,
  },
  lampButton: {
    position: 'absolute',
    bottom: 10,
    left: 40
  },
});

export default PromptBox;






