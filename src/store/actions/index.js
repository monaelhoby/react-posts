export const DELETE_POST = 'DELETE_POST';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const CETEGORIZED_ARRAY= 'CETEGORIZED_ARRAY';

export const deletePost = postId => {
  return { type: DELETE_POST, pid: postId };
};

export const createPost = (date, image,content, video,category, tag) => {
  return {
    type: CREATE_POST,
    postData: {
      date,
      image,
      content, 
      video,
      category,
      tag
    }
  };
};

export const updatePost = (id, image,content, video,category,tag) => {
  return {
    type: UPDATE_POST,
    pid: id,
    postData: {
      image,
      content, 
      video,
      category,
      tag
    }
  };
};

