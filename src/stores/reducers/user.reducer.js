const initialState = 0

export const userReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'FETCH_USER_REQUEST':
      return {
        ...state,
        isLoading: true
      }

    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        users: payload,
        isLoading: false
      }
    case 'FETCH_USER_FAILED':
      return {
        ...state,
        isLoading: false
      }

    case 'ADD_TO_DO':
      return state + 1

 //new

      case 'SET_VALUE': {
        return {
            ...state,
            [action.key]: action.value,
        }
    }

    default:
      return state
  }
}




export default userReducer
