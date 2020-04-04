import React from 'react';
import { PageLoading } from '../Part/Loading/Loading';
import { HomeHeader } from '../Part/Home/Home';

export class UnAuthHome extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isLoading: false
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
                    <HomeHeader />
                    
                </div>)
                }
            </div>
        )
    }
}

export class AuthHome extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isLoading: false
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
                    <HomeHeader />
                </div>)
                }
            </div>
        )
    }
}