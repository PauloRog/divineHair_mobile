/* eslint-disable react/prop-types */
import React from 'react';
import {Image} from 'react-native';
import logo from '../../assets/logo.png';
import Background from '../../components/Bakground';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

const SignIn = ({navigation}) => (
  <Background>
    <Container>
      <Image source={logo} />
      <Form>
        <FormInput
          icon="person-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Your name"
        />
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Your email"
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Your password"
        />
        <SubmitButton onPress={() => {}}>Create an account</SubmitButton>
      </Form>
      <SignLink onPress={() => navigation.navigate('SignIn')}>
        <SignLinkText>I already have an account</SignLinkText>
      </SignLink>
    </Container>
  </Background>
);

export default SignIn;
