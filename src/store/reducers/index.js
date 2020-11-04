import posts from '../../data/dummy-data';
import {
  DELETE_POST,
  CREATE_POST,
  UPDATE_POST,
  CETEGORIZED_ARRAY
} from '../actions';
import postModal from '../../modal/index';

const initialState = {
  availablePost: posts,
  userPosts: posts.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      const newPost = new postModal(
        new Date().toString(),
        'u1',
        action.postData.date,
        action.postData.content,
        action.postData.video,
        action.postData.image,
        action.postData.category,
        action.postData.tag
      );
      return {
        ...state,
        availablePost: state.availablePost.concat(newPost),
        userPosts: state.userPosts.concat(newPost)
      };
    case UPDATE_POST:
      const postIndex = state.userPosts.findIndex(
        prod => prod.id === action.pid
      );
      const updatedPost = new postModal(
        action.pid,
        state.userPosts[postIndex].ownerId,
        state.userPosts[postIndex].date,
        action.postData.content,
        action.postData.video,
        action.postData.image,
        action.postData.category,
        action.postData.tag
      );
      const updateduserPosts = [...state.userPosts];
      updateduserPosts[postIndex] = updatedPost;
      const availablePostIndex = state.availablePost.findIndex(
        prod => prod.id === action.pid
      );
      const updatedAvailablePost = [...state.availablePost];
      updatedAvailablePost[availablePostIndex] = updatedPost;
      return {
        ...state,
        availablePost: updatedAvailablePost,
        userPosts: updateduserPosts
      };
    case DELETE_POST:
      return {
        ...state,
        userPosts: state.userPosts.filter(
          post => post.id !== action.pid
        ),
        availablePost: state.availablePost.filter(
          post => post.id !== action.pid
        )
      };
  }
  return state;
};
