const initState = {
        projects: [ 
        //     {id: 1, title: 'Medical Expense', content: 'PWA made to be used with Mahalaxmi Medical to track data of expense done there.'}
        ]
};


const projectReducer = ( state = initState, action) => {
    
    switch (action.type) {
        case 'CREATE_PROJECT':
                console.log('Project Created', action.project);
                break;
        case 'CREATE_PROJECT_ERROR':
                console.log('Project Creation Error', action.err);
                break;
        default:
                break;
    }
    return state;
}

export default projectReducer;


// [
//     {id: 1, title: 'Medical Expense', content: 'PWA made to be used with Mahalaxmi Medical to track data of expense done there.'},
//     {id : 2, title: 'Digital Catalogue', content: 'Digital Catalogue to be made for Monginis to show availability of variety in cakes at stores.'},
//     {id: 3, title: 'MyGate', content: 'Clone of myGate app to be made again for same reason to track employees around orgnization'}
// ]