import {
    Post
} from "./post.js";


import {
    displayPosts
} from "./ui.js"

const url = 'http://127.0.0.1:3000';

const makeFetch = () => {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((postData) => postData.map((post) => {
            return new Post(post)
        }))
        .then((newPostList) => {
            displayPosts(newPostList);
        })

        .catch((error) => {
            throw (error);
        });
}


export {
    makeFetch
};