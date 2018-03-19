const PostList = props => {
    const { data } = props;
    return (
        <div>
            {data.map( post => <PostItem key={post.id} title={post.title} body={post.body} />)}
        </div>
    )
}
export default PostList