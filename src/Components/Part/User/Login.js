import React from 'react';
import Nav from '../../Common/Nav';
import { LabelTitle } from '../Common/Common';

export let LoginHeader = () => {
    return(
        <header>
            <Nav />
        </header>
    )
}

export let LoginSection = ({
    email,
    password,
    HandleOnChanging
}) => {
    return(
        <section>
            <LoginEmailInput
                email={email}
                HandleOnChanging={HandleOnChanging}
            />
            <LoginPasswordInput
                password={password}
                HandleOnChanging={HandleOnChanging}
            />
        </section>
    )
}

export let LoginFooter = () => {
    return(
        <LoginButton />
    )
}

let LoginEmailInput = ({
    email,
    HandleOnChanging
}) => {
    return(
        <div>
            <LabelTitle
                title={"이메일"}
            />
            <div>
                <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={HandleOnChanging}
                    placeholder="이메일 입력"
                    className="form-control"
                />
            </div>
        </div>
    )
}

let LoginPasswordInput = ({
    password,
    HandleOnChanging
}) => {
    return(
        <div>
            <LabelTitle 
                title={"비밀번호"}
            />
            <div>
                <input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={HandleOnChanging}
                    placeholder="비밀번호 입력"
                    className="form-control"
                />
            </div>
        </div>
    )
}

let LoginButton = () => {
    return(
        <button type="submit">
            로그인
        </button>
    )
}