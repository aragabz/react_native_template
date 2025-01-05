import React from 'react';
import { Text as RNText, TextStyle, TextProps as RNTextProps } from 'react-native';

export interface TextProps extends RNTextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption';
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

const textStyles: Record<Required<TextProps>['variant'], TextStyle> = {
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  },
  body1: {
    fontSize: 16,
    lineHeight: 24,
  },
  body2: {
    fontSize: 14,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
  },
};

export const Text: React.FC<TextProps> = ({
  variant = 'body1',
  color,
  align,
  style,
  children,
  ...props
}) => {
  return (
    <RNText
      style={[
        textStyles[variant],
        {
          color,
          textAlign: align,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default Text;
