import React, { Component } from 'react';
import Header from './partials/Header'
import Footer from './partials/Footer'
import Main from './users/Main'
import { userService } from './../service/UserService'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      displayCard: false,
      displayGrid: false
    }

  }
//feature4
  handleState = (event) => {
    event.preventDefault();
    // this.setState({ displayCard: (this.state.displayCard) ? false : true })
    this.setState({displayCard: !this.state.displayCard})
    this.setState({displayGrid: !this.state.displayGrid})
  }
  //Feature5
  refreshdata = () => {
    userService
    .fetchUsers().then(Userlist =>{
      this.setState({
        users: Userlist
      })
    })
  }

  componentDidMount() {
    userService.fetchUsers()
      .then(UserList => {
        this.setState({ users: UserList })
      })
  }

  render() {
    return (
      <div>
        <Header handleState={this.handleState} displayGrid = {this.state.displayGrid} />
        <Main data={this.state.users} displayCard={this.state.displayCard} />
        <Footer />
      </div>
    );
  }
}



export default App;
