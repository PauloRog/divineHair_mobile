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

const SignIn = () => (
  <Background>
    <Container>
      <Image source={logo} />
      <Form>
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
        <SubmitButton onPress={() => {}}>Login</SubmitButton>
      </Form>
      <SignLink>
        <SignLinkText>Create an account</SignLinkText>
      </SignLink>
    </Container>
  </Background>
);

export default SignIn;
