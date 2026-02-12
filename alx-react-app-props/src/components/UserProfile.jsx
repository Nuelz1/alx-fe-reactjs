import {useContext} from 'react';
import UserContext from './UserContext';

function UserProfile() {
    const userData = useContext(UserContext);
    
    if (!userData){
        return <p>No user data available.</p>;
    }
    return (
        <div>
            <h2>{userData.name}</h2>
            <p>Age: {userData.age}</p>
            <p>Email: {userData.email} </p>
        </div>
    );
};

export default UserProfile;
