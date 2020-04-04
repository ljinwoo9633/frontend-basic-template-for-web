import React from 'react';
import Nav from '../../Common/Nav';
import { LabelTitle } from '../Common/Common';

export let RegisterHeader = () => {
    return(
        <header>
            <Nav />
        </header>
    )
}

export let RegisterSection = ({
    email,
    password,
    name,
    confirmPassword,
    HandleOnChanging
}) => {
    return(
        <section>
            <RegisterEmailInput
                email={email}
                HandleOnChanging={HandleOnChanging}
            />
            <RegisterNameInput
                name={name}
                HandleOnChanging={HandleOnChanging}
            />
            <RegisterPasswordInputGroup
                password={password}
                confirmPassword={confirmPassword}
                HandleOnChanging={HandleOnChanging}
            />
            <RegisterDateInput
                HandleOnChanging={HandleOnChanging}
            />
            <RegisterGenderInput
                HandleOnChanging={HandleOnChanging}
            />
        </section>
    )
}

export let RegisterFooter = () => {
    return(
        <footer>
            <RegisterButton />
        </footer>
    )
}

//Part
let RegisterEmailInput = ({
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

export let RegisterPasswordInputGroup = ({
    password,
    confirmPassword,
    HandleOnChanging
}) => {
    return(
        <div>
            <RegisterPasswordInput
                password={password}
                HandleOnChanging={HandleOnChanging}
            />
            <RegisterConfirmPasswordInput
                confirmPassword={confirmPassword}
                HandleOnChanging={HandleOnChanging}
            />
        </div>
    )
}

export let RegisterPasswordInput = ({
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

export let RegisterConfirmPasswordInput = ({
    confirmPassword,
    HandleOnChanging
}) => {
    return(
        <div>
            <LabelTitle 
                title={"비밀번호 확인"}
            />
            <div>
                <input 
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={HandleOnChanging}
                    placeholder="비밀번호 확인"
                    className="form-control"
                />
            </div>
        </div>
    )
}

let RegisterNameInput = ({
    name,
    HandleOnChanging
}) => {
    return(
        <div>
            <LabelTitle 
                title={"이름"}
            />
            <div>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={HandleOnChanging}
                    placeholder="이름 입력"
                    className="form-control"
                />
            </div>
        </div>
    )
}

let RegisterDateInput = ({
    HandleOnChanging
}) => {
    return(
        <div>
            <LabelTitle
                title={"생일"}
            />
            <div>
                <input 
                    type="date"
                    name="birthDate"
                    onChange={HandleOnChanging}
                    className="form-control"
                />
            </div>
        </div>
    )
}

let RegisterGenderInput = ({
    HandleOnChanging
}) => {
    return(
        <div>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline1" name="gender" value={true} className="custom-control-input" defaultChecked onInput={HandleOnChanging} />
                <label className="custom-control-label" htmlFor="customRadioInline1"><i className="fas fa-male"></i> 남성</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="gender" value={false} className="custom-control-input" onInput={HandleOnChanging} />
                <label className="custom-control-label" htmlFor="customRadioInline2"><i className="fas fa-female"></i> 여성</label>
            </div>
        </div>
    )
}

let RegisterButton = () => {
    return(
        <button type="submit">
            회원가입
        </button>
    )
}