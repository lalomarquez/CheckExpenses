import { SHOW_USERS } from '../helpers/constActions'

const initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_USERS:        
            return Object.assign({}, state, { users: action.payload })
        default:
            return state
    }
}

export default usersReducer