// src/js/actions/index.js
import { ADD_ARTICLE, DATA_REQUESTED } from "../constants/action-types";
export function addArticle(payload) {
  if (!payload.id) {
    payload.id = new Date().getTime(); 
  }
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
  return { type: DATA_REQUESTED };
}

/*
export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
} */