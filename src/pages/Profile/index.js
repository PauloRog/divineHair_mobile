/* eslint-disable react/prop-types */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Bakground';
// import { Container } from './styles';

const Profile = () => <Background />;

export default Profile;

Profile.navigationOptions = {
  tabBarLabel: 'My Profile',
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
