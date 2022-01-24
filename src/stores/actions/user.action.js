import { getUser } from '../../api/fakeApiUser'

export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST'
  }
}

export const fetchUserSuccess = users => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: users
  }
}

export const fetchUserFail = () => {
  return {
    type: 'FETCH_USER_FAILED'
  }
}

export const addToDo = (users) => {
  return {
    type: 'ADD_TO_DO',
    payload: users
  }
}

export const setValue = (key, value) =>{
   return{ 
     type: "SET_VALUE", key, value 
    }
  }

export const fetchDataUser = () => async dispatch => {
  try {
    dispatch(fetchUserRequest())
    const { data } = await getUser()
    dispatch(fetchUserSuccess(data))
  } catch (error) {
    dispatch(fetchUserFail())
  }
}
