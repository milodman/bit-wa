const backendURL = 'http://127.0.0.1:3001/';
const createPosts = (postList) => {
    return postList.map((postData) => {
        const {id,title,intro} = postData;
        return new Post(id, title, intro);
    })
}
const fetchData = () => {
    return fetch(backendURL)
        .then((response) => {
            return response.json();
        })
        .then((postList) => {
            return createPosts(postList)
        })
}

export {
    fetchData
}


