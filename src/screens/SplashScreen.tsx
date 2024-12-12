import React from 'react';
import { ActivityIndicator, Image, ImageBackground, View } from 'react-native';
import { appInfor } from '../constants/appInfor';
import { SpaceComponent } from '../components';
import { appColor } from '../constants/appColor';



const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/splash-img.png')}
      style={{
        flex: 1, 
        justifyContent:'center',
        alignItems: 'center',}}
        imageStyle={{flex: 1}}>

      <Image source={require('../assets/images/logo.png')} 
      style={{
        width: appInfor.sizes.WIDTH * 0.7,
        resizeMode: 'contain',
      }}/>

      <SpaceComponent height={20} />
        <ActivityIndicator color={appColor.gray} size={22} />

    </ImageBackground>
    
  );
}

export default SplashScreen
