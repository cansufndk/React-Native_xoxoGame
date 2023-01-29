import {type} from 'os';
import * as constant from '../constant';

export const modalVisible = visible => ({
  type: constant.MODAL_VISIBLE,
  payload: visible,
});

export const easyGame = modalEasy => ({
  type: constant.EASY_MODAL,
  payload: modalEasy,
});

export const mediumGame = modalMedium => ({
  type: constant.MEDIUM_MODAL,
  payload: modalMedium,
});

export const hardGame = modalHard => ({
  type: constant.HARD_MODAL,
  payload: modalHard,
});

export const loading = loading => ({
  type: constant.LOADING,
  payload: loading,
});
