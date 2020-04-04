import axios from 'axios';
import { BACKEND_URL } from './Constant';

export let CheckState = (receivedThis) => {
    receivedThis.setState(
        {
            isLoading: false
        }
    )
};

export let CheckAuthUser = (receivedThis) => {
    receivedThis.setState(
        {
            isLoading: false,
            isLogin: true
        }
    )
};

export let CheckUnAuthUser = (receivedThis) => {
    receivedThis.setState(
        {
            isLoading: false,
            isLogin: false
        }
    )
};

export let CheckUserAuthorization = async (user) => {
    return await (await axios.post(`${BACKEND_URL}/check/user/auth/${user._id}`)).data.result;
}

