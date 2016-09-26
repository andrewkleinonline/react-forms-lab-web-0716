const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.checkInputFields = this.checkInputFields.bind(this);
    this.changeUsernameValue = this.changeUsernameValue.bind(this);
    this.changePasswordValue = this.changePasswordValue.bind(this);
  }

  checkInputFields(event){
    event.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.onSubmit()
    }
  }

  changeUsernameValue(event){
    this.setState({
      username: event.target.value
    })
  }

  changePasswordValue(event){
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.checkInputFields}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.changeUsernameValue} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.changePasswordValue} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
