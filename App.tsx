
import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import ImageModal from './component/modal';
import GoButton from './component/GoButton';
import ImageSize from './component/ImageSize';
import History from './component/history';
import TopBar from './component/TopBar';
import PromptBox from './component/PromptBox';

const App = () => {
  // const [promptText, setPromptText] = useState('');
  useEffect(() => {
    StatusBar.setBackgroundColor('white');
    StatusBar.setBarStyle('dark-content');
  }, []);
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.main}>

      <TopBar />
      <PromptBox/>
      <ImageSize />
      <GoButton />
      <History />
      <ImageModal visible={modalVisible} closeModal={closeModal} />
    </View>

  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
  },

});

export default App;
// const Stack = createNativeStackNavigator();
// import  React from "react";
// import { NavigationContainer } from "@react-navigation/native";

// import HomeScreen from "./screens/HomeScreen";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { View, Text, Pressable, TouchableOpacity } from "react-native";

// const App = () => {
//   const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

//   return (
//     <>
//       <NavigationContainer>
//         {hideSplashScreen ? (
//           <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen
//               name="HomeScreen"
//               component={HomeScreen}
//               options={{ headerShown: false }}
//             />
//           </Stack.Navigator>
//         ) : null}
//       </NavigationContainer>
//     </>
//   );
// };
// export default App;
