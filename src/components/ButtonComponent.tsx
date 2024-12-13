import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import { TextComponent } from '.';
import { globalStyles } from '../styles/globalStyles';
import { appColor } from '../constants/appColor';
import { fontFamilies } from '../constants/fontFamilies';

    interface Props {
        icon?: ReactNode;
        text: string;
        type?: 'primary' | 'text' | 'link';
        color?: string;
        styles?: StyleProp<ViewStyle>;
        textColor?: string;
        textStyles?: StyleProp<TextStyle>;
        onPress: () => void;
        iconFlex?:'right' | 'left';
    }


const ButtonComponent = ( props : Props) => {

    const { icon, text, type, color, styles, textColor, textStyles, onPress, iconFlex } = props;

  return (
    type === 'primary' ?

    <TouchableOpacity 
    onPress={onPress}
    style={[
        globalStyles.button, 
        {
    backgroundColor: color ?? appColor.primary
    },
    styles,
    ]}>
        {icon && icon}
        <TextComponent 
        text={text} 
        color={textColor ?? appColor.white} 
        styles={[
            textStyles,
            {
                marginLeft: icon ? 12 : 0,
            },
        ]} 
        flex= {icon && iconFlex === 'right' ? 1 : 0}
        />  
        {icon && iconFlex === 'right' && icon}
    </TouchableOpacity>
    :
    <TouchableOpacity>
        <TextComponent 
        text={text} 
        color= {type === 'link' ? appColor.link : appColor.text} />
            
    </TouchableOpacity>
  )
  ;
};

export default ButtonComponent