import { checkAuth } from '../utils/auth.jsx';
import axios from 'axios';

export const USER_SIGN_IN = 'USER_SIGN_IN';
export const USER_SIGN_OUT = 'USER_SIGN_OUT';
export const SAVE_POST = 'SAVE_POST';
export const GET_POSTS = 'GET_POSTS';
export const SET_STATE_POSTS = 'SET_STATE_POSTS';
export const GETTING_POSTS = 'GETTING_POSTS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
export const SET_POST_TO_EDIT = 'SET_POST_TO_EDIT';
export const SAVING_POST = 'SAVING_POST';
export const SAVED_POST = 'SAVED_POST';
export const SAVE_POST_ERROR = 'SAVE_POST_ERROR';
export const SAVE_REDIRECT = 'SAVE_REDIRECT';
export const ADD_EDITOR = 'ADD_EDITOR';

axios.defaults.headers.common['jwt'] = localStorage.token;

export const userSignIn = (token) => {
  return {
    type: USER_SIGN_IN,
    token: token,
  }
}

export const userSignOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  return {
    type: USER_SIGN_OUT
  }
}

export const savePost = (html, title, author, id) => {
  console.log('save action')

  return dispatch => {
    dispatch(savingPost());
    if (id !== undefined) {
      axios.post('/addStory', {
        html,
        title,
        author,
        id,
      }).then(res => {
        dispatch(savedPost());
      }).catch(err => {
        dispatch(savePostError(err))
      })
    } else {
      axios.post('/addStory', {
        html,
        title,
        author,
      }).then(res => {
        dispatch(savedPost());
      }).catch(err => {
        dispatch(savePostError(err))
        console.log('save error: ', err)
      })
    }
  }
}

export const savingPost = () => {
  return {
    type: SAVING_POST
  }
}

export const savedPost = () => {
  return {
    type: SAVED_POST
  }
}

export const saveRedirect = () => {
  return {
    type: SAVE_REDIRECT
  }
}

export const savePostError = (err) => {
  console.log(err)
  return {
    type: SAVE_POST_ERROR
  }
}

export const getPosts = () => {
  return (dispatch) => {
    dispatch(gettingPosts())
    axios.get('/allStories').then(res => {
      dispatch(setStatePosts(res.data));
    }).catch(err => {
      dispatch(getPostsErr(err));
    });

  }
  return {
    type: GET_POSTS
  }
}

export const gettingPosts = () => {
  return {
    type: 'GETTING_POSTS'
  }
}

export const getPostsErr = (err) => {
  console.log(err);
  return {
    type: GET_POSTS_ERROR,
  }
}

export const setStatePosts = (posts) => {
  return {
    type: SET_STATE_POSTS,
    data: posts,
  }
  
}

export const setPostToEdit = (post) => {
  return {
    type: SET_POST_TO_EDIT,
    data: post,
  }
}

export const addEditor = () => {
  return {
    type: ADD_EDITOR
  }
}

