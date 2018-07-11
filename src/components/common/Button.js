import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
      <Text style={textStyle}> 
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = {
  buttonStyle: {
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: '#33b5e5',
    width: 100,
    padding: 10,
    marginTop: 10,
    
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#fff'
  }
}

export { Button };