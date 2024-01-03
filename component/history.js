
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const History = (props) => {
  return (
    <View>
      <View style={styles.historyContainer}>
        <Text style={styles.promptTitle}>History</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/history-1.png')} style={styles.historyImage} />
        <Image source={require('../assets/history-2.png')} style={styles.historyImage} />
        <Image source={require('../assets/history-3.png')} style={styles.historyImage} />
        <Image source={require('../assets/history-4.png')} style={styles.historyImage} />
        {/* Add more images here if needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  historyContainer: {
    marginTop: 20,
    marginLeft: 24,
  },
  promptTitle: {
    color: '#4F4F4F',
    fontFamily: 'Roboto-Bold',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  historyImage: {
    width: '40%',
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default History;
