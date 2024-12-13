import { View, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { appColor } from '../constants/appColor';
import { fontFamilies } from '../constants/fontFamilies';
import { globalStyles } from '../styles/globalStyles';

interface Props {
    text: string;
    color?: string;
    size?: number;
    flex?: number;
    font?: string;
    style?: StyleProp<TextStyle>;
}


const TextComponent = (props: Props) => {

    const { text, color, size, flex, font } = props;

  return  (
  <Text style={[
    globalStyles.text,
    {color: color ?? appColor.text,
    fontSize: size ?? 17,
    flex: flex ?? 0,
    fontFamily: font ?? fontFamilies.regular,},
  ]}>
    {text}
    </Text>
  );
};

export default TextComponent