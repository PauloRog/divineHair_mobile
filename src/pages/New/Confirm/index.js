/* eslint-disable react/prop-types */
import React, {useMemo} from 'react';
import {formatRelative, parseISO} from 'date-fns';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../../services/api';
import Background from '../../../components/Bakground';
import {Container, Avatar, Name, Time, SubmitButton} from './styles';

function Confirm({navigation}) {
  const provider = navigation.getParam('provider');
  const time = navigation.getParam('time');
  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date()),
    [time],
  );

  async function handleAddAppointment() {
    await api.post('appointment', {
      provider_id: provider.id,
      date: time,
    });

    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://avatars.dicebear.com/4.5/api/bottts/${provider.name}.svg`,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>
        <SubmitButton onPress={handleAddAppointment}>
          Confirm schedule
        </SubmitButton>
      </Container>
    </Background>
  );
}

export default Confirm;

Confirm.navigationOptions = ({navigation}) => ({
  title: 'Confirm schedule',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
