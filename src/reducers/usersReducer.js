import { SHOW_USERS } from '../helpers/constActions'
import initialState from '../api/users.json'

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_USERS:   
            return Object.assign({}, state, { users: state.users })
        default:
            return state
    }
}

export default usersReducer