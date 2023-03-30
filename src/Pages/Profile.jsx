import {useParams } from 'react-router-dom';

function Profile() {
    const { userId } = useParams();
    return(
        <div>
            <p>The Student ID of user is {userId}</p>
        </div>
    );
}

export default Profile;