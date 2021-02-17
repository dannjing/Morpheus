import { API_URL, FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import axios from "axios";
import * as api from '../api/index.js';
import history from "../history";

export function preserveToken(token) {
  return {
    type: "PRESERVE_TOKEN",
    token
  };
}

export function login(username, password) {
  return function(dispatch) {
    axios
      .post(`${API_URL}/auth/login`, { username, password })
      .then(res => {
        dispatch(loginSuccess(res.data, username));
        // const token = res.data.token;
        // //console.log(token);
        // axios.defaults.headers.common["Authorization"] = token;
        dispatch(preserveToken(res.data.token));
        history.push("/");
      })
      .catch(err => {
        if (err.response.status === 401) {
          dispatch(loginFailure(err));
        }
      });
  };
}

export function loginSuccess(data, username) {
  return {
    type: "LOGIN_SUCCESS",
    data,
    username
  };
}

export function loginFailure(data) {
  return {
    type: "LOGIN_FAILURE",
    data
  };
}

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
