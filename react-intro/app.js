const Product = () => {
    return <li>My Product</li>

}



const ShoppingList = () => {
    return <ul> < Product /> </ul>
}


const App = () => {
    return (
        <div>
        <h1> hi from react! </h1>
        <ShoppingList />
        </div>
    )
}













const rootElement = document.querySelector(".root");
ReactDOM.render(< App />, rootElement);