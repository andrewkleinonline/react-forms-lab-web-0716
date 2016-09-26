const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemValue: '',
      poemValid: false
    };

    this.changePoemValue = this.changePoemValue.bind(this)
  }

  changePoemValue(event) {
    var linesArray = event.target.value.split("\n")
    const cleanLinesArray = linesArray.map((line, index, poem) => {
      return line.trim().replace(/  +/, ' ')
    })
    if (cleanLinesArray.length != 3) {
      this.setState({
        poemValue: event.target.value,
        poemValid: false
      })
    } else {
      if (cleanLinesArray[0].split(' ').length != 5 || cleanLinesArray[1].split(' ').length != 3 || cleanLinesArray[2].split(' ').length != 5) {
        this.setState({
          poemValue: event.target.value,
          poemValid: false
        })
      } else {
        this.setState({
          poemValue: event.target.value,
          poemValid: true
        })
      }
    }
  }

  render() {
    if (this.state.poemValid) {
      return (
        <div>
          <textarea rows="3" cols="60" value={this.state.poemValue} onChange={this.changePoemValue} />
        </div>
      );
    } else {
      return (
        <div>
          <textarea rows="3" cols="60" value={this.state.poemValue} onChange={this.changePoemValue} />
          <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
        </div>
      );
    }
  }
}

module.exports = PoemWriter;
