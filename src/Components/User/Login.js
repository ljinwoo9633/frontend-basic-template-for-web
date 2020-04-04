import React from 'react';
import axios from 'axios';
import decode from 'jwt-decode';
import { RemoveAccessToken } from '../../Controllers/Remove';
import { CheckUserAuthorization, CheckState } from '../../Controllers/Check';
import { TryError } from '../../Controllers/Error';
import { SetAccessToken } from '../../Controllers/Set';
import { PageLoading } from '../Part/Loading/Loading';
import { BACKEND_URL } from '../../Controllers/Constant';
import { LoginHeader, LoginSection, LoginFooter } from '../Part/User/Login';

class Login extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isLoading: true,
            email: '',
            password: ''
        }
    }

    UNSAFE_componentWillMount = () => {
        try
        {
            const USER = decode(localStorage.getItem('accessToken'));
            const RESULT = CheckUserAuthorization(USER);

            if(RESULT)
            {
                this.props.history.push('/');
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

    HandleOnChanging = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    HandleOnSubmiting = async (event) => {
        event.preventDefault();
        this.setState(
            {
                isLoading: true
            }
        );
        try
        {
            await axios.post(`${BACKEND_URL}/login`,
                {
                    email: this.state.email,
                    password: this.state.password
                }
            )
            .then((res) => {
                let accessToken = res.data.accessToken;
                SetAccessToken(accessToken);

                this.props.history.push('/');
            })
        }
        catch(error)
        {
            TryError(error, this);
        }
    }

    render()
    {
        let {
            email,
            isLoading,
            password
        } = this.state;
        return(
            <div>
                {isLoading ?
                (<PageLoading />)
                :
                (<div>
                    <form onSubmit={this.HandleOnSubmiting}>
                        <LoginHeader />
                        <LoginSection
                            email={email}
                            password={password}
                            HandleOnChanging={this.HandleOnChanging}
                        />
                        <LoginFooter />
                    </form>
                </div>)
                }
            </div>
        )
    }
}

export default Login;