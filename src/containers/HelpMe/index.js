import React, { Component } from 'react';

class HelpMe extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      title: ''
    };

    // functions
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleSubmitButton(e) {
    e.preventDefault();
    console.log("HELP ME REQUEST SUBMITTED");
  }

  render() {
    return (
      <div>
        <h1>Create a help request</h1>
        <p>Enter a title for your request:</p>
        <input
          type="text"
          onChange={this.handleTitleChange}
        />
        <button onClick={this.handleSubmitButton}>Submit</button>
      </div>
    );
  }
}

export default HelpMe;