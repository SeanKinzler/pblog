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
export const SET_POST_TO_RENDER = 'SET_POST_TO_RENDER';
export const DELETING_POST = 'DELETING_POST';
export const DELETED_POST = 'DELETED_POST';
export const DELETE_POST_ERROR = 'DELETE_POST_ERROR';

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

export const savePost = (html, title, author, blurb, id) => {
  console.log('save action')

  return dispatch => {
    dispatch(savingPost());
    console.log(blurb);
    if (id !== undefined) {
      axios.post('/api/addStory', {
        html,
        title,
        author,
        id,
        blurb,
      }).then(res => {
        dispatch(savedPost());
      }).catch(err => {
        dispatch(savePostError(err))
      })
    } else {
      axios.post('/api/addStory', {
        html,
        title,
        author,
        blurb,
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

export const deletePost = (post) => {
  return dispatch => {
    console.log(post);
    dispatch(deletingPost());
    axios.delete('/api/editStory', {
      params: {
        id: post.id,
        slug: post.slug,
      }
    }).then(res => {
      dispatch(deletedPost());
      dispatch(getPosts());
    }).catch(err => {
      dispatch(deletePostError(err));
    })
  }
}

export const deletingPost = () => {
  return {
    type: DELETING_POST
  }
}

export const deletedPost = () => {
  return {
    type: DELETED_POST
  }
}

export const deletePostError = (err) => {
  console.log('deletePost Error: ', err);
  return {
    type: DELETE_POST_ERROR
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

export const getPosts = (cb = () => {}) => {
  return (dispatch) => {
    dispatch(gettingPosts())
    axios.get('/api/allStories').then(res => {
      dispatch(setStatePosts(res.data));
      cb();
    }).catch(err => {
      dispatch(getPostsErr(err));
      cb();
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
  let slugInd = {};
  posts.forEach(post => {
    slugInd[post.slug] = post;
  })
  return {
    type: SET_STATE_POSTS,
    data: [posts, slugInd],
  }
  
}

export const setPostToEdit = (post) => {
  return {
    type: SET_POST_TO_EDIT,
    data: post,
  }
}

export const setPostToRender = (post) => {
  return {
    type: SET_POST_TO_RENDER,
    data: post,
  }
}

export const addEditor = () => {
  return {
    type: ADD_EDITOR
  }
}

