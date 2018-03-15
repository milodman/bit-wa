import {
    Post
} from "./post.js"


const displayPosts = (posts) => {
    const $row = $(".row");

    posts.forEach(post => {
        const {
            title,
            intro
        } = post;

        let $singleElement = `<div class="col s12">
            <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">${title}</span>
                <p>${intro}</p>
            </div>`;

        $row.append($singleElement);

    });


}

export {
    displayPosts
};