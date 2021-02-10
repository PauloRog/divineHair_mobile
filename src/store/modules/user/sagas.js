import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '../../../services/api';
import {updateProfileSuccess, updateProfileFailure} from './actions';

export function* updateProfile({payload}) {
  try {
    const {name, email, avatar_id, ...rest} = payload.data;
    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };
    const response = yield call(api.put, 'user', profile);

    Alert.alert('Updated success', 'Profile updated successfully!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Error updating profile', 'Check your data');
    yield put(updateProfileFailure);
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
