import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from './common';
import axios from 'axios';

export default class Form extends Component {
  state = {
    email: '',
    kod: '',
    imie: '',
    errorEmail: true,
    errorKod: true,
    errorImie: true,
    errorMsg: true,
    responseMsg: null,
    responseStatus: null,
  }

  validateEmail(email) {
    var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!emailReg.test(email)){
      this.setState({ errorEmail: "Wrong email", email: email });
    } else {
      this.setState({ errorEmail: false, email: email});
    }
  }

  validateName(name) {
    var imie = /^[A-Z]{1}[a-z]{2,19}$/;

    if(!imie.test(name)){
      this.setState({ errorImie: "Wrong name", imie: name });
    } else {
      this.setState({ errorImie: false, imie: name});
    }
  }

  validateZip(zip) {
    var kod = /^[0-9]{2}-[0-9]{3}$/;

    if(!kod.test(zip)){
      this.setState({ errorKod: "Wrong zip code", kod: zip });
    } else {
      this.setState({ errorKod: false, kod: zip});
    }
  }

  sendForm() { 
    if (this.state.email.length < 1 || this.state.imie.length < 1 || this.state.kod.length < 1){
      this.setState({ responseMsg: "Fields cant be empty." });
    } else {
      this.setState({ responseMsg: null });
    }
    if (!this.state.errorEmail && !this.state.errorImie && !this.state.errorKod){
      var data = {
        'zip': this.state.kod, 
        'email': this.state.email, 
        'name': this.state.imie 
      };

      this.setState({ 
        errorMsg: false,
        email: '',
        kod: '',
        imie: '',
        errorEmail: true,
        errorKod: true,
        errorImie: true,
        errorMsg: true,
      });
      
      axios.post('http://10.30.21.115:8888/api/entries/create/', data)
      .then( response => {
        console.log(response);
        if(response.status === 201){
          this.setState({ 
            responseMsg: "Your form has been successfully send.",
            responseStatus: response.status,
          })
        } else {
          this.setState({ 
            responseMsg: "Something went wrong, try again.",
            responseStatus: response.status,
          })
        }
      })
      .catch( error => {
        console.log(error);
      })
    }
  } 
  render(){
    return (
      <View>
        <Input 
          value={this.state.email} 
          placeholder="jan.kowalski@wp.pl" 
          label="Email" 
          onChangeText={ email => this.validateEmail(email) }
          length={100}
        />
        <Text style={{ alignSelf: 'center', color: 'red' }}>
          {typeof(this.state.errorEmail) === 'string' ? "Email is invalid" : null }
        </Text>

        <Input 
          value={this.state.imie} 
          placeholder="Jan" 
          label="Imię"
          onChangeText={ imie => this.validateName(imie) } 
          length={20}
        />
        <Text style={{ alignSelf: 'center', color: 'red' }}>
          {typeof(this.state.errorImie) === 'string' ? "Name is invalid" : null }
        </Text>

        <Input 
          value={this.state.kod} 
          placeholder="12-345" 
          label="Kod pocztowy"
          onChangeText={ kod => this.validateZip(kod) } 
          length={6}
        />
        <Text style={{ alignSelf: 'center', color: 'red' }}>
          {typeof(this.state.errorKod) === 'string' ? "Zip code is invalid" : null }
        </Text>

        <Text style={{ alignSelf: 'center', color: this.state.responseStatus !== 201 ? 'red' : 'green' }}>
          {this.state.responseMsg}
        </Text>

        <Button onPress={this.sendForm.bind(this)}>
          Submit
        </Button>
      </View>
    );
  }
}

