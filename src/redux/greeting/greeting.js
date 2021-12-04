import axios from 'axios';

const baseURL = 'https://nameless-mesa-16018.herokuapp.com/api/v1/messages.json';

const SET_GREETINGS = 'greetingStore/greetings/SET_GREETINGS';

// eslint-disable-next-line
export const setGreeting = () => async (dispatch) => {
  dispatch({ type: SET_GREETINGS });

  const response = await axios.get(baseURL);
  return dispatch({
    type: SET_GREETINGS,
    payload: response.data,
  });
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_GREETINGS:
      return { ...action.payload, pending: true };
    default:
      return state;
  }
};

export default reducer;
