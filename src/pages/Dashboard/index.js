/* eslint-disable react/prop-types */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Bakground';
import Appointment from '../../components/Appointment';
import {Container, Title, List} from './styles';

const data = [1, 2, 3, 4, 5];

const Dashboard = () => (
  <Background>
    <Container>
      <Title>Schedules</Title>
      <List
        data={data}
        keyExtractor={(item) => String(item)}
        renderItem={({item}) => <Appointment data={item} />}
      />
    </Container>
  </Background>
);

export default Dashboard;

Dashboard.navigationOptions = {
  tabBarLabel: 'Schedules',
  tabBarIcon: ({tintColor}) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
