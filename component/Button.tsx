import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const Button = () => {

  return (

    <TouchableOpacity
      style={{
        borderRadius: 8,
        height: 50,
        width: 245,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e94832'
      }}
      activeOpacity={0.7}
    >
      <Text style={{ fontSize: 18, color: 'white', textTransform: 'uppercase' }}></Text>
    </TouchableOpacity>
  );
}
