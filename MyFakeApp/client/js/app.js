import { fetchData } from "./data.js";
import { createPostDiv } from "./ui.js";

// import {
//     Post
// } from './post.js'



const init = () => {

    fetchData()
        .then(posts => {
            createPostsDiv(posts);
        })
        .catch((err) => {
            throw (err)
        })

}

export {
    init
}