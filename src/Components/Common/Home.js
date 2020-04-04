import React from 'react';
import decode from 'jwt-decode';
import { PageLoading } from '../Part/Loading/Loading';
import { AuthHome, UnAuthHome } from '../Home/Home';
import { CheckUserAuthorization, CheckAuthUser, CheckUnAuthUser } from '../../Controllers/Check';
import { RemoveAccessToken } from '../../Controllers/Remove';

class Home extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isLoading: true,
            isLogin: false
        }
    }

    UNSAFE_componentWillMount = () => {
        try
        {
            if(localStorage.getItem('accessToken'))
            {
                const USER = decode(localStorage.getItem('accessToken'));
                const RESULT = CheckUserAuthorization(USER);

                if(RESULT)
                {
                    CheckAuthUser(this);
                }
                else
                {
                    RemoveAccessToken();
                    CheckUnAuthUser(this);
                }
            }
            else
            {
                RemoveAccessToken();
                CheckUnAuthUser(this);
            }
        }
        catch(error)
        {
            RemoveAccessToken();
            CheckUnAuthUser(this);
        }
    }

    render()
    {
        let {
            isLoading,
            isLogin
        } = this.state;
        return(
            <div>
                {isLoading ?
                (<PageLoading />)
                :
                (isLogin ?
                    (<AuthHome />)
                    :
                    (<UnAuthHome />)
                )
                }
            </div>
        )
    }
}

export default Home;