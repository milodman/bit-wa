const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">MyApp</a>
            </div>
        </nav>
    )
}

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

const PostList = props => {
    const { data } = props;
    return (
        <div>
            {data.map( post => <PostItem key={post.id} title={post.title} body={post.body} />)}
        </div>
    )
}

const Main = props => {
    const { data } = props;
    return (
        <div className="container">
            <PostList data={data} />
        </div>
    )
}

const App = ({ data }) => {
    // const { data } = props
    return (
        <div>
            <Header />,
            <Main data={data} />
        </div>
    )
}

ReactDOM.render(
    <App data={posts} />,
    document.querySelector(".root")
)
