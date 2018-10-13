import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import surveyReducer from './surveysReducer'

export default combineReducers({
  authReducer,
  form: formReducer,
  surveys: surveyReducer
})
