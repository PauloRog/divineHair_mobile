/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateInput from '../../../components/DateInput';
import Background from '../../../components/Bakground';
import {Container} from './styles';

function SelectDateTime() {
  const [date, setDate] = useState(new Date());
  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
}

export default SelectDateTime;

SelectDateTime.navigationOptions = ({navigation}) => ({
  title: 'Select time',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
