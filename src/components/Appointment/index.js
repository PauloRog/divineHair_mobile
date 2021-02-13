/* eslint-disable react/prop-types */
import React, {useMemo} from 'react';
import {parseISO, formatRelative} from 'date-fns';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Left, Avatar, Info, Name, Time} from './styles';

function Appointment({data, onCancel}) {
  const dateParsed = useMemo(
    () =>
      formatRelative(parseISO(data.date), new Date(), {
        addSufix: true,
      }),
    [data.date],
  );

  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? data.provider.avatar.url
              : `https://avatars.dicebear.com/api/bottts/${data.provider.name}.svg`,
          }}
        />

        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>
      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}

export default Appointment;
