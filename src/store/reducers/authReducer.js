const initState = {
    authError: null
};

const authReducer = ( state = initState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_FAILED':
            return {
                ...state,
                authError: action.error.message //'Login Failed'
            }
        case 'SIGNOUT_SUCCESS':
            console.log('SIGNOUT_SUCCESS');
            return state;
        case 'SIGNOUT_ERROR':
            console.log('SIGNOUT_ERROR' + action.error.message);
            return state;
        case 'SIGNUP_SUCCESS':
            console.log("User signup successfull");
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log("User signup error:" + action.error.message);
            return {
                ...state,
                authError: action.error.message
            }
        default:
            return state;
    }
}

export default authReducer;