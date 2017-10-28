import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from '../Footer';
import Header from '../Header';
import ConnectedMap from '../Map';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      userAuthenticated: false
    };
  }

  componentWillMount() {
    if(localStorage.getItem("token") !== null) {
      this.setState({
        username: localStorage.getItem("username"),
        userAuthenticated: true
      });
    }
  }

  render() {
    return(
      <div>
        <Header
          username={this.state.username}
          userAuthenticated={this.state.userAuthenticated}
        />
        <ConnectedMap />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
