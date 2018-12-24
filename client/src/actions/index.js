import axios from 'axios'
import { FETCH_USER, FETCH_SURVEYS } from './types';


export const fetchUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/current_user')
    return dispatch({type: FETCH_USER, payload: res.data })
  } catch (e) {
    console.log('[fetch user] error', e);
  }

}

// export const handleToken = (dispatch) => {
//   return dispatch({type: 'ADD_CREDIT', payload: '5'})
// }
// export const handleToken = (token) => async (dispatch) => {
//     const res = await axios.post('/api/stripe')
//     console.log('token', token, 'res', res);
//     return dispatch({type: 'ADD_CREDIT', payload: res.data })
// }

export const handleToken = token => async dispatch => {
   const res = await axios.post('/api/stripe', token);

   dispatch({ type: FETCH_USER, payload: res.data });
 };

export const submitSurvey = (values, history) => async dispatch => {
  console.log('submitSurvey', values);
  try {
      const res = await axios.post('/api/surveys', values)
      history.push('/surveys')
      dispatch({type: FETCH_USER, payload: res.data})
   } catch(e) {
       console.log('error', e.message);
   }
}

export const fetchSurveys = (chosenPage, pageSize) => async (dispatch) => {
    // console.log('[actions]', 'chosenPage', chosenPage, 'pageSize', pageSize);
    const res = await axios.get('/api/surveys', {
      params: {
        activePage: chosenPage,
        pageSize: pageSize
      }
    })
    // console.log('[actions] res', res);
    dispatch({type: FETCH_SURVEYS, payload: res.data})
}
