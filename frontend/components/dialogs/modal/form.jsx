import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      formInput: this.props.formInput || ''
    });

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      formInput: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state.formInput);
  }

  render() {
    return (
      <form>
        <label>
          <input
            type='text'
            onChange={this.handleInput}
            value={this.state.formInput} />
        </label>
        <input
          type="submit"
          onClick={this.handleSubmit}
          value={this.state.formType} />
      </form>
    )
  }
}

export default Form;
