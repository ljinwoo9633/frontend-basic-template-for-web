import React from 'react';
import axios from 'axios';
import { RemoveAccessToken } from '../../Controllers/Remove';
import { BACKEND_URL } from '../../Controllers/Constant';

class Logout extends React.Component
{
    UNSAFE_componentWillMount = async () => {
        try
        {
            await axios.post(`${BACKEND_URL}/logout`, {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                    }
                }
            )
            .then(() => {
                RemoveAccessToken();
                this.props.history.push('/');
            })
            .catch(() => {
                RemoveAccessToken();
                this.props.history.push('/');
            })
        }
        catch
        {
            RemoveAccessToken();
            this.props.history.push('/');
        }
    }
    render()
    {
        return(
            <div>
                Logout...
            </div>
        )
    }
}

export default Logout;