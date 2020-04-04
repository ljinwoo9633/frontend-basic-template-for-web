import React from 'react';
import axios from 'axios';
import decode from 'jwt-decode';
import { PageLoading } from '../Part/Loading/Loading';
import { CheckState, CheckUserAuthorization } from '../../Controllers/Check';
import { RegisterHeader, RegisterSection, RegisterFooter } from '../Part/User/Register';
import { BACKEND_URL } from '../../Controllers/Constant';
import { CommonError, TryError } from '../../Controllers/Error';
import { RemoveAccessToken } from '../../Controllers/Remove';


class Register extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isLoading: true,
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            gender: true,
            birthDate: ''
        }

        this.HandleOnChanging = this.HandleOnChanging.bind(this);
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

        if(this.state.birthDate === '')
        {
            this.setState(
                {
                    isLoading: false
                }
            );
            return;
        }
        
        try
        {
            await axios.post(`${BACKEND_URL}/register`,
                {
                    email: this.state.email,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword,
                    name: this.state.name,
                    gender: this.state.gender,
                    birthDate: this.state.birthDate
                }
            )
            .then(() => {
                this.props.history.push('/confirm');
            })
            .catch((err) => {
                CommonError(err, this);
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
            isLoading,
            email,
            password,
            confirmPassword,
            name
        } = this.state;
        return(
            <div>
                {isLoading ?
                (<PageLoading />)
                :
                (<div>
                    <form onSubmit={this.HandleOnSubmiting}>
                    <RegisterHeader />
                    <RegisterSection 
                        email={email}
                        password={password}
                        name={name}
                        confirmPassword={confirmPassword}
                        HandleOnChanging={this.HandleOnChanging}
                    />
                    <RegisterFooter />
                    </form>
                </div>)
                }
            </div>
        )
    }
}

export default Register;