import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      dialog: this.props.dialog || ''
    });

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(key) {
    return e => this.setState({[key]: e.currentTarget.value});
  }

  handleSubmit() {
    this.props.handleSubmit(this.state.dialog);
  }

  render() {
    return (
      <form>
        <label>
          <input onChange={this.handleInput('dialog')} />
        </label>
        <button onClick={this.handleSubmit}>{this.props.btnText}</button>
      </form>
    )
  }
}

export default Form;
