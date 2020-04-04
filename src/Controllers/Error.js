export let TryError = (error, receivedThis) => {
    console.log(error);
    receivedThis.setState(
        {
            errors: [
                {
                    msg: "에러 발생!"
                }
            ],
            isLoading: false
        }
    )
}

export let CommonError = (error, receivedThis) => {
    console.log(error);
    receivedThis.setState(
        {
            errors: [
                {
                    msg: "에러 발생!"
                }
            ],
            isLoading: false
        }
    )
}