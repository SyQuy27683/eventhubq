import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SplashScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {

  // State
  const [isShowSplash, setIsShowSplash] = useState(true);

  const [assetToken, setAssetToken] = useState('');

  const {getItem, setItem} = useAsyncStorage('assetToken');

// useEffect
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    },1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    checkLogin();
  }, []);


  // Function
  const checkLogin = async () => {
    const token = await getItem();
    
    token && setAssetToken(token);
  }


  return (
  <>
  <StatusBar 
  barStyle="dark-content" 
  backgroundColor="transparent" 
  translucent/>
  {isShowSplash ? ( 
      <SplashScreen/> 
        ) : (
          <NavigationContainer>
            {assetToken ? <MainNavigator/> : <AuthNavigator/>}
          </NavigationContainer>
        )}
        </>
  );
};

export default App;