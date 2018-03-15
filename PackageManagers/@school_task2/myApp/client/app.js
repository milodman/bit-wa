import {Post} from "./post.js"

const url = 'http://127.0.0.1:3000';

const initPost = () => {
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
}


const displayPosts = (posts) => {
    const $row = $(".row");

    const displaySinglePost = (posts) => {
        posts.forEach(post => {
            const {title, intro} = post;

            let $singleElement = `<div class="col s12">
                <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">${title}</span>
                    <p>${intro}</p>
                </div>`;

            $row.append($singleElement);

        });
    }

    return displaySinglePost(posts)
}

export {
    initPost
}