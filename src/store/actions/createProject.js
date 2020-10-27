export const createProject = (project) => {
        return (dispatch, getState, { getFirestore, getFirebase }) => {
            // make async request
            const firestore = getFirestore();
            firestore.collection('projects').add({
                ...project,
                authorName: 'Aditya Tiwari',
                createdAt: new Date()

            }).then( () => {  
                dispatch({type: 'CREATE_PROJECT', project});
            }).catch( err => {
                dispatch({type: 'CREATE_PROJECT_ERROR', err});
            });
        }
};