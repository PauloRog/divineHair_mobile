/* eslint-disable react/prop-types */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Bakground';
// import { Container } from './styles';

const Dashboard = () => <Background />;

export default Dashboard;

Dashboard.navigationOptions = {
  tabBarLabel: 'Schedules',
  tabBarIcon: ({tintColor}) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
