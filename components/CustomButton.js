import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({
  onPress,
  children,
  variant = 'solid',
  color = 'primary',
  size = 'md',
}) => {
  const { buttonStyle, textStyle } = getStyles(variant, color, size);

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const colorMap = {
  primary: '#6200ee',
  secondary: '#696969',
  action: '#ffd700',
  danger: '#b00020',
};

const getStyles = (variant, color, size) => {
  const baseColor = colorMap[color] || colorMap.primary;

  const sizes = {
    sm: { padding: 8, width: 35, height: 35, fontSize: 14 },
    md: { padding: 12, width: 60, height: 50, fontSize: 16 },
    lg: { padding: 12, width: 110, height: 50, fontSize: 16 },
  };

  const { padding, width, height, fontSize } = sizes[size] || sizes.md;

  const buttonStyle = {
    width: width,
    height: height,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: variant === 'outline' ? 2 : 0,
    backgroundColor:
      variant === 'solid'
        ? baseColor
        : variant === 'ghost'
        ? 'transparent'
        : 'transparent',
    borderColor: variant === 'outline' ? baseColor : 'transparent',
  };

  const textStyle = {
    color: variant === 'solid' ? '#fff' : baseColor,
    fontSize,
    fontWeight: '600',
  };

  return { buttonStyle, textStyle };
};
