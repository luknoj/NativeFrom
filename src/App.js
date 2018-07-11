
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Header } from './components/common';
import Form from './components/Form';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header title='Form' />
        <Form />
      </View>
    );
  }
}

