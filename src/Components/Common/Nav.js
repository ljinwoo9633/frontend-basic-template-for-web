import React from 'react';
import decode from 'jwt-decode';
import { RemoveAccessToken } from '../../Controllers/Remove';
import { PageLoading } from '../Part/Loading/Loading';
import { UnAuthNav, AuthNav } from '../Part/Nav/Nav';
import { CheckUserAuthorization, CheckUnAuthUser, CheckAuthUser } from '../../Controllers/Check';

class Nav extends React.Component
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
                    (<AuthNav />)
                    :
                    (<UnAuthNav />)
                )
                }
            </div>
        )
    }
}

export default Nav;