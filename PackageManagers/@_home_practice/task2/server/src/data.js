const {
    Post
} = require("./post");
const loremIpsum = require('lorem-ipsum');


const createTitle = () => loremIpsum({
    count: 3,
    units: "words"
});
const createIntro = () => loremIpsum({
    count: 2,
    units: "sentences"
});

const getPosts = (count) => {
    let postList = [];
    for (let i = 0; i < count; i++) {
        const postParams = {
            id: i,
            title: createTitle(),
            intro: createIntro(),
        }
        const post = new Post(postParams);
        postList.push(post);

    }
    return postList;
}

module.exports={getPosts};