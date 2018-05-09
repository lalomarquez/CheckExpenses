import { SHOW_USERS } from '../helpers/constActions'

const users = [
    { id: 1, name: 'jelipe' },
    { id: 2, name: 'juanito' }
]

// function showUsers() {
//     return {
//         type: SHOW_USERS,
//         payload: users
//     }
// }

const showUsers = () => {
    return {
        type: SHOW_USERS,
        payload: users
    }
}

export { showUsers }