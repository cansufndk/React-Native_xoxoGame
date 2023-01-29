import * as constant from '../constant';

const INITIAL_STATE = {
  visible: false,
  modalEasy: false,
  modalMedium: false,
  modalHard: false,
  loading: false,
};

const app = (state = INITIAL_STATE, actionObj) => {
  switch (actionObj.type) {
    case constant.MODAL_VISIBLE:
      return {
        ...state,
        visible: actionObj.payload,
      };
      break;

    case constant.EASY_MODAL:
      return {
        ...state,
        modalEasy: actionObj.payload,
      };
      break;

    case constant.MEDIUM_MODAL:
      return {
        ...state,
        modalMedium: actionObj.payload,
      };
      break;

    case constant.HARD_MODAL:
      return {
        ...state,
        modalHard: actionObj.payload,
      };
      break;

    case constant.LOADING:
      return {
        loading: actionObj.payload,
      };

    default:
      return state;
      break;
  }
};

export {app};
