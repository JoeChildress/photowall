//ACTION CREATOR FN
//ACTION OBJ

export function removePost(index) {
  return {
    type: 'REMOVE_POST',
    index //ES6 SHORTCUT TO SAME KEY/VALUE
  }
}

export function addPost(post) {
  return {
    type: 'ADD_POST',
    post
  }
}