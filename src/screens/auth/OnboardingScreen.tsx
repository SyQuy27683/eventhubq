import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../styles/globalStyles'
import Swiper from 'react-native-swiper'
import { appColor } from '../../constants/appColor';
import { appInfor } from '../../constants/appInfor';
import { TextComponent } from '../../components';
import { fontFamilies } from '../../constants/fontFamilies';

const OnboardingScreen = ({navigation}: any) => {
    const [index, setIndex] = useState(0);


  return  <View style={[globalStyles.container]}>
  <Swiper style ={{}} loop={false} 
    onIndexChanged={num => setIndex(num)} 
    index={index}
    activeDotColor={appColor.white}>
    <Image source={require('../../assets/images/onboarding-1.png')} 
    style = {{flex: 1, 
    width: appInfor.sizes.WIDTH, 
    height: appInfor.sizes.HEIGHT, 
    resizeMode: 'cover'}}/>
    <Image source={require('../../assets/images/onboarding-2.png')} 
    style = {{flex: 1, 
    width: appInfor.sizes.WIDTH, 
    height: appInfor.sizes.HEIGHT, 
    resizeMode: 'cover'}}/>
    <Image source={require('../../assets/images/onboarding-3.png')} 
    style = {{flex: 1, 
    width: appInfor.sizes.WIDTH, 
    height: appInfor.sizes.HEIGHT, 
    resizeMode: 'cover'}}/>
  </Swiper>
  <View
  style ={[{
    paddingHorizontal: 50, 
    paddingVertical: 20, 
    position: 'absolute', 
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
  },
]}>
    <TouchableOpacity onPress={() =>{navigation.navigate('LoginScreen')}}>
    <TextComponent text='Skip' color={appColor.gray2} font={fontFamilies.semiBold} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => 
        index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')}>
        <TextComponent text='Next' color={appColor.white} font={fontFamilies.semiBold} />
    </TouchableOpacity>

  </View>
</View>

};

export default OnboardingScreen

const styles = StyleSheet.create({
    text: {
        color: appColor.white,
        fontSize: 17,
        fontWeight: 'bold',
        
    }
});