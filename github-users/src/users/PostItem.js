const PostItem = props => {
    const { id, title, body } = props;
    return (
        <div className="col s12">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{title}</span>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )
}
export default PostItem