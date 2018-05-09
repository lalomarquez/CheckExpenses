import React from 'react'
import { connect } from 'react-redux'
import { showUsers } from '../actions'

class listUsers extends React.Component {

    componentWillMount() {
        this.props.showUsers()
    }

    renderUserList() {
        return this.props.users.map((user) => {
            return (
                <li key={user.id}>{user.name}</li>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>User List</h2>
                <ul>
                    {/* {this.renderUserList()} */}
                    {this.props.users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.users
    }
}

export default connect(mapStateToProps, { showUsers })(listUsers)