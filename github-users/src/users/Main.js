const Main = props => {
    const { data } = props;
    return (
        <div className="container">
            <PostList data={data} />
        </div>
    )
}
export default Main