import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, value, placeholder, onChangeText, length }) => {
  const { containerStyle, labelStyle, inputStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        autoCorrect={false}
        onChangeText={onChangeText}
        maxLength={length}
      />
    </View>
  );
}

const styles = {
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    margin: 10,

  },
  labelStyle: {
    color: '#000',
    fontSize: 16,
    flex: 1,
    marginRight: 10,
    marginLeft: 10
  },
  inputStyle: {
    fontSize: 16,
    flex: 2.5,
    marginRight: 10,
    paddingBottom: 0,
    paddingTop: 0,
  }
}
export { Input };