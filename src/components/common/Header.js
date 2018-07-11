import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = {
  headerContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600'
  }
}

export { Header };