import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <View style={styles.statusBar}>
        <View style={[styles.statusBar1, styles.statusBar1Layout]} />
        <Image
          style={[styles.wifiIcon, styles.iconLayout3]}
          source={require("../assets/wifi-icon.svg")}
        />
        <Image
          style={[styles.cellularIcon, styles.iconLayout3]}
          source={require("../assets/cellular-icon.svg")}
        />
        <Image
          style={[styles.batteryIcon, styles.iconLayout3]}
          source={require("../assets/battery-icon.svg")}
        />
        <Text style={styles.cellularText}>Jazz</Text>
      </View>
      <View style={[styles.topBar, styles.topBarLayout]}>
        <View style={[styles.background, styles.topBarLayout]} />
        <Image
          style={[styles.hamburgerIcon, styles.hamburgerIconPosition]}
          source={require("../assets/hamburger-icon.svg")}
        />
        <Text style={[styles.aiImageGenerator, styles.proTypo]}>
          AI IMAGE GENERATOR
        </Text>
        <View style={[styles.proButton, styles.proLayout]}>
          <View style={[styles.proButtonChild, styles.proLayout]} />
          <Text style={[styles.pro, styles.proTypo]}>PRO</Text>
          <Image
            style={styles.crown1Icon}
            resizeMode="cover"
            source={require("../assets/crown-1.png")}
          />
        </View>
      </View>
      <View style={[styles.promptSection, styles.sectionPosition]}>
        <Text style={styles.promptTitle}>Enter Prompt</Text>
        <View style={[styles.promptTextRegion, styles.promptLayout]}>
          <View style={[styles.promptTextBar, styles.promptTextBarPosition]} />
          <View style={[styles.lampButton, styles.lampLayout]}>
            <View style={[styles.lampButtonChild, styles.lampLayout]} />
            <Image
              style={[styles.lamp1Icon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/lamp-1.png")}
            />
          </View>
          <Text style={styles.promptPlaceholder}>
            Enter a detailed description of your next masterpiece...
          </Text>
        </View>
      </View>
      <View style={[styles.sizeSection, styles.sectionPosition]}>
        <Text style={styles.promptTitle}>Image Size</Text>
        <View style={[styles.sizePilLarge, styles.sizeLayout]}>
          <View style={[styles.selectionPill, styles.sizeLayout]} />
          <Text style={[styles.pilText, styles.pilTypo]}>Large</Text>
        </View>
        <View style={[styles.sizePilMedium, styles.watchAnAdPosition]}>
          <View style={[styles.selectionPill, styles.sizeLayout]} />
          <Text style={[styles.pilText1, styles.pilTypo]}>Medium</Text>
        </View>
        <View style={[styles.sizePilSmall, styles.sizeLayout]}>
          <View style={[styles.selectionPill, styles.sizeLayout]} />
          <Text style={styles.pilText2}>Small</Text>
        </View>
      </View>
      <View style={[styles.letsGoButton, styles.letsLayout]}>
        <LinearGradient
          style={[styles.letsGoButtonChild, styles.letsLayout]}
          locations={[0, 1]}
          colors={["rgba(0, 10, 255, 0.3)", "rgba(255, 0, 199, 0.3)"]}
          useAngle={true}
          angle={180}
        />
        <Text style={[styles.letsGo, styles.letsGoClr]}>Let’s Go</Text>
        <Text style={[styles.watchAnAd, styles.letsGoClr]}>Watch an ad</Text>
        <Image
          style={[styles.advertisement1Icon, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/advertisement-1.png")}
        />
      </View>
      <View style={[styles.historySection, styles.hamburgerIconPosition]}>
        <Text style={styles.promptTitle}>History</Text>
        <Image
          style={[styles.history1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/history-1.png")}
        />
        <Image
          style={[styles.history2Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/history-2.png")}
        />
        <Image
          style={[styles.history3Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/history-3.png")}
        />
        <Image
          style={[styles.history4Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/history-4.png")}
        />
      </View>
      <View style={[styles.safeAreaBottom, styles.statusBar1Layout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar1Layout: {
    height: 24,
    width: 360,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iconLayout3: {
    height: 20,
    width: 20,
    top: 4,
    position: "absolute",
    overflow: "hidden",
  },
  topBarLayout: {
    height: 46,
    width: 360,
    left: 0,
    position: "absolute",
  },
  hamburgerIconPosition: {
    position: "absolute",
    left: 24,
  },
  proTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  proLayout: {
    width: 60,
    height: 25,
    position: "absolute",
  },
  sectionPosition: {
    width: 312,
    left: 24,
    position: "absolute",
  },
  promptLayout: {
    height: 120,
    width: 312,
    position: "absolute",
  },
  promptTextBarPosition: {
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  lampLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  iconLayout2: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  sizeLayout: {
    height: 28,
    position: "absolute",
  },
  pilTypo: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_mini,
    top: 5,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  watchAnAdPosition: {
    left: 116,
    width: 80,
  },
  letsLayout: {
    height: 53,
    width: 312,
    position: "absolute",
  },
  letsGoClr: {
    color: Color.colorGray,
    textAlign: "center",
    position: "absolute",
  },
  iconLayout1: {
    height: 125,
    width: 125,
    top: 29,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  iconLayout: {
    top: 174,
    height: 125,
    width: 125,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  statusBar1: {
    top: 0,
  },
  wifiIcon: {
    left: 299,
  },
  cellularIcon: {
    left: 271,
  },
  batteryIcon: {
    left: 321,
  },
  cellularText: {
    top: 6,
    color: "#515151",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    left: 24,
    position: "absolute",
  },
  statusBar: {
    height: 25,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  background: {
    top: 0,
    backgroundColor: Color.colorWhite,
    height: 46,
  },
  hamburgerIcon: {
    top: 16,
    width: 16,
    height: 12,
    left: 24,
  },
  aiImageGenerator: {
    top: 15,
    left: 50,
  },
  proButtonChild: {
    borderRadius: 27,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1.5,
    left: 0,
    top: 0,
  },
  pro: {
    top: 7,
    left: 32,
  },
  crown1Icon: {
    width: 18,
    height: 18,
    left: 5,
    top: 3,
    position: "absolute",
  },
  proButton: {
    top: 10,
    left: 276,
  },
  topBar: {
    top: 44,
  },
  promptTitle: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
    position: "absolute",
  },
  promptTextBar: {
    height: 120,
    width: 312,
    position: "absolute",
  },
  lampButtonChild: {
    borderRadius: 6,
    backgroundColor: "rgba(135, 248, 255, 0.4)",
    left: 0,
    top: 0,
  },
  lamp1Icon: {
    left: 3,
    top: 3,
    width: 24,
  },
  lampButton: {
    top: 85,
    left: 6,
  },
  promptPlaceholder: {
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    color: "#9a9a9a",
    width: 302,
    fontSize: FontSize.size_mini,
    top: 5,
    left: 5,
    textAlign: "left",
    position: "absolute",
  },
  promptTextRegion: {
    top: 30,
    left: 0,
  },
  promptSection: {
    top: 94,
    height: 150,
  },
  selectionPill: {
    borderRadius: Border.br_12xl,
    backgroundColor: Color.colorMediumpurple,
    width: 80,
    height: 28,
    left: 0,
    top: 0,
  },
  pilText: {
    left: 22,
  },
  sizePilLarge: {
    width: 80,
    height: 28,
    top: 40,
    left: 0,
  },
  pilText1: {
    left: 12,
  },
  sizePilMedium: {
    height: 28,
    position: "absolute",
    top: 40,
  },
  pilText2: {
    textAlign: "center",
    left: 21,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_mini,
    top: 5,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  sizePilSmall: {
    left: 232,
    width: 80,
    height: 28,
    top: 40,
  },
  sizeSection: {
    top: 264,
    height: 68,
  },
  letsGoButtonChild: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  letsGo: {
    left: 113,
    fontSize: 24,
    top: 5,
    color: Color.colorGray,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  watchAnAd: {
    fontSize: 10,
    fontFamily: FontFamily.robotoFlexRegular,
    left: 116,
    width: 80,
    top: 30,
  },
  advertisement1Icon: {
    top: 13,
    left: 80,
  },
  letsGoButton: {
    top: 372,
    left: 24,
  },
  history1Icon: {
    left: 20,
  },
  history2Icon: {
    left: 165,
  },
  history3Icon: {
    left: 21,
    top: 174,
  },
  history4Icon: {
    left: 166,
  },
  historySection: {
    top: 455,
    width: 291,
    height: 299,
    left: 24,
  },
  safeAreaBottom: {
    top: 776,
  },
  homeScreen: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default HomeScreen;
