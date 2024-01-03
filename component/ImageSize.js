
// import React from 'react';
// import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const ImageSize = (props) => {
//   return (
//     <View style={styles.Imagesize}>
//       <Text style={styles.promptTitle}>Image Size</Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.sizePilLarge}>
//           <LinearGradient
//             style={styles.selectionPill}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             locations={[0, 1]}
//             colors={['#9370DB', '#8A2BE2']}
//           />
//           <Text style={styles.pilText}>Large</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sizePilMedium}>
//           <LinearGradient
//             style={styles.selectionPill}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             locations={[0, 1]}
//             colors={['#9370DB', '#8A2BE2']}
//           />
//           <Text style={styles.pilText1}>Medium</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sizePilSmall}>
//           <LinearGradient
//             style={styles.selectionPill}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             locations={[0, 1]}
//             colors={['#9370DB', '#8A2BE2']}
//           />
//           <Text style={styles.pilText2}>Small</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   Imagesize: {
//     margin: 15,
    
//   },
//   promptTitle: {
//     color: '#4F4F4F',
//     fontFamily: 'Roboto-Bold',
//     fontWeight: 'bold',
//     textAlign: 'left',
//     fontSize: 16,
//     marginBottom: 10,
//     fontStyle:'normal'
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   sizePilLarge: {
//     width: 100,
//     height: 28,
//     borderRadius: 12,
//     backgroundColor: '#9370DB',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   sizePilMedium: {
//     width: 80,
//     height: 28,
//     borderRadius: 12,
//     backgroundColor: '#9370DB',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   sizePilSmall: {
//     width: 80,
//     height: 28,
//     borderRadius: 12,
//     backgroundColor: '#9370DB',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   selectionPill: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     borderRadius: 12,
//   },
//   pilText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontFamily: 'Roboto-Regular',
//   },
//   pilText1: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontFamily: 'Roboto-Regular',
//   },
//   pilText2: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontFamily: 'Roboto-Regular',
//   },
// });

// export default ImageSize;
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ImageSize = ({ SelectedSize }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [onselectSize, setOnSelectSize] = useState('');

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    // onSelectSize(size);
  };

  return (
    <View style={styles.Imagesize}>
      <Text style={styles.promptTitle}>Image Size</Text>
      <View style={styles.buttonContainer}>
        {['large', 'medium', 'small'].map((size) => (
          <TouchableOpacity
            key={size}
            style={[
              styles.sizePil,
              selectedSize === size && { borderColor: 'red', borderWidth: 2 },
            ]}
            onPress={() => handleSizeSelect(size)}
          >
             <LinearGradient
            style={styles.selectionPill}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 1]}
            colors={['#9370DB', '#8A2BE2']}
          />
            <Text style={styles.pilText}>{size.charAt(0).toUpperCase() + size.slice(1)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Imagesize: {
    margin: 15,
  },
  promptTitle: {
    color: '#4F4F4F',
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    fontStyle: 'normal',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizePil: {
    width: 100,
    height: 28,
    borderRadius: 31,
    backgroundColor: '#717171',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink:0,
  
  },
  selectionPill: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  pilText: {
    color: '#717171',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    fontWeight:'400',
    fontStyle:'normal'
  },
});

export default ImageSize;



