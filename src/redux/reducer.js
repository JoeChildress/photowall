import posts from '../data/posts'

//SET INITIAL STATE FROM POSTS DATA FILE TO PRELOAD APP WITH DATA
//ALWAYS RETURN STATE
const postReducer = function posts(state = posts, action) {
    console.log(action.index)
    switch (action.type) {
        case 'REMOVE_POST': return [...state.slice(0,action.index), ...state.slice(action.index +1)]
        case 'ADD_POST': return [...state, action.post]
        default: return state
    }
} 

export default postReducer