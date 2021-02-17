/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import Background from '../../components/Bakground';
import Appointment from '../../components/Appointment';
import { Container, Title, List } from './styles';

function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('appointment');
      setAppointments(response.data);
    }
    loadAppointments();
  }, []);

  async function handleCancel(id) {
    const response = await api.delete(`appointment/${id}`);

    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, canceled_at: response.data.canceled_at }
          : appointment,
      ),
    );
  }

  return (
    <Background>
      <Container>
        <Title>Schedules</Title>
        <List
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

export default Dashboard;

Dashboard.navigationOptions = {
  tabBarLabel: 'Schedules',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
