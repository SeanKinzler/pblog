import {
  SAVING_POST,
  SAVED_POST,
  SAVE_POST_ERROR,
  GETTING_POSTS,
  SET_STATE_POSTS,
  GET_POSTS_ERROR,
  SET_POST_TO_EDIT,
  SAVE_REDIRECT,
  ADD_EDITOR,
  SET_POST_TO_RENDER,
} from '../actions/index.js';

const initialState = {
  posts: [],
  slugInd: {},
  fetching: false,
  saved: false,
  editorCount: 0,
  toRender: null,
}



//keep inputs unchanged!!!
const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVING_POST:
      return Object.assign({}, state, {
        fetching: true, 
      });
    case SAVED_POST:
      return Object.assign({}, state, {
        fetching: false, 
        saved: true,
      });
    case SAVE_POST_ERROR:
      return Object.assign({}, state, {fetching: false});
    case GETTING_POSTS:
      return Object.assign({}, state, {fetching: true});
    case SET_STATE_POSTS:
      return Object.assign({}, state, {
        fetching: false, 
        posts: action.data[0],
        slugInd: action.data[1],
      });
    case GET_POSTS_ERROR:
      return Object.assign({}, state, {fetching: false});
    case SET_POST_TO_EDIT:
      return Object.assign({}, state, {
        toEdit: action.data,
      });
    case SET_POST_TO_RENDER:
      return Object.assign({}, state, {
        toRender: action.data,
      })
    case ADD_EDITOR:
      return Object.assign({}, state, {editorCount: state.editorCount + 1});
    case SAVE_REDIRECT:
      return Object.assign({}, state, {saved: false});
    default:
      return state;
  }
}

export default PostReducer;