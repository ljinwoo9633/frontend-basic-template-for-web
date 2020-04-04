import React from 'react';

export let UnAuthNav = () => {
    return(
        <nav>
            <a href="/login">
                로그인
            </a>
            <a href="/register">
                회원가입
            </a>
        </nav>
    )
}

export let AuthNav = () => {
    return(
        <nav>
            <a href="/logout">
                로그아웃
            </a>
        </nav>
    )
}