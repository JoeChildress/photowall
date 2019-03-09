//ACTION CREATOR FN
//ACTION OBJ

export function removePost(index) {
  return {
    type: 'REMOVE_POST',
    index: index
  }
}

//ADD POSTS