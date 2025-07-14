import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const{user} = useContext(UserContext);
    
    if(!user) {
        return <h2>Please log in to see your profile</h2>;
    }
    return <div>Welcome, {user.username}</div>
}

export default Profile
