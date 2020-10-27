export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then( () => {
            dispatch({ type: 'LOGIN_SUCCESS'});
        }).catch( error => {
            console.log(error);
            dispatch({ type: 'LOGIN_FAILED', error});
        });    
    
    }
};

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then( () => {
            dispatch({ type: 'SIGNOUT_SUCCESS'});
        }).catch( error => {
            dispatch({ type: 'SIGNOUT_ERROR', error});
        });
    }
}; 

export const signUp = ( user ) => {
    return(dispatch, getState, { getFirestore, getFirebase }) => {
        const firebase = getFirebase();
        const firestore  = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            user.email,
            user.password
        ).then( (response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: user.firstName,
                lastName: user.lastName,
                initials: user.firstName[0] + user.lastName[0]
            });
        }).then( () => {
            dispatch({type: 'SIGNUP_SUCCESS'});
        }).catch( (error) => {
            dispatch({type: 'SIGNUP_ERROR', error});
        });
         
    }
};