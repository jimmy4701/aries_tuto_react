import React from 'react'

const UserContext = React.createContext(null)

export const withUser = Component => props => (
    <UserContext.Consumer>
        {userAuth => <Component {...props} userAuth={userAuth}/>}
    </UserContext.Consumer>
)



export default UserContext

