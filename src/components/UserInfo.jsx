import React from 'react';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }

    this.updateUsername = this.updateUsername.bind(this);
  }

  updateUsername(e) {
    e.preventDefault();

    this.setState({ username: e.target.value });
  }

  render() {
    return(
      <div>
        <label>
          Enter your username:
          <input onChange={this.updateUsername}></input>
        </label>
      </div>
    )
  }
}

export default UserInfo;
