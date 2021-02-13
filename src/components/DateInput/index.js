/* eslint-disable react/prop-types */
import React, {useState, useMemo} from 'react';
import {format} from 'date-fns';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, DateButton, DateText, Picker} from './styles';

function DateInput({date, onChange}) {
  const [opened, setOpened] = useState(false);
  const dateFormatted = useMemo(() => format(date, 'MMMM dd, yyyy'), [date]);

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>
      {opened && (
        <Picker>
          <DatePicker
            date={date}
            onDateChange={onChange}
            minimumDate={new Date()}
            mode="date"
            minuteInterval={60}
            androidVariant="iosClone"
          />
        </Picker>
      )}
    </Container>
  );
}

export default DateInput;
