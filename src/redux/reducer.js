import posts from '../data/users';

//reducer 
const userReducer = function posts(currentState = posts, action){
    console.log(action.index);
    return currentState 
}

export default userReducer;