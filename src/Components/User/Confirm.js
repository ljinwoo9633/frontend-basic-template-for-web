import React from 'react';
import decode from 'jwt-decode';
import { PageLoading } from '../Part/Loading/Loading';
import { ConfirmHeader, ConfirmSection, ConfirmFooter } from '../Part/User/Confirm';
import { RemoveAccessToken } from '../../Controllers/Remove';
import { CheckState, CheckUserAuthorization } from '../../Controllers/Check';


class Confirm extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isLoading: true
        }
    }

    UNSAFE_componentWillMount = () => {
        try
        {
            const USER = decode(localStorage.getItem('accessToken'));
            const RESULT = CheckUserAuthorization(USER);

            if(RESULT)
            {
                let emailVerification = USER.emailVerification;
                
                if(emailVerification)
                {
                    this.props.history.push('/');
                }
                else
                {
                    RemoveAccessToken();
                    CheckState(this)
                }
            }
            else
            {
                RemoveAccessToken();
                CheckState(this);
            }
        }
        catch(error)
        {
            RemoveAccessToken();
            CheckState(this);
        }
    }

    render()
    {
        let {
            isLoading
        } = this.state;
        return(
            <div>
                {isLoading ?
                (<PageLoading />)
                :
                (<div>
                    <ConfirmHeader />
                    <ConfirmSection />
                    <ConfirmFooter />
                </div>)
                }
            </div>
        )
    }
}

export default Confirm;