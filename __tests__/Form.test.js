import React from 'react';
import Form from '../src/components/Form';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const form = renderer.create(
    <Form />
  ).toJSON();
  expect(form).toMatchSnapshot();
});

test('validate name correctly when correct', () => {
  const form = renderer.create(
    <Form />
  ).getInstance();

  form.validateName("Test");
  expect(form.state.errorImie).toEqual(false);
});

test('validate name correctly when incorrect', () => {
  const form = renderer.create(
    <Form />
  ).getInstance();

  form.validateName("test");
  expect(form.state.errorImie).toEqual("Wrong name");

  form.validateName("");
  expect(form.state.errorImie).toEqual("Wrong name");

  form.validateName("tTst");
  expect(form.state.errorImie).toEqual("Wrong name");

});

test('validate email correctly when correct', () => {
  const form = renderer.create(
    <Form />
  ).getInstance();

  form.validateEmail("asd@asd.pl");
  expect(form.state.errorEmail).toEqual(false);
});

test('validate email correctly when incorrect', () => {
  const form = renderer.create(
    <Form />
  ).getInstance();

  form.validateEmail("test");
  expect(form.state.errorEmail).toEqual("Wrong email");

  form.validateEmail("");
  expect(form.state.errorEmail).toEqual("Wrong email");

  form.validateEmail("testpolska.pl");
  expect(form.state.errorEmail).toEqual("Wrong email");

  form.validateEmail("123@123.123");
  expect(form.state.errorEmail).toEqual("Wrong email");
});

test('validate zip code correctly when correct', () => {
  const form = renderer.create(
    <Form />
  ).getInstance();

  form.validateZip("12-345");
  expect(form.state.errorKod).toEqual(false);
});

test('validate zip code correctly when incorrect', () => {
  const form = renderer.create(
    <Form />
  ).getInstance();

  form.validateZip("12-3456");
  expect(form.state.errorKod).toEqual("Wrong zip code");

  form.validateZip("");
  expect(form.state.errorKod).toEqual("Wrong zip code");

  form.validateZip("ab-cde");
  expect(form.state.errorKod).toEqual("Wrong zip code");

  form.validateZip("123456");
  expect(form.state.errorKod).toEqual("Wrong zip code");
});

test('validate request function on failure', () => {
  const form = renderer.create(
    <Form />
  ).getInstance();

  form.validateZip("");
  form.validateEmail("");
  form.validateName("");

  expect(form.sendForm()).toEqual();

  form.validateZip("64-321");
  form.validateEmail("");
  form.validateName("");
  form.sendForm();

  expect(form.sendForm()).toEqual();

  form.validateZip("65-321");
  form.validateEmail("");
  form.validateName("Jacek");
  form.sendForm();

  expect(form.sendForm()).toEqual();

})