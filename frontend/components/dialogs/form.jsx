import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      content: ''
    });

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(key) {
    return value => (
      this.setState({
        [key]: value
      })
    )
  }

  handleSubmit() {
    this.props.createFile(this.state);
  }

  render() {
    return (
      <form>
        <label>
          Name
          <input onChange={this.handleInput('name')} />
        </label>
        <label>
          Text
          <input onChange={this.handleInput('text')} />
        </label>
        <button onClick={this.handleSubmit}>Upload File</button>
      </form>
    )
  }
}

export default Form;
