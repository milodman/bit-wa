const loremIpsum = require("lorem-ipsum");
const { Post } = require("./post");



const getTitle = () => loremIpsum({
    count: 3,
    units: "words"
});

const getIntro = () => loremIpsum({
    count: 2,
    units: "sentences"
});

const getFakePostData = (count) => {
    const postList = [];

    for (let i = 0; i < count; i++) {
        const id = i;
        const title = getTitle();
        const intro = getIntro();
        const currentPost = new Post(id, title, intro);

        postList.push(currentPost);
    }

    return postList;
}
module.exports = {
    getFakePostData
};