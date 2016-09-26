const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweetMessage: ''
    }

    this.changeTweetMessage = this.changeTweetMessage.bind(this);
  }

  changeTweetMessage(event) {
     this.setState({
       tweetMessage: event.target.value
     })
   }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweetMessage} onChange={this.changeTweetMessage} />
      <h4>Remaining Characters: {this.props.maxChars - this.state.tweetMessage.length}</h4>
      </div>
    );
  }
}

module.exports = TwitterMessage;
