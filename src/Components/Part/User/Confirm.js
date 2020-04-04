import React from 'react';
import Nav from '../../Common/Nav';

export let ConfirmHeader = () => {
    return(
        <header>
            <Nav />
        </header>
    )
}

export let ConfirmSection = () => {
    return(
        <section>
            <ConfirmTitle />
            <ConfirmParagraph />
            <ConfirmButtons />
        </section>
    )
}

export let ConfirmFooter = () => {
    return(
        <footer>
        </footer>
    )
}

let ConfirmTitle = () => {
    return(
        <div>
            <strong>
                이메일 발송이 완료되었습니다!
            </strong>
        </div>
    )
}

let ConfirmParagraph = () => {
    return(
        <div style={{
            wordBreak: 'break-all',
            whiteSpace: 'pre-line'
        }}>
            <p>
                이메일 링크를 클릭해주세요!
            </p>
        </div>
    )
}

let ConfirmButtons = () => {
    return(
        <div>
            <div>
                <a href="https://mail.naver.com">Naver Email</a>
                <a href="https://mail.google.com">Google Email</a>
            </div>
        </div>
    )
}